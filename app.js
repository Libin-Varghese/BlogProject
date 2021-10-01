const express = require('express');

//Invoking express
const app = express();

//sending html tag
// app.get('/', (req, res) => {
//     res.send('<p>home page</p>')
// });

//sending html files
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {
        root: __dirname //node cannot recognize to relative path, this help it to recognize the changes are in the Nodeninja folder
    })
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {
        root: __dirname
    })
})

app.listen(3000);