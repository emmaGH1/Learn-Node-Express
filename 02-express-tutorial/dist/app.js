import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.method);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>okkkk</h1>');
    res.end('home page');
});
server.listen(5000);
//# sourceMappingURL=app.js.map