const server = require('./server.js');
const welcomeRouter = require("./welcome/welcome-router")
const PORT = process.env.PORT || 5000;
const schemeRouter = require("./schemes/scheme-router")

server.use("/schemes", schemeRouter)
server.use("/", welcomeRouter)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});