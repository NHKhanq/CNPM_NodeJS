const Login = require('../Model/Login');

class LoginController {
    //GET /home
async check(req, res) {
  const user = await Login.findOne({username: req.body.username, password: req.body.password});
  if(!user) {
      res.send("Tên đăng nhập hoặc mật khẩu không đúng");
  } else {
      res.redirect('/trangchu');   
  }            
}

}
module.exports = new LoginController();