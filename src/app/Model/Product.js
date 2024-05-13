const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    descripstion: String,
    price: String,
    image_url: String
});



module.exports = mongoose.model('Product', Product);
