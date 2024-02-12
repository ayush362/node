const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with the id:${id}`);
});
customEmitter.on("response", () => {
  console.log(`Some other logic`);
});

customEmitter.emit("response", "john", 34);
