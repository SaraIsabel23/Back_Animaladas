const basicInfo = require('./basicInfo');
const components = require('./components');
const auth = require('./auth');
const products = require('./products');
const articles = require('./articles');
const posts = require('./posts');
const upload = require('./upload');

module.exports = {
  ...basicInfo,
  ...components,
  paths: {
    ...auth.paths,
    ...products.paths,
    ...articles.paths,
    ...posts.paths,
    ...upload.paths
  }
};