const http = require("http");
const os = require("os");

console.log("Kubia http server starting");

const handler = (req, res) => {
  res.writeHead(200);
  res.end(`You've hit ${os.hostname()} http traffic`);
};

const www = http.createServer(handler);
www.listen(8080);
