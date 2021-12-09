const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const dbURI = 'mongodb+srv://admin:Dbacess987@blogproject.rrnfe.mongodb.net/Blog-Project?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('Connected to DB');
    //Listen to requests only after connection to db is establised
    app.listen(3000);
}).catch((err) => {
    console.log('Connection to DB Failed');
});
//Invoking express
const app = express();

//sending html tag
// app.get('/', (req, res) => {
//     res.send('<p>home page</p>')
// });

//sending html files
/*app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {
        root: __dirname //node cannot recognize to relative path, this help it to recognize the changes are in the Nodeninja folder
    })
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {
        root: __dirname
    })
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {
        root: __dirname
    });
});*/

//mongodb and mangoose sandbox routes
// app.get('/add-blogs', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog 2',
//         snippet: 'Second Blog',
//         body: 'More about my first blog'
//     });

//     blog.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('618f6c1c35a3667b45ada1b9').then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// })

//Using ejs template engines to render views
app.set('view engine', 'ejs');
app.set('views', 'templateviews');

const blogs = [{
        title: 'Yoshi finds eggs',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
        title: 'Mario finds stars',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
        title: 'How to defeat bowser',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
];

//setting up use middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});

//using morgan middleware to log details to the console
app.use(morgan('dev'));

// middleware & serving static files to the browser so that we can access it from the frontend browser(make it public to the browser)
app.use(express.static('public'));

//home route
// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'Home',
//         blogs
//     });
// });
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

//blog routes
app.get('/blogs', (req, res) => {
    Blog.find().then((result) => {
        res.render('index', {
            title: 'Home',
            blogs: result
        })
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create a new blog'
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})