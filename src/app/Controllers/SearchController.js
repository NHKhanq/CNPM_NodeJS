class SearchController {
    //get /home
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SearchController