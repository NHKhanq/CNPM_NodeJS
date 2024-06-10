const Product = require('../Model/Product')

class MeController {
  // GET /me/store
  async store(req, res) {
    try {
      const Products = await Product.find({})
      const UIProducts = Products.map(product => product.toObject())
      res.render('store', { Products: UIProducts })
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" })
    }
  }
}

module.exports = new MeController()