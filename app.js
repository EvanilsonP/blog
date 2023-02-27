const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const db = require('./database/db');
const { infoMiddleware } = require('./middleware/infoMdlw');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(infoMiddleware);
app.use('/blogs', blogRoutes);
db.database();

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

app.listen(3000, () => console.log('Running on port 3000.'));