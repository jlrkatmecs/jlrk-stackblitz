const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

const basePath = path.join(__dirname, '..', 'views', 'admin');

router.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

module.exports = router;
