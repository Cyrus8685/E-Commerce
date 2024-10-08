const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');


  try {
    console.log("MAde it");
   sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
   seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

   seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

   seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

   seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0),
  console.log("MAde it 2");
}
catch (err) 
{ console.error('Error connecting to the database:', err); };
seedAll();