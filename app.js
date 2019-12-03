const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Cloud Pak for Applications on surge");
});

module.exports.app = app;
