const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
var { Books } = require('../SeavPhov/data/index')
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
    res.render('books/index', { Books })
})

app.get('/books/new', (req, res) => {
    res.render('books/new')
})

app.post('/books', (req, res) => {
    const { username, comment } = req.body;
    Books.push({ username, comment, id: uuid() })
    res.redirect('/books')
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = Books.find(c => c.id === id);
    res.render('books/show', { book })
})

app.get('/books/:id/edit', (req, res) => {
    const { id } = req.params;
    const book = Books.find(c => c.id === id);
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
    const foundComment = Books.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/books')
})

app.get('/user', (req, res) => {
    res.render('user/userprofile', { Books })
})

app.listen(3000, () => {
    console.log("On Port 3000!")
})
