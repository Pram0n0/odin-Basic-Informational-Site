const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Parse the URL
    const path = url.parse(req.url).pathname;
    console.log(`Server path: ${path}`)
    let filePath = './views/';

    // Determine the file path based on the requested URL
    switch (path) {
        case '/':
            filePath += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            filePath += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            filePath += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            filePath += '404.html';
            res.statusCode = 404;
            break;
    }

    // Read the HTML file and serve its content
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end("404 - Page Not Found");
        } else {
            res.end(data);
        }
    });
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});