class LoginController {
  login(req, res) {
      res.render('login')
  }
}
module.exports = new LoginController