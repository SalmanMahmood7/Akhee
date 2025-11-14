#!/usr/bin/env node

const { spawn } = require('child_process');
const { existsSync } = require('fs');

// Colors for console output
const colors = {
  red'\x1b[31m',
  green'\x1b[32m',
  yellow'\x1b[33m',
  blue'\x1b[34m',
  magenta'\x1b[35m',
  cyan'\x1b[36m',
  reset'\x1b[0m'
};

function log(message, color = 'cyan') {
  console.log(`${colors[color]}🚀 ${message}${colors.reset}`);
}

async function cleanCache() {
  log('Cleaning cache and temporary files...', 'yellow');
  
  try {
    await new Promise((resolve) => {
      const cleanProcess = spawn('rm', ['-rf', '.next', 'node_modules/.cache'], { stdio'ignore' });
      cleanProcess.on('close', () => {
        log('Cache cleaned successfully', 'green');
        resolve();
      });
    });
  } catch (error) {
    log('Cache cleanup failed (continuing anyway)', 'yellow');
  }
}

async function killExistingProcesses() {
  log('Checking for existing processes...', 'yellow');
  
  try {
    const killProcess = spawn('pkill', ['-f', 'next dev'], { stdio'ignore' });
    await new Promise((resolve) => {
      killProcess.on('close', (code) => {
        if (code === 0) {
          log('Killed existing processes', 'green');
        }
        resolve();
      });
    });
    
    // Wait for processes to fully close
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    // No existing processes, which is fine
  }
}

async function startServer() {
  log('Starting optimized Next.js server...', 'blue');
  
  const env = {
    ...process.env,
    NODE_OPTIONS'--max-old-space-size=4096',
    NEXT_TELEMETRY_DISABLED'1',
    FORCE_COLOR'1'
  };
  
  const serverProcess = spawn('npx', ['next', 'dev'], {
    stdio'inherit',
    env
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log('Shutting down server...', 'yellow');
    serverProcess.kill('SIGTERM');
    process.exit(0);
  });
  
  serverProcess.on('error', (error) => {
    log(`Server error${error.message}`, 'red');
    process.exit(1);
  });
  
  log('Server started! Access at://localhost:3000', 'green');
}

async function main() {
  log('🔧 Brillion Digital Dev Server', 'magenta');
  log('===============================', 'cyan');
  
  try {
    await killExistingProcesses();
    await cleanCache();
    await startServer();
  } catch (error) {
    log(`Error${error.message}`, 'red');
    process.exit(1);
  }
}

main();
