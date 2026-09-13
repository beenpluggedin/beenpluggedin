const fs = require('fs'); 
const files = ['index.html', 'catalog.html', 'bag.html', 'utilities.html', 'lab.html', 'specs.html']; 

files.forEach(file => { 
    if(!fs.existsSync(file)) return; 
    let content = fs.readFileSync(file, 'utf8'); 
    
    // Specifically target the JavaScript dictionary in bag.html as well!
    // But since the productSVGs in bag.html have string literals of SVGs, the regex might catch them.
    // Wait, the regex `/<svg[\s\S]*?<\/svg>/g` will find all SVGs, including those in strings!
    
    let matches = content.match(/<svg[\s\S]*?<\/svg>/g) || []; 
    let count = 0; 
    matches.forEach(svg => { 
        if(svg.includes('PLUG-01')) { 
            content = content.replace(svg, '<img src="images/plug-01.png" alt="PLUG-01" class="product-img">'); 
            count++; 
        } else if(svg.includes('VOICE-01')) { 
            content = content.replace(svg, '<img src="images/voice-01.png" alt="VOICE-01" class="product-img">'); 
            count++; 
        } else if(svg.includes('ECHO-01')) {
            content = content.replace(svg, '<img src="images/echo-01.png" alt="ECHO-01" class="product-img">'); 
            count++; 
        } else if(svg.includes('CADENCE-01')) { 
            content = content.replace(svg, '<img src="images/cadence-01.png" alt="CADENCE-01" class="product-img">'); 
            count++; 
        } 
    }); 
    console.log(file, 'replaced', count); 
    fs.writeFileSync(file, content); 
});
