const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/blue-400/g, 'orange-500')
                   .replace(/blue-500/g, 'orange-600')
                   .replace(/blue-600/g, 'orange-600')
                   .replace(/blue-900/g, 'orange-900')
                   .replace(/purple-400/g, 'red-500')
                   .replace(/purple-500/g, 'red-600')
                   .replace(/purple-600/g, 'red-600')
                   .replace(/purple-900/g, 'red-900')
                   .replace(/pink-400/g, 'yellow-500')
                   .replace(/pink-500/g, 'yellow-500');
  fs.writeFileSync(file, content);
});

console.log('Replaced colors in ' + files.length + ' files.');
