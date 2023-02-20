const { readFile, writeFile } = require("fs");
console.log("START");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("DONE WITH THIS TASK");
      }
    );
  });
});
console.log("STARTING NEXT TASK")
