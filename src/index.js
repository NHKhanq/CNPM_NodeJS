const path = require("path")
const express = require("express")
const morgan = require("morgan")
const methodOverride = require('method-override')
const { engine } = require("express-handlebars")
const app = express()
const port = 5000

// Sử dụng body-parser để đọc dữ liệu từ form 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
//req.body


const db = require('./config/db/index.js')
db.connect()


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

//express method override
app.use(methodOverride('_method'))

const HomeController = require('./app/Controllers/HomeController')
const ProductController = require("./app/Controllers/ProductController.js")
const CreateController = require("./app/Controllers/CreateController.js")
const SearchController = require("./app/Controllers/SearchController.js")
const OrderController = require("./app/Controllers/OrderController.js")
const LoginController = require("./app/Controllers/LoginController.js")
const MeController = require("./app/Controllers/MeController.js")


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  res.locals.showHeader = true;
  res.locals.showFooter = true;
  res.locals.showBody = true;
  next();
});

//routes
app.get('/', (req, res) => {
  res.render('login', { showHeader: false, showFooter: false });
});
app.post('/login/check', LoginController.check);
app.get('/trangchu', HomeController.home)
app.get('/create', CreateController.create)
app.get('/search', SearchController.search)
app.get('/me/store', MeController.store)
app.get('/Product/:slug', ProductController.detail)
app.get('/Product/detail/:slug/buy', ProductController.buy);
app.get('/Product/:id/edit', ProductController.edit)
app.delete('/Product/:id', ProductController.delete)
app.post('/create/post', CreateController.post)
app.post('/order', OrderController.order)
app.put('/Product/:id', ProductController.update)



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})