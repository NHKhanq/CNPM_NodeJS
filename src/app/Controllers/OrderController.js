const Order = require('../Model/Order')

class OrderController {
  // POST /order
  async order(req, res) {
    try {
      const order = new Order(req.body)
      await order.save();
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" })
    }
  }
}

module.exports = new OrderController()