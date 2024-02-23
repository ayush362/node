const fs = require("fs");

// This code make a file or write the content in the file

// fs.writeFileSync("message.txt", "hello from nodejs", (err) => {
//   if (err) {
// throw err;
//   }
//   console.log("The file has been saved");
// });

// This code will read the data from the file

fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
});
