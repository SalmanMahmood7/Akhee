const seconds = parseInt(process.argv[2]) || 1;

console.log(`⏳ Waiting ${seconds} second${seconds > 1 ? 's' ''}...`);

setTimeout(() => {
  console.log('✓ Done waiting');
  process.exit(0);
}, seconds * 1000);