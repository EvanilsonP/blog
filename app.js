const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Mario', snippet: 'A good day', body: 'lopse' },
        { title: 'Mario', snippet: 'A good day', body: 'lopse' },
        { title: 'Mario', snippet: 'A good day', body: 'lopse' },
    ]
    res.render('index', { title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})

app.listen(3000);