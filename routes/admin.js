const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '..', 'views', 'admin');

router.use((req, res, next) => {
  console.log('Admin Time:', Date.now());
  next();
});

router.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

module.exports = router;
