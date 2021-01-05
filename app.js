const http = require("http");
const express = require("express");
const path = require('path')
const app = express();
const {hbs}= require('./config/hbs');
const {argv} = require('./config/yargs');
console.log(argv)
/**
 * heroku give us the respective port from where is running the app
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
