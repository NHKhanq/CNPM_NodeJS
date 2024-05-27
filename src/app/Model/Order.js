const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
  productName: { type: String, required: true },
  productPrice: { type: String, required: true },
  quantity: { type: Number, required: true },
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', Order);