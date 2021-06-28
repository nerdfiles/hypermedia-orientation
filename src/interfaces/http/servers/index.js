const express = require('express');
const server = express();

const port = 9999;
const app = () => 
  server.listen(port, () => {
    return process.exit(0);
  });

module.exports = app;
