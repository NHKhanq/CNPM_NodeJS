const Product = require('../Model/Product')
class HomeController {
    //get /home
    async home(req, res) {

        try {
            const Products = await Product.find({});
            const UIProducts = Products.map(Products => Products.toObject())
            res.render('home', { Products: UIProducts });
        } catch (error) {
            res.json("ERROR");
        }
        
        
    }
}
module.exports = new HomeController