const http = require("http");
const express = require("express");
const path = require('path')
const app = express();
const {hbs}= require('./config/hbs');
const {argv} = require('./config/yargs');
console.log(argv)
/**
 * se define de esta manera dado que heroku nos da el puerto en el que se va a ejecutar la aplicacion y lo guarda en la variable de entorno 
 */
const port=process.env.PORT || 3000
// const port=argv.p || 4000;

hbs.registerPartials(path.join(__dirname, "views/partials"));

app.set('view engine','hbs')

app.use(express.static('public'))
app.get("/", (req, res) => res.render("index",{name:'julian'}));
app.get("/about", (req, res) => res.render("about",{name:'julian'}));

app.listen(port,()=>{
  console.log(`running on ${port}`)
});
