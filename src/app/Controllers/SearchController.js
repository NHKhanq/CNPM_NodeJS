const Product = require('../Model/Product');

class SearchController {
  // GET /search
  search(req, res) {
    if (!req.query.q) {
      return res.redirect('/');
    }
    const keyword = req.query.q;
    Product.find({ name: { $regex: keyword, $options: 'i' } }).lean()
      .then(products => {
        res.render('search', { products, keyword });
      })
      .catch(error => {
        res.status(400).json({ err: "ERROR!!!" });
      });
  }
}

module.exports = new SearchController();