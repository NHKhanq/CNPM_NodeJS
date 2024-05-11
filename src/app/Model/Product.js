const Product = new Schema({
    name: String,
    descripstion: String,
    price: String,
    image_url: String
  });


//   https://github.com/Automattic/mongoose


module.exports = mongoose.model('Product', Product);