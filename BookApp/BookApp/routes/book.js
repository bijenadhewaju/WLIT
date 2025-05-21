var express = require('express')
var router = express.Router()
const books = require('../resources/book')
 
router.get('/', function(req, res){
    res.render('book',{title: 'Book App title', bookList: books})
})

router.get('/add', function(req,res){
    res.render('addBook',{title:'Add Book'})
})

router.post("/save", function (req, res, next) {
  books.push({ 
    ...req.body,
    _id: `00${books.length + 1}` });
  res.redirect("/book");
});

router.get("/edit/:_id", function (req, res, next) {
  console.log(req.params._id);
  const book = books.find((book) => book._id === req.params._id);
  res.render("editBook", { title: "Edit Books", book });
});

router.post("/saveEdited/:_id", function (req, res, next) {
  const currIndex = books.findIndex((book) => req.params._id === book._id);
  books.splice(currIndex, 1, { ...req.body, _id: req.params._id });
  res.redirect("/book");
});

router.post("/delete/:_id", function (req, res, next){
  const currIndex = books.findIndex((book) => req.params._id === book._id);
  books.splice(currIndex, 1);
        res.redirect("/book"); 
} )


module.exports = router;