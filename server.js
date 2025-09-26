const express = require("express");
const http = require("http")
const cors = require("cors");
const routes = require("./routes");
const errorHandling = require("./middleware/errorHandling");
const noRouteFound = require("./middleware/noRouteFound");

class Server {
  constructor(config) {
    this.app = express();
    this.config = config;
    this.server = http.createServer(this.app)
  }

  bootstrap() {
    this.server.use(cors());
    this.server.use(express.urlencoded());
    this.server.use(routes);
    this.server.use(noRouteFound);
    this.server.use(errorHandling);
    return;
  }

  run() {
    const { port } = this.config;
    this.server.listen(port, () => {
      console.log("server is nunnig on port ", port);
    });

    return;
  }
}

const server = new Server({ port: 9000 });
server.bootstrap();
server.run();
