const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Cloud Pak for Applications mooc-ocp-cpat");
});

module.exports.app = app;
