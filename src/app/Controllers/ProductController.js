const Product = require('../Model/Product');

class ProductController {
  // GET /san-pham/:slug
  async detail(req, res) {
    try {
      const product = await Product.findOne({ slug: req.params.slug });
      res.render('detail', { productdetail: product.toObject() });
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" });
    }
  }
}

// https://mongoosejs.com/docs/api/model.html#Model.findOne()
module.exports = new ProductController();