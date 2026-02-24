/**
 * What is callback & callback hell ?
 * Ans: callback is a function that is passed as an arguments to another function and it executed later
*/


const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    const appendData = "\nThis is append file";

    fs.appendFile(filePath, appendData, (err) => {
      if (err) {
        console.error("Error appending file:", err);
        return;
      }

      fs.readFile(filePath, "utf-8", (err, finalData) => {
        if (err) {
          console.error("Error reading final file:", err);
          return;
        }

        console.log("File content:", finalData);
      });
    });
  });
});
