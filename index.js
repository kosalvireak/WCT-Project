const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
var { MyBooks, Books } = require('../SeavPhov/data/index')
const ejsMate = require('ejs-mate')
const isLogin = true;


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
    const books = Books;
    res.render('books/index', { books, isLogin })
})

app.post('/books/search', async (req, res) => {
    const { search } = req.body;

    const books = await Books.filter(book => book.title.toLowerCase().includes(search));
    res.render('books/index', { books, isLogin });
});

app.get('/books/new', (req, res) => {
    res.render('books/new', { isLogin })
})

app.post('/books', (req, res) => {
    const { username, comment } = req.body;
    Books.push({ username, comment, id: Books.length })
    res.redirect('/books', { isLogin })
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = Books.find(c => c.id == id);
    res.render('books/show', { book, isLogin })
})

app.get('/books/:id/edit', (req, res) => {
    const { id } = req.params;
    const book = Books.find(c => c.id == id);
    res.render('books/edit', { book, isLogin })
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    Books = Books.filter(c => c.id !== id)
    res.redirect('/books', { isLogin })
})

app.patch('/books/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = Books.find(c => c.id == id);
    foundComment.comment = newCommentText;
    res.redirect('/books', { isLogin })
})

app.get('/user', (req, res) => {
    const books = Books.filter(book => MyBooks.includes(book.id));
    res.render('user/userprofile', { books, isLogin })
})

app.get('/login', (req, res) => {
    const isLogin = false;
    res.render('user/login', { isLogin })
})

app.get('/signup', (req, res) => {
    const isLogin = false;
    res.render('user/signup', { isLogin })
})

app.get('/user/savedbooks', (req, res) => {
    const books = Books.filter(book => book.issaved == true);
    res.render('user/userprofilesavedbook', { books, isLogin })
})


app.listen(3000, () => {
    console.log("On Port 3000!")
})
