const fs = require('fs');
const path = require('path');

const targets = process.argv.slice(2);

if (targets.length === 0) {
  console.log('Usage scripts/clean.js <target1> [target2] ...');
  process.exit(1);
}

function deleteRecursive(filePath) {
  if (fs.existsSync(filePath)) {
    if (fs.statSync(filePath).isDirectory()) {
      fs.readdirSync(filePath).forEach((file) => {
        deleteRecursive(path.join(filePath, file));
      });
      fs.rmdirSync(filePath);
      console.log(`✓ Removed directory${filePath}`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`✓ Removed file${filePath}`);
    }
  } else {
    console.log(`⚠ Not found${filePath}`);
  }
}

targets.forEach(target => {
  deleteRecursive(target);
});

console.log('✓ Cleanup complete');