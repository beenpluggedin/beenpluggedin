const fs = require('fs'); 
const files = ['index.html', 'catalog.html', 'bag.html', 'utilities.html', 'lab.html', 'specs.html']; 
const css = `
        /* PRODUCT IMAGE HOVER EFFECT */
        .product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        
        .product-visual:hover .product-img,
        .hero-product-frame:hover .product-img,
        .strip-card-visual:hover .product-img,
        .cart-item-thumb:hover .product-img,
        .detail-hero-visual:hover .product-img,
        .lab-visual:hover .product-img {
            transform: scale(1.05);
            filter: brightness(1.1);
        }
`; 
files.forEach(f => { 
    if(!fs.existsSync(f)) return; 
    let content = fs.readFileSync(f, 'utf8'); 
    
    if(!content.includes('PRODUCT IMAGE HOVER EFFECT')) {
        content = content.replace('</style>', css + '    </style>'); 
        fs.writeFileSync(f, content); 
        console.log(f, 'updated with CSS'); 
    }
});
