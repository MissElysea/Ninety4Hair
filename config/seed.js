require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Custom Lace Wigs', sortOrder: 10},
    {name: 'Frontals', sortOrder: 20},
    {name: 'Closures', sortOrder: 30},
    {name: 'Raw Filipino Bundles', sortOrder: 40},
    {name: 'Raw Vietnamese Bundles', sortOrder: 50},
    {name: 'Raw Peruvian Bundles', sortOrder: 60},
    {name: 'Seamless Clip Ins', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bang Jet Black Lace Wig', imageUrl: 'https://i.imgur.com/JXM42Io.jpg', category: categories[0], price: 399.00},
    {name: 'Blonde Highlight Lace Wig', imageUrl: 'https://i.imgur.com/JzdXPHR.png', category: categories[0], price: 499.00},
    {name: 'Black Layered Lace Wig', imageUrl: 'https://i.imgur.com/ea7MrVu.jpg', category: categories[0], price: 250.00},

    {name: 'Deep Wave 3x5 Lace Front', imageUrl: 'https://i.imgur.com/2TO92ex.jpg', category: categories[1], price: 140.00},
    {name: 'Loose Wave 3x5 Lace Front', imageUrl: 'https://i.imgur.com/VnjRNKP.jpg', category: categories[1], price: 140.00},
    {name: 'Straight 3x5 Lace Front', imageUrl: 'https://i.imgur.com/iCfR7lN.jpg', category: categories[1], price: 125.00},

    {name: 'Straight 5x5 Lace Closure', imageUrl: 'https://i.imgur.com/5GZS1iO.jpg', category: categories[2], price: 76.00},
    {name: 'Deep Wave 5x5 Lace Closure', imageUrl: 'https://i.imgur.com/hni9nMP.jpg', category: categories[2], price: 85.00},
    {name: 'Loose Wave 5x5 Lace Closure', imageUrl: 'https://i.imgur.com/O2L4B9J.jpg', category: categories[2], price: 85.00},

    {name: 'Filipino Body Wave Bundle 16"', imageUrl: 'https://i.imgur.com/67sKYMm.jpg', category: categories[3], price: 75.00},
    {name: 'Filipino Loose Wave Bundle 16"', imageUrl: 'https://i.imgur.com/HQ4YaeO.jpg', category: categories[3], price: 65.00},
    {name: 'Filipino Straight Bundle 16"', imageUrl: 'https://i.imgur.com/T8rnUtb.jpg', category: categories[3], price: 50.00},

    {name: 'Vietnamese Body Wave Bundle 16"', imageUrl: 'https://i.imgur.com/6ZrwArX.jpg', category: categories[4], price: 75.00},
    {name: 'Vietnamese Loose Wave Bundle 16"', imageUrl: 'https://i.imgur.com/6XpBiqA.jpg', category: categories[4], price: 65.00},
    {name: 'Vietnamese Kinky Curly Bundle 16"', imageUrl: 'https://i.imgur.com/W6uLmIe.jpg', category: categories[4], price: 50.00},

    {name: 'Peruvian Deep Wave Bundle 16"', imageUrl: 'https://i.imgur.com/fkx1zZ7.jpg', category: categories[5], price: 75.00},
    {name: 'Peruvian Kinky Curly Bundle 16"', imageUrl: 'https://i.imgur.com/OzkkdEa.jpg', category: categories[5], price: 65.00},
    {name: 'Peruvian Straight Bundle 16"', imageUrl: 'https://i.imgur.com/10zDCMT.jpg', category: categories[5], price: 50.00},
   
    {name: 'Body Wave Clip Ins', imageUrl: 'https://i.imgur.com/QZQuvof.jpg', category: categories[6], price: 75.00},
    {name: 'Kinky Curly Clip Ins', imageUrl: 'https://i.imgur.com/wgVK17X.jpg', category: categories[6], price: 50.00},
    {name: 'Straight Clip Ins', imageUrl: 'https://i.imgur.com/QdtpBI0.jpg', category: categories[6], price: 65.00},
   
  ]);

  console.log(items)

  process.exit();

})();