const Product = require('../Model/Product')

class SearchController {
  // GET /search
  async search(req, res) {
    if (!req.query.q) {
      return res.redirect('/')
    }
    
    const keyword = req.query.q;
    
    try {
      const products = await Product.find({ name: { $regex: keyword, $options: 'i' } }).lean()
      res.render('search', { products, keyword })
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" })
    }
  }
}

module.exports = new SearchController();