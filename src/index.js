const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
console.log('PATH: ', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/admin', (req, res) => {
  res.render('admin');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})