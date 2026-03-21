const fs = require('fs');
const file = 'src/App.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard zinc text colors with one shade lighter
content = content.replace(/text-zinc-(300|400|500|600)/g, (match, level) => {
    return 'text-zinc-' + (parseInt(level) - 100);
});

// Also make some specific structural elements a bit brighter if needed, like text-white/90 -> text-white
content = content.replace(/text-white\/90/g, 'text-white');
content = content.replace(/text-white\/80/g, 'text-white/90');

fs.writeFileSync(file, content);
console.log('Successfully brightened text colors in App.jsx');
