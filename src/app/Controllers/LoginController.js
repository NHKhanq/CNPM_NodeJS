const Login = require('../Model/Login')

class LoginController {
  // GET /login
  login(req, res) {
    res.render('login')
  }

  // GET /login/check
  async check(req, res) {
    const user = await Login.findOne({ username: req.body.username, password: req.body.password })
    if (!user) {
      res.send("Tên đăng nhập hoặc mật khẩu không đúng")
    } else {
      res.redirect('/trangchu')
    }
  }
}

module.exports = new LoginController()