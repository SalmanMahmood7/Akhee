#!/usr/bin/env node

const { spawn } = require('child_process');
const { exec } = require('child_process');
const os = require('os');
const fs = require('fs');
const path = require('path');

let serverProcess = null;
let restartCount = 0;
const maxRestarts = 5;
const isWindows = os.platform() === 'win32';

// Kill any existing processes (cross-platform)
function killExistingProcesses() {
  return new Promise((resolve) => {
    if (isWindows) {
      // Windows Node processes running Next.js
      exec('wmic process where "name=\'node.exe\'" get ProcessId,CommandLine', (err, output) => {
        if (!err && output) {
          const lines = output.split('\n');
          lines.forEach(line => {
            if (line.includes('next') || line.includes('.next')) {
              const match = line.match(/\s+(\d+)\s*$/);
              if (match) {
                const pid = match[1];
                exec(`taskkill /F /PID ${pid}`, () => {});
              }
            }
          });
        }
        
        // Also check port 3001
        exec('netstat -ano | findstr :3001', (err2, stdout) => {
          if (!err2 && stdout) {
            const lines = stdout.split('\n');
            lines.forEach(line => {
              const parts = line.trim().split(/\s+/);
              const pid = parts[parts.length - 1];
              if (pid && pid !== '0') {
                exec(`taskkill /F /PID ${pid}`, () => {});
              }
            });
          }
          setTimeout(resolve, 1000);
        });
      });
    } else {
      // Unix/Linux/Mac
      exec("pkill -f 'next dev' || pkill -f 'node.*next' || true", () => {
        exec('lsof -ti:3001 | xargs kill -9', () => {
          setTimeout(resolve, 1000);
        });
      });
    }
  });
}

// Clean cache (cross-platform)
function cleanCache() {
  return new Promise((resolve) => {
    const nextDir = path.join(process.cwd(), '.next');
    
    // Use Node.js fs to remove directory
    if (fs.existsSync(nextDir)) {
      fs.rmSync(nextDir, { recursive, force });
      console.log('✓ Cleaned .next cache');
    }
    
    // Clean npm cache
    exec('npm cache clean --force', (error) => {
      if (error) console.log('Cache clean warning:', error.message);
      resolve();
    });
  });
}

// Start the development server
function startServer() {
  console.log('🚀 Starting Akhee Development Server...');
  
  const npxCmd = isWindows ? 'npx.cmd' 'npx';
  
  serverProcess = spawn(npxCmd, ['next', 'dev', '-p', '3001', '-H', '0.0.0.0'], {
    stdio'inherit',
    cwd.cwd(),
    shell
  });

  serverProcess.on('error', (error) => {
    console.error('❌ Server error:', error);
    handleServerCrash();
  });

  serverProcess.on('exit', (code, signal) => {
    if (code !== 0 && signal !== 'SIGTERM' && signal !== 'SIGINT') {
      console.log(`⚠️ Server exited with code ${code}, signal ${signal}`);
      handleServerCrash();
    }
  });

  // Monitor server health
  setTimeout(() => {
    checkServerHealth();
  }, 10000); // Check health after 10 seconds
}

// Check if server is responding (cross-platform)
function checkServerHealth() {
  const http = require('http');
  
  const options = {
    hostname'localhost',
    port3001,
    path'/',
    method'GET',
    timeout5000
  };

  const req = http.request(options, (res) => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      console.log('✅ Server is healthy');
      // Schedule next health check in 30 seconds
      setTimeout(checkServerHealth, 30000);
    } else {
      console.log('⚠️ Server health check failed, restarting...');
      handleServerCrash();
    }
  });

  req.on('error', () => {
    console.log('⚠️ Server health check failed, restarting...');
    handleServerCrash();
  });

  req.on('timeout', () => {
    req.destroy();
    console.log('⚠️ Server health check timeout, restarting...');
    handleServerCrash();
  });

  req.end();
}

// Handle server crashes with intelligent restart
async function handleServerCrash() {
  if (restartCount >= maxRestarts) {
    console.error('❌ Maximum restarts reached. Please check for errors and restart manually.');
    process.exit(1);
  }

  restartCount++;
  console.log(`🔄 Attempting restart #${restartCount}/${maxRestarts}`);

  // Kill current process
  if (serverProcess) {
    if (isWindows) {
      serverProcess.kill();
    } else {
      serverProcess.kill('SIGTERM');
    }
    serverProcess = null;
  }

  // Clean up and restart
  await killExistingProcesses();
  await cleanCache();
  
  setTimeout(() => {
    startServer();
  }, 2000); // Wait 2 seconds before restart
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down gracefully...');
  if (serverProcess) {
    if (isWindows) {
      serverProcess.kill();
    } else {
      serverProcess.kill('SIGTERM');
    }
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Received SIGTERM, shutting down gracefully...');
  if (serverProcess) {
    if (isWindows) {
      serverProcess.kill();
    } else {
      serverProcess.kill('SIGTERM');
    }
  }
  process.exit(0);
});

// Handle Windows-specific signals
if (isWindows) {
  process.on('SIGBREAK', () => {
    console.log('\n👋 Shutting down gracefully...');
    if (serverProcess) {
      serverProcess.kill();
    }
    process.exit(0);
  });
}

// Start the process
async function main() {
  console.log('🔧 Akhee Smart Dev Server');
  console.log('📍 This server will auto-restart on crashes and monitor health');
  console.log('⏹️ Press Ctrl+C to stop\n');
  
  await killExistingProcesses();
  await cleanCache();
  startServer();
}

main().catch(console.error);