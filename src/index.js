const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 5000;

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

//static file
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.use(express.urlencoded())//from
app.use(express.json()); //fetch, axios

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
console.log('PATH: ', path.join(__dirname, 'resources/views'))

//route
app.get('/login',LoginController.login)
app.get('/', HomeController.home)
app.get('/Product/:slug', ProductController.detail)
app.get('/search', SearchController.search)
app.get('/create', CreateController.create)
app.post('/create/post', CreateController.post)
app.post('/order/buy', OrderController.buy)
app.get('/order', OrderController.order)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})