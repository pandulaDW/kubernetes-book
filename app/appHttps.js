const http = require("http");
const os = require("os");

console.log("Kubia https server starting");

const handler = (req, res) => {
  res.writeHead(200);
  res.end(`You've hit ${os.hostname()} on https traffic`);
};

const www = http.createServer(handler);
www.listen(8443);
