/*
// run `node index.js` in the terminal
const http = require('http');
const path = require('path');
const fs = require('fs');
const { logMsg } = require('./logger');
const routes = require('./routes').routes;

console.log(`Hello Node.js v${process.versions.node}!`);

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  logMsg(req.url + '\t' + req.method);
  var viewPath;
  routes.map(function (route) {
    console.log(JSON.stringify(route));
    if (route.url == req.url) {
      viewPath = route.view;
    }
  });
  var fullViewPath;
  if (viewPath) {
    res.statusCode = 200;
    fullViewPath = path.join(__dirname, 'views', viewPath);
  } else {
    res.statusCode = 404;
    fullViewPath = path.join(__dirname, 'views', '404.html');
  }
  res.setHeader('Content-type', 'text/html');
  fs.readFile(fullViewPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

server.listen(PORT, () => {
  logMsg('Server running on PORT ${PORT}');
});
*/

const path = require('path');
const express = require('express');
const { logMsg } = require('./logger');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;

app.use((req, res, next) => {
  logMsg(`${req.method}\t${req.headers.origin}\t${req.url}`);
  next();
});

const whitelist = ['https://localhost:3500', 'https://google.com'];
const corsOptions = {
  origin: (origin, callback) => {
    console.log('IndexOf : ' + whitelist.indexOf(origin));
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`${origin} - Not allowed by CORS`));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));
app.use('/admin', require('./routes/admin'));
app.use('/customer', require('./routes/customer'));
app.use('/employee', require('./routes/api/employee'));


app.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
