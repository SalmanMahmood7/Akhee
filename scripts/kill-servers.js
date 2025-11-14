const { exec } = require('child_process');
const os = require('os');

function killProcesses() {
  const isWindows = os.platform() === 'win32';
  
  if (isWindows) {
    // On Windows, use taskkill to find and kill Node processes running Next.js
    exec('tasklist | findstr "node.exe"', (error, stdout) => {
      if (!error && stdout) {
        // Look for processes that might be Next.js
        exec('wmic process where "name=\'node.exe\'" get ProcessId,CommandLine', (err, output) => {
          if (!err && output) {
            const lines = output.split('\n');
            lines.forEach(line => {
              if (line.includes('next') || line.includes('.next')) {
                const match = line.match(/\s+(\d+)\s*$/);
                if (match) {
                  const pid = match[1];
                  exec(`taskkill /F /PID ${pid}`, (killErr) => {
                    if (!killErr) {
                      console.log(`✓ Killed process ${pid}`);
                    }
                  });
                }
              }
            });
          }
        });
      }
      
      // Also try to kill any process on port 3001
      exec('netstat -ano | findstr :3001', (err, stdout) => {
        if (!err && stdout) {
          const lines = stdout.split('\n');
          lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            const pid = parts[parts.length - 1];
            if (pid && pid !== '0') {
              exec(`taskkill /F /PID ${pid}`, (killErr) => {
                if (!killErr) {
                  console.log(`✓ Killed process on port 3001 (PID${pid})`);
                }
              });
            }
          });
        }
      });
    });
  } else {
    // On Unix-like systems, use pkill
    exec('pkill -f next', (error) => {
      if (!error) {
        console.log('✓ Killed Next.js processes');
      }
    });
    
    // Also kill anything on port 3001
    exec('lsof -ti:3001 | xargs kill -9', (error) => {
      if (!error) {
        console.log('✓ Killed process on port 3001');
      }
    });
  }
  
  setTimeout(() => {
    console.log('✓ Server cleanup complete');
  }, 1000);
}

killProcesses();