const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.method, req.url);

    //lodash
    const randomNum = _.random(0, 20);
    console.log(randomNum);

    //set content header
    res.setHeader('Content-Type', 'text/html');
    // res.write('Hello ninja');
    // res.write('<p>Hello again ninjas from P tag</p>');
    // res.end();

    //basic routing
    let path = '../views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            //redirecting if the route /about-me is not present/moved
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //sending html files to the browser
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening to requests on port 3000');
})