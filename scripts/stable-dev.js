#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const os = require('os');
const fs = require('fs');
const path = require('path');

const isWindows = os.platform() === 'win32';

function killAllProcesses() {
  return new Promise((resolve) => {
    console.log('🔄 Cleaning up existing processes...');
    
    if (isWindows) {
      exec('taskkill /F /IM node.exe', () => {
        exec('netstat -ano | findstr :3001', (err, stdout) => {
          if (!err && stdout) {
            const lines = stdout.split('\n');
            lines.forEach(line => {
              const parts = line.trim().split(/\s+/);
              const pid = parts[parts.length - 1];
              if (pid && pid !== '0') {
                exec(`taskkill /F /PID ${pid}`, () => {});
              }
            });
          }
          setTimeout(resolve, 2000);
        });
      });
    } else {
      exec('pkill -f next', () => {
        exec('lsof -ti:3001 | xargs kill -9', () => {
          setTimeout(resolve, 2000);
        });
      });
    }
  });
}

function cleanCache() {
  return new Promise((resolve) => {
    console.log('🧹 Cleaning cache...');
    
    const nextDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(nextDir)) {
      fs.rmSync(nextDir, { recursive, force });
      console.log('✓ Removed .next directory');
    }
    
    exec('npm cache clean --force', (error) => {
      console.log('✓ Cleaned npm cache');
      resolve();
    });
  });
}

function startServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting Next.js development server...');
    
    const cmd = isWindows ? 'npx.cmd' 'npx';
    const server = spawn(cmd, ['next', 'dev', '-p', '3001', '-H', '0.0.0.0'], {
      stdio'pipe',
      cwd.cwd(),
      shell
    });

    let started = false;
    
    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      
      if ((output.includes('Ready') || output.includes('started server')) && !started) {
        started = true;
        setTimeout(() => {
          console.log('\n✅ Server is ready!');
          console.log('🔗 Local  http://localhost:3001');
          console.log('🌐 Network://172.23.216.2:3001\n');
          resolve(server);
        }, 1000);
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`Error${data}`);
    });

    server.on('error', (error) => {
      reject(error);
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!started) {
        reject(new Error('Server startup timeout'));
      }
    }, 30000);
  });
}

async function main() {
  try {
    console.log('🔧 Akhee - Stable Development Server\n');
    
    await killAllProcesses();
    await cleanCache();
    const server = await startServer();
    
    // Graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n👋 Shutting down...');
      server.kill();
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      console.log('\n👋 Shutting down...');
      server.kill();
      process.exit(0);
    });

    if (isWindows) {
      process.on('SIGBREAK', () => {
        console.log('\n👋 Shutting down...');
        server.kill();
        process.exit(0);
      });
    }
    
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
}

main();