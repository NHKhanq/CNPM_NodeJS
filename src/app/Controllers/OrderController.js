const Order = require('../Model/Order');

class OrderController {
    // POST /buy
    buy(req, res) {
      try {
        const order = new Order(req.body);
        order.save();
        res.redirect('/');
      } catch (error) {
        res.status(400).json({ err: "ERROR!!!" });
      }
    }

  // GET /order
  order(req, res) {
    try {
      res.render('order');
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" });
    }
  }
}

module.exports = new OrderController();