const fs = require('fs');
const files = ['index.html', 'catalog.html', 'bag.html', 'utilities.html', 'lab.html', 'specs.html'];
const faviconTag = '    <link rel="icon" type="image/png" href="images/favicon.png">\n';

files.forEach(file => {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    if(!content.includes('rel="icon"')) {
        // Insert right before </head>
        content = content.replace('</head>', faviconTag + '</head>');
        fs.writeFileSync(file, content);
        console.log('Added favicon tag to ' + file);
    }
});
