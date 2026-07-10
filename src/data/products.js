// src/data/products.js

// ======================
// Living Room
// ======================
import livingBookshelf from "../assets/images/livingroom-bookshelf.jpg";
import livingFoodPlace from "../assets/images/livingroom-foodpalce.jpg";
import livingSofa00 from "../assets/images/livingroom-sofa-00.jpg";
import livingSofa001 from "../assets/images/livingroom-sofa-001.jpg";
import livingSofa01 from "../assets/images/livingroom-sofa-01.avif";
import livingSofa02 from "../assets/images/livingroom-sofa-02.webp";
import livingSofa from "../assets/images/livingroom-sofa.webp";
import livingTvShowcase from "../assets/images/livingroom-tv-showcase.webp";

// ======================
// Bedroom
// ======================
import bedroom01 from "../assets/images/bedroom-01.jpg";
import bedroomClothsBox from "../assets/images/bedroom-clothsbox.webp";
import bedroomFullPackage from "../assets/images/bedroom-fullpacage.jpg";
import bedroomFullPackage02 from "../assets/images/bedroom-fullpacage-02.jpg";
import bedroomTwoBed from "../assets/images/bedroom-twobed.jpg";

// ======================
// Dining
// ======================
import diningBest from "../assets/images/dining-best.jpg";
import diningCafe from "../assets/images/dining-cafe.jpg";
import diningMedium from "../assets/images/dining-medium.jpg";
import diningSimple from "../assets/images/dining-simple.jpg";

// ======================
// Office
// ======================
import officeBright from "../assets/images/office-bright.jpg";
import officeWorkers from "../assets/images/office-formanyworker.jpg";
import officeMeeting from "../assets/images/office-meeting.jpg";

// ======================
// Restaurant
// ======================
import restaurant01 from "../assets/images/restaurant-01.jpg";
import restaurant02 from "../assets/images/restaurant-02.jpg";
import restaurantSimple from "../assets/images/restaurant-simple.jpg";

const products = [

{
id:1,
sku:"SF-001",
image:livingSofa,
category:"Living Room",
name:"Addis Luxury Sofa",
rating:4.9,
reviews:186,
price:28500,
oldPrice:32000,
discount:11,
material:"Solid Beech Wood + Linen",
dimensions:"240 × 95 × 90 cm",
weight:"42 kg",
colors:["#D2B48C","#4B3621","#696969","#F5F5DC"],
delivery:"3–7 Business Days",
warranty:"3 Years",
featured:true,
description:"A spacious luxury sofa designed for comfort with premium cushions and handcrafted wooden legs."
},

{
id:2,
sku:"SF-002",
image:livingSofa01,
category:"Living Room",
name:"Modern Family Sofa",
rating:4.8,
reviews:142,
price:24600,
oldPrice:27500,
discount:11,
material:"Solid Wood + Premium Fabric",
dimensions:"230 × 92 × 88 cm",
weight:"39 kg",
colors:["#808080","#F5F5DC","#A0522D"],
delivery:"3–7 Business Days",
warranty:"2 Years",
featured:false,
description:"Comfortable three-seat sofa perfect for modern homes and apartments."
},

{
id:3,
sku:"SF-003",
image:livingSofa02,
category:"Living Room",
name:"Premium Corner Sofa",
rating:4.9,
reviews:121,
price:34800,
oldPrice:38900,
discount:10,
material:"Hardwood + Velvet",
dimensions:"300 × 180 × 90 cm",
weight:"57 kg",
colors:["#36454F","#2F4F4F","#DCDCDC"],
delivery:"5–10 Business Days",
warranty:"3 Years",
featured:true,
description:"Elegant L-shaped sofa providing maximum seating and premium comfort."
},

{
id:4,
sku:"SF-004",
image:livingSofa00,
category:"Living Room",
name:"Classic Lounge Sofa",
rating:4.7,
reviews:98,
price:19400,
oldPrice:22000,
discount:12,
material:"Solid Oak + Linen",
dimensions:"210 × 88 × 85 cm",
weight:"34 kg",
colors:["#8B4513","#DEB887","#696969"],
delivery:"3–7 Business Days",
warranty:"2 Years",
featured:false,
description:"Classic living room sofa crafted for everyday relaxation."
},

{
id:5,
sku:"SF-005",
image:livingSofa001,
category:"Living Room",
name:"Urban Comfort Sofa",
rating:4.8,
reviews:88,
price:21800,
oldPrice:24500,
discount:11,
material:"Solid Wood + Cotton Fabric",
dimensions:"220 × 90 × 86 cm",
weight:"36 kg",
colors:["#708090","#FFFFFF","#8B5A2B"],
delivery:"3–7 Business Days",
warranty:"2 Years",
featured:false,
description:"Modern sofa with deep cushions and minimalist design."
},

{
id:6,
sku:"SF-006",
image:livingBookshelf,
category:"Living Room",
name:"Oak Bookshelf",
rating:4.7,
reviews:67,
price:9800,
oldPrice:11200,
discount:13,
material:"Solid Oak",
dimensions:"180 × 35 × 200 cm",
weight:"45 kg",
colors:["#8B5A2B","#F5DEB3"],
delivery:"3–5 Business Days",
warranty:"2 Years",
featured:false,
description:"Elegant open bookshelf ideal for books, décor and storage."
},

{
id:7,
sku:"SF-007",
image:livingFoodPlace,
category:"Living Room",
name:"Coffee Table Set",
rating:4.8,
reviews:72,
price:7200,
oldPrice:8400,
discount:14,
material:"Oak + Tempered Glass",
dimensions:"120 × 60 × 45 cm",
weight:"18 kg",
colors:["#8B4513","#000000","#D2B48C"],
delivery:"2–5 Business Days",
warranty:"2 Years",
featured:false,
description:"Modern coffee table perfect for living rooms."
},

{
id:8,
sku:"SF-008",
image:livingTvShowcase,
category:"Living Room",
name:"TV Entertainment Unit",
rating:4.9,
reviews:95,
price:14800,
oldPrice:17000,
discount:13,
material:"Engineered Wood",
dimensions:"200 × 40 × 55 cm",
weight:"38 kg",
colors:["#3C3C3C","#8B5A2B","#FFFFFF"],
delivery:"3–7 Business Days",
warranty:"2 Years",
featured:false,
description:"Contemporary TV unit with spacious storage cabinets."
}, {
id:9,
sku:"SF-009",
image:bedroom01,
category:"Bedroom",
name:"Royal Queen Bed",
rating:4.9,
reviews:164,
price:32500,
oldPrice:36500,
discount:11,
material:"Solid Mahogany Wood",
dimensions:"160 × 200 × 120 cm",
weight:"62 kg",
colors:["#6F4E37","#F5F5DC","#8B4513"],
delivery:"5–10 Business Days",
warranty:"3 Years",
featured:true,
description:"Elegant queen-size bed handcrafted from premium mahogany with a modern upholstered headboard."
},

{
id:10,
sku:"SF-010",
image:bedroomClothsBox,
category:"Bedroom",
name:"Premium Wooden Wardrobe",
rating:4.8,
reviews:91,
price:21800,
oldPrice:24500,
discount:11,
material:"Solid Oak Wood",
dimensions:"180 × 60 × 220 cm",
weight:"74 kg",
colors:["#8B5A2B","#F5DEB3","#4B3621"],
delivery:"5–10 Business Days",
warranty:"3 Years",
featured:false,
description:"Large wardrobe featuring multiple shelves, hanging space and soft-close doors."
},

{
id:11,
sku:"SF-011",
image:bedroomFullPackage,
category:"Bedroom",
name:"Modern Bedroom Set",
rating:5.0,
reviews:148,
price:64500,
oldPrice:72000,
discount:10,
material:"Solid Oak + MDF",
dimensions:"Complete Set",
weight:"150 kg",
colors:["#8B4513","#F5F5DC","#D2B48C"],
delivery:"7–14 Business Days",
warranty:"5 Years",
featured:false,
description:"Complete bedroom package including bed, wardrobe, dressing table and bedside cabinets."
},

{
id:12,
sku:"SF-012",
image:bedroomFullPackage02,
category:"Bedroom",
name:"Luxury Master Bedroom Set",
rating:4.9,
reviews:119,
price:78500,
oldPrice:87000,
discount:10,
material:"Solid Walnut Wood",
dimensions:"Complete Set",
weight:"175 kg",
colors:["#5C4033","#C19A6B","#F5F5DC"],
delivery:"7–14 Business Days",
warranty:"5 Years",
featured:true,
description:"Premium master bedroom furniture designed with elegant finishes and exceptional craftsmanship."
},

{
id:13,
sku:"SF-013",
image:bedroomTwoBed,
category:"Bedroom",
name:"Twin Bed Set",
rating:4.7,
reviews:74,
price:29600,
oldPrice:33000,
discount:10,
material:"Solid Pine Wood",
dimensions:"2 × 100 × 200 cm",
weight:"78 kg",
colors:["#DEB887","#8B4513","#FFFFFF"],
delivery:"5–10 Business Days",
warranty:"3 Years",
featured:false,
description:"Twin bed solution perfect for children's rooms, hotels and guest houses."
},

{
id:14,
sku:"SF-014",
image:diningBest,
category:"Dining",
name:"Luxury Dining Set",
rating:4.9,
reviews:127,
price:39500,
oldPrice:44500,
discount:11,
material:"Solid Oak Wood",
dimensions:"8 Seater",
weight:"82 kg",
colors:["#8B5A2B","#F5DEB3","#2F4F4F"],
delivery:"5–10 Business Days",
warranty:"5 Years",
featured:false,
description:"Beautiful eight-seat dining table designed for family gatherings and elegant interiors."
},

{
id:15,
sku:"SF-015",
image:diningCafe,
category:"Dining",
name:"Modern Café Table Set",
rating:4.8,
reviews:68,
price:13600,
oldPrice:15200,
discount:11,
material:"Solid Wood + Steel",
dimensions:"4 Seater",
weight:"32 kg",
colors:["#8B4513","#000000","#FFFFFF"],
delivery:"3–5 Business Days",
warranty:"2 Years",
featured:false,
description:"Compact dining set ideal for cafés, coffee shops and small apartments."
},

{
id:16,
sku:"SF-016",
image:diningMedium,
category:"Dining",
name:"Family Dining Table",
rating:4.8,
reviews:95,
price:23800,
oldPrice:26800,
discount:11,
material:"Solid Hardwood",
dimensions:"6 Seater",
weight:"56 kg",
colors:["#A0522D","#F5DEB3","#3C3C3C"],
delivery:"3–7 Business Days",
warranty:"3 Years",
featured:false,
description:"Stylish six-seat dining table combining durability with timeless design."
},{
id:17,
sku:"SF-017",
image:diningSimple,
category:"Dining",
name:"Compact Dining Set",
rating:4.7,
reviews:63,
price:18400,
oldPrice:20500,
discount:10,
material:"Solid Pine Wood",
dimensions:"4 Seater",
weight:"44 kg",
colors:["#8B5A2B","#F5F5DC","#696969"],
delivery:"3–7 Business Days",
warranty:"2 Years",
featured:false,
description:"A simple yet elegant four-seat dining set designed for apartments and modern family homes."
},

{
id:18,
sku:"SF-018",
image:officeBright,
category:"Office",
name:"Executive Office Desk",
rating:4.9,
reviews:108,
price:22900,
oldPrice:25500,
discount:10,
material:"Engineered Wood + Steel",
dimensions:"180 × 80 × 75 cm",
weight:"48 kg",
colors:["#4B3621","#F5F5DC","#2F4F4F"],
delivery:"3–7 Business Days",
warranty:"3 Years",
featured:false,
description:"Professional executive desk featuring spacious storage, premium finishes, and a durable steel frame."
},

{
id:19,
sku:"SF-019",
image:officeWorkers,
category:"Office",
name:"Collaborative Workstation",
rating:4.8,
reviews:82,
price:48700,
oldPrice:54000,
discount:10,
material:"Engineered Wood + Powder-Coated Steel",
dimensions:"8 Person Workstation",
weight:"112 kg",
colors:["#FFFFFF","#3C3C3C","#8B5A2B"],
delivery:"7–14 Business Days",
warranty:"3 Years",
featured:false,
description:"Modern office workstation designed to maximize collaboration, productivity, and efficient use of workspace."
},

{
id:20,
sku:"SF-020",
image:officeMeeting,
category:"Office",
name:"Conference Meeting Table",
rating:4.9,
reviews:91,
price:31800,
oldPrice:35500,
discount:10,
material:"Solid Oak + Steel Legs",
dimensions:"320 × 120 × 75 cm",
weight:"85 kg",
colors:["#8B5A2B","#2F4F4F","#000000"],
delivery:"5–10 Business Days",
warranty:"5 Years",
featured:false,
description:"Large conference table suitable for boardrooms, meeting rooms, and executive offices."
},

{
id:21,
sku:"SF-021",
image:restaurant01,
category:"Restaurant",
name:"Classic Restaurant Dining Set",
rating:4.8,
reviews:87,
price:26700,
oldPrice:29800,
discount:10,
material:"Solid Hardwood",
dimensions:"6 Seater",
weight:"67 kg",
colors:["#8B4513","#F5DEB3","#3C3C3C"],
delivery:"5–10 Business Days",
warranty:"3 Years",
featured:false,
description:"Commercial-grade restaurant dining furniture built for comfort, durability, and everyday use."
},

{
id:22,
sku:"SF-022",
image:restaurant02,
category:"Restaurant",
name:"Premium Restaurant Table Set",
rating:4.9,
reviews:102,
price:35600,
oldPrice:39500,
discount:10,
material:"Solid Walnut Wood",
dimensions:"8 Seater",
weight:"84 kg",
colors:["#5C4033","#C19A6B","#FFFFFF"],
delivery:"5–10 Business Days",
warranty:"5 Years",
featured:false,
description:"Elegant restaurant furniture crafted for premium dining experiences in hotels and fine restaurants."
},

{
id:23,
sku:"SF-023",
image:restaurantSimple,
category:"Restaurant",
name:"Modern Café Dining Set",
rating:4.7,
reviews:56,
price:17800,
oldPrice:19800,
discount:10,
material:"Solid Pine + Steel",
dimensions:"4 Seater",
weight:"39 kg",
colors:["#8B5A2B","#FFFFFF","#696969"],
delivery:"3–7 Business Days",
warranty:"2 Years",
featured:false,
description:"Minimalist café dining furniture designed for coffee shops, restaurants, and casual dining spaces."
}

];

export default products;