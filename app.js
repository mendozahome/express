const express = require('express');
const morgan= require('morgan');
const mongoose = require('mongoose');
// we are note using it only when we was using when we didnt separate routes 
//const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongol db
const dbURI = 'mongodb+srv://mendozahome2:uaRlNcvzPDr1wOci@nodetuts.oc4zkqo.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=Nodetuts'
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

//Register View Engine
app.set('view engine', 'ejs');
app.set('views', 'docs');



//listen for requests 




//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));


//mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res) => {
// const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'About new blog',
//     body: 'more about my new blog'
// });

// blog.save()
// .then((result)=>{
//     res.send(result)
// })
// .catch((err) => {
// console.log(err);
// });
// })
 
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) =>{
//         res.send(result);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// });

// app.get('/single-blog', (req,res) =>{
//     Blog.findById('6639cb93e2c5177fc9ab2000')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err);
//     });
// })


//dummy data
app.get('/', (req, res) => {
 res.redirect('/blogs');
});



app.get('/about', (req,res) => {
  res.render('about', { title: 'About'});

    });


 //blog routes  the /blogs allows to remove from blog routes
 app.use('/blogs', blogRoutes);


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
});


