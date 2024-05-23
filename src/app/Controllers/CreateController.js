const Product = require('../Model/Product');

class CreateController {
  // GET /create
    create(req, res) {
    try {
        res.render('create');
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" });
    }
  }

    // POST /create/:slug
    post(req, res) {
        try {
          const product = new Product(req.body)
          product.save();
           res.redirect('/')
        } catch (error) {
          res.status(400).json({ err: "ERROR!!!" });
        }
      }
}

// https://mongoosejs.com/docs/api/model.html#Model.findOne()
module.exports = new CreateController();