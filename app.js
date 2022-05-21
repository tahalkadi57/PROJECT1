const http = require('http');

const server = http.createServer((req, res) => {
  let url = res.url;
  console.log(url)
})
server.listen(5000)
