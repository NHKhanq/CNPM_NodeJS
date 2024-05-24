const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Login = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})
function findByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = {
  findByUsername
};
module.exports = mongoose.model('Login', Login);