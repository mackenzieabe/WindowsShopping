// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)  
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_tag',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag) ***///I can't get this one??
Tag.belongsToMany (Product, {
  through: ProductTag,
  as: 'tag_id',
  foreignKey: 'product_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
