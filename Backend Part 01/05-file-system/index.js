export {};
const path = require("path");
const fs = require("fs");
// create data folder
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

// write on file
const filePath = path.join(dataFolder, "example.txt");
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "Welcome to Node.js");
}

// read file
console.log(fs.readFileSync(filePath, "utf-8"));

// append data
const appendData = "\nThis data is append via Mohammad-Jafiruzzaman";
fs.appendFileSync(path.join(dataFolder, "example.txt"), appendData);
console.log(`data`);


