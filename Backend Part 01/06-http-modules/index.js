const http = require("http");

// create http server
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: true,
        message: "welcome to the home page",
      }),
    );
  }
  if (url === "/blogs") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: true,
        message: "welcome to the blogs page",
      }),
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Page Not Found",
      }),
    );
  }
});

server.listen(2000, () => {
  console.log("server is listening at 2000");
});
