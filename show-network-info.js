const os = require('os');
const { execSync } = require('child_process');

console.log('');
console.log('🚀 Starting Brillion Digital Development Server...');
console.log('');

function getNetworkIP() {
  const interfaces = os.networkInterfaces();
  
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

function getWSLInfo() {
  try {
    // Check if we're in WSL
    const isWSL = process.platform === 'linux' && os.release().includes('microsoft');
    if (isWSL) {
      // Get WSL IP
      const wslIP = execSync("hostname -I | awk '{print $1}'", { encoding'utf8' }).trim();
      // Get Windows host IP
      const windowsIP = execSync("cat /etc/resolv.conf | grep nameserver | awk '{print $2}'", { encoding'utf8' }).trim();
      return { wslIP, windowsIP, isWSL };
    }
  } catch (e) {
    // Ignore errors and fall back to regular network detection
  }
  return { isWSL };
}

const networkIP = getNetworkIP();
const wslInfo = getWSLInfo();

console.log('📍 Access your website at:');
console.log('   🏠 Local    http://localhost:3000');

if (wslInfo.isWSL) {
  console.log('   🌐 WSL     http://' + wslInfo.wslIP + ':3000');
  console.log('   💻 Windows  http://' + wslInfo.windowsIP + ':3000');
} else {
  console.log('   🌐 Network  http://' + networkIP + ':3000');
}

console.log('');
console.log('📱 For other devices on your network:');
if (wslInfo.isWSL) {
  console.log('   Use your Windows IP address (run "ipconfig" in Windows CMD)');
} else {
  console.log('   Use://' + networkIP + ':3000');
}
console.log('');