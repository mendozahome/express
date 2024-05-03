const express = require('express');

//express app
const app = express();


//Register View Engine
app.set('view engine', 'ejs');
app.set('views', 'docs');



//listen for requests 


app.listen(3000)



app.get('/', (req,res) => {
//res.send('<p>Home page</p>');
res.sendFile('./docs/index.html', { root: __dirname });
});


app.get('/about', (req,res) => {
    //res.send('<p>About page</p>');

    res.sendFile('./docs/about.html', { root: __dirname });
    });

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.status(404).sendFile('./docs/404.html', { root: __dirname });
})


