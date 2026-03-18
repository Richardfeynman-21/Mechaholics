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
  // Handle JSX attributes: src="/assets/file.png"
  content = content.replace(/src="\/assets\/([^"]+)"/g, 'src={`${import.meta.env.BASE_URL}assets/$1`}');
  
  // Handle JS object properties: logo: '/assets/file.png'
  content = content.replace(/(image|logo):\s*'\/assets\/([^']+)'/g, '$1: `${import.meta.env.BASE_URL}assets/$2`');
  
  fs.writeFileSync(file, content);
});

console.log('Fixed asset references in ' + files.length + ' files.');
