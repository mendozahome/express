const express = require('express');

//express app
const app = express();


//Register View Engine
app.set('view engine', 'ejs');
app.set('views', 'docs');



//listen for requests 


app.listen(3000)



app.get('/', (req,res) => {
const blogs = [
    {title:'Yoshi finds eggs', snippet:'Lorem ispum'},
    {title:'Yoshi finds stars', snippet:'Lorem ispum'},
    {title:'Yoshi finds bowser', snippet:'Lorem ispum'},
]    ;
res.render('index',{title:'Home' , blogs:blogs });
});



app.get('/about', (req,res) => {
  res.render('about', { title: 'About'});

    });

app.get('/blogs/create', (req, res) => {
    res.render('create' , {title: 'Create'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
});


