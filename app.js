const express = require('express');
const { infoMiddleware } = require('./middleware/infoMdlw');
const db = require('./database/db');
const Blog = require('./models/blogSchema');
const app = express();

app.set('view engine', 'ejs');
app.use(infoMiddleware);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
db.database();

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then(result=> {
        res.render('index', { blogs: result, title: 'All blogs'} );
    })
    .catch((err) => {
        console.log(err);
    })
  });
  
app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()

    .then((result) => { res.redirect('/blogs') })
    .catch((err) => console.log(err));
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
});

app.listen(3000, () => console.log('Running on port 3000.'));