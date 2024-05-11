const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 5000;

//import function controller
const HomeController = require('./app/Controllers/HomeController')
const LoginController =  require('./app/Controllers/LoginController')
const SearchController = require('./app/Controllers/SearchController')

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
app.get('/search', SearchController.search)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})