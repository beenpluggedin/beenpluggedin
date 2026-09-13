const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The SVG starts right after: <span class="featured-visual-tag">ISOMETRIC / EXPLODED VIEW</span>
// and ends right before: </div>
//                     <div class="featured-info">

const startTag = '<span class="featured-visual-tag">ISOMETRIC / EXPLODED VIEW</span>';
const startIndex = content.indexOf(startTag);

if (startIndex !== -1) {
    const endTag = '<div class="featured-info">';
    const endIndex = content.indexOf(endTag, startIndex);
    
    if (endIndex !== -1) {
        const pre = content.substring(0, startIndex + startTag.length);
        const post = content.substring(content.lastIndexOf('</div>', endIndex));
        
        // Let's just use regex to replace the SVG within the featured-visual div
        // We know it's the second SVG in the file or just the one after ISOMETRIC / EXPLODED VIEW
        
        const svgStart = content.indexOf('<svg', startIndex);
        const svgEnd = content.indexOf('</svg>', svgStart) + 6;
        
        if (svgStart !== -1 && svgStart < endIndex) {
            const beforeSvg = content.substring(0, svgStart);
            const afterSvg = content.substring(svgEnd);
            
            const newContent = beforeSvg + '<img src="images/plug-01-isometric.png" alt="PLUG-01 Isometric Exploded View" class="product-img">' + afterSvg;
            fs.writeFileSync('index.html', newContent);
            console.log('Successfully replaced isometric SVG in index.html');
        } else {
            console.log('SVG not found in the expected range');
        }
    }
} else {
    console.log('ISOMETRIC / EXPLODED VIEW section not found');
}
