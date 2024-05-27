const Product = require('../Model/Product')

class ProductController {
  // GET /san-pham/:slug
  async detail(req, res) {
    try {
      const product = await Product.findOne({ slug: req.params.slug })
      res.render('detail', { productdetail: product.toObject() })
    } catch (error) {
      res.status(400).json({ err: "Error!!!" })
    }
  }

  // GET /Product/detail/:slug/buy
  async buy(req, res) {
    try {
      const product = await Product.findOne({ slug: req.params.slug })
      res.render('buy', {
        Product: product.toObject(),
      });
    } catch (error) {
      res.status(400).json({ err: "Error!!!" })
    }
  }

  // GET /Product/:id/edit
  async edit(req, res) {
    try {
      const product = await Product.findById(req.params.id)
      res.render('edit', { Product: product.toObject() })
    } catch (error) {
      res.status(400).json({ err: "Error!!!" })
    }
  }

  // PUT /Product/:id
  async update(req, res) {
    try {
      await Product.updateOne({ _id: req.params.id }, req.body)
      res.redirect('/me/store');
    } catch (error) {
      res.status(400).json({ err: "Error!!!" })
    }
  }

  async delete(req, res) {
    try {
      await Product.deleteOne({ _id: req.params.id })
      res.redirect('/me/store');
    } catch (error) {
      res.status(400).json({ err: "Error!!!" })
    }
  }
}

module.exports = new ProductController()