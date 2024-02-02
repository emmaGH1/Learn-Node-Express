import http from 'http'

const server = http.createServer((req, res) => {
    if ( req.url === '/') {
        res.end(`Welcome to our home page`);
        return
    }
    if ( req.url === '/about') {
        res.end(`Welcome to our About page`);
        return
    }
    res.end(`
      <h1">Oops!</h1>
      <p>The requested page could not be found </p>
      <a href='/'> Return to home page </a>
    `)
})

server.listen(5000)