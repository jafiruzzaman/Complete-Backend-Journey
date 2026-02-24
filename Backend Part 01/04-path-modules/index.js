const { log } = require("console");
const path = require("path");

// dirname --> folder name
console.log(path.dirname(__filename));

// basename --> file name
console.log(path.basename(__filename));

// extname --> extension name of the file
console.log(path.extname(__filename));

// join --> join all the paths
console.log(path.join("/auth", "controller", "services", "repositories"));

// normalize -->normalize the paths
log(
  path.normalize(
    "../../Backend Part 01/../Backend Part 01/01-hello-world-nodejs/index.js",
  ),
);
