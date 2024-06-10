const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Product = new Schema({
    name: {type: String, required: true},
    screen: {type: String, required: true},
    chip: {type: String, required: true},
    ram: {type: String, required: true},
    pin: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: String, required: true},
    image_url: {type: String, required: true},
    slug: {type: String, slug: 'name', unique: true}
}, {timestamps: true});

module.exports = mongoose.model('Product', Product);