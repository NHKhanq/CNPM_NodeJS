class HomeController {
    //get /home
    home(req, res) {
        res.render('home')
    }
}

module.exports = new HomeController