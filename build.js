const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Building client application...');
  execSync('cd client && npm run build', { stdio: 'inherit' });

  console.log('Copying built files to root dist directory...');
  
  // Create dist directory if it doesn't exist
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  // Copy client dist to root dist
  execSync('cp -r client/dist/* dist/', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}