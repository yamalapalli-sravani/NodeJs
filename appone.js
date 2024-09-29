const fs = require("fs");

setImmediate(() => {
  console.log("immediate one");
});

setTimeout(() => {
  console.log("timeout zero");
}, 0);

setTimeout(() => {
  console.log("timeout one");
}, 4000);

Promise.resolve("one").then(console.log);

Promise.resolve("three").then(console.log);

fs.readFile("./One.txt", "utf-8", () => {
  Promise.resolve("two").then(console.log);
  console.log("/////");
  console.log("file");
  setImmediate(() => {
    console.log("immediate file one");
  });
  process.nextTick(() => {
    console.log("process3");
  });
  setTimeout(() => {
    console.log("timeout one file");
  }, 0);
});

process.nextTick(() => {
  console.log("process");
});

process.nextTick(() => {
  console.log("process2");
});

console.log("console");
