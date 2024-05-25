const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')))

const db = require('./config/db/index.js')
db.connect()

//import function controller
const Product = require("./app/Controllers/ProductController.js")
const Order = require("./app/Controllers/OrderController.js")
const HomeController = require('./app/Controllers/HomeController')
const LoginController =  require('./app/Controllers/LoginController')
const OrderController =  require('./app/Controllers/OrderController')
const SearchController = require('./app/Controllers/SearchController')
const ProductController = require("./app/Controllers/ProductController.js")
const CreateController = require("./app/Controllers/CreateController.js")
const Login = require("./app/Model/Login.js")

//static file
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

//Thiết lập các biến cục bộ, next() để chuyển sang chuỗi xử lí tiếp theo
app.use(function (req, res, next) {
  res.locals.showHeader = true;
  res.locals.showFooter = true;
  res.locals.showBody = true;

  next();
});

app.use(express.urlencoded())//from
app.use(express.json()); //fetch, axios

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
console.log('PATH: ', path.join(__dirname, 'resources/views'))

// Hàm middleware để kiểm tra xác thực
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.get('/', (req, res) => {
  res.render('login', { showHeader: false, showFooter: false });
});

//route
app.get('/', HomeController.home)
app.get('/Product/:slug', ProductController.detail)
app.get('/search', SearchController.search)
app.get('/create', CreateController.create)
app.post('/create/post', CreateController.post)
app.post('/order/buy', OrderController.buy)
app.get('/order', OrderController.order)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})