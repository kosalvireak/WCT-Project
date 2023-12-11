const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
var { MyBooks, Books, ToggleSavedBooks } = require('../SeavPhov/data/index')
const ejsMate = require('ejs-mate')

app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/books');
})

app.get('/books', (req, res) => {
    console.log("call comment")
    const books = Books;
    res.render('books/index', { books })
})

app.get('/books/new', (req, res) => {
    res.render('books/new')
})

app.post('/books', (req, res) => {
    const { username, comment } = req.body;
    Books.push({ username, comment, id: Books.length })
    res.redirect('/books')
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = Books.find(c => c.id == id);
    res.render('books/show', { book })
})

app.get('/books/:id/edit', (req, res) => {
    const { id } = req.params;
    const book = Books.find(c => c.id == id);
    res.render('books/edit', { book })
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    Books = Books.filter(c => c.id !== id)
    res.redirect('/books')
})

app.patch('/books/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = Books.find(c => c.id == id);
    foundComment.comment = newCommentText;
    res.redirect('/books')
})

app.get('/user', (req, res) => {
    const books = Books.filter(book => MyBooks.includes(book.id));
    res.render('user/userprofile', { books })
})

app.get('/user/savedbooks', (req, res) => {
    const books = Books.filter(book => book.issaved == true);
    res.render('user/userprofilesavedbook', { books })
})

app.listen(3000, () => {
    console.log("On Port 3000!")
})
