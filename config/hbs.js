const hbs = require("hbs");


hbs.registerHelper("getYear", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("sort", (text) => {
  let words = text.split(" ");
  words.forEach((word, idx) => {
      words[idx]=word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
  });
  return words.join(" "); 
});

module.exports={
    hbs
}