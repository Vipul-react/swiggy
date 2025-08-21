// api/mock.js
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("data/db.json"); // <-- now pointing to data/db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export for Vercel
module.exports = server;
