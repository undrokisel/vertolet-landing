// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Client } = require("pg");
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 4000;
// when using middleware `hostname` and `port` must be provided below
const client = new Client({
  user: "user",
  host: "host",
  database: "database",
  password: "password",
});
client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});
// client.query("SELECT NOW()", (err, res) => {
//   console.log(err, res, "log from query connection to db");
//   client.end();
// });
const app = next({ dev, hostname, port: dev ? port : null });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      console.log({ pathname });
      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(dev ? port : null, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
