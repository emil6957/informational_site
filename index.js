const { createServer } = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = createServer((req, res) => {
    let statusCode;
    let file;
    switch (req.url) {
        case "/":
            file = "index.html";
            statusCode = 200;
            break;
        case "/about":
            file = "about.html";
            statusCode = 200;
            break;
        case "/contact-me":
            file = "contact-me.html";
            statusCode = 200;
            break;
        default:
            file = "404.html";
            statusCode = 404;
            break;
    }

    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.statusCode = statusCode;
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
