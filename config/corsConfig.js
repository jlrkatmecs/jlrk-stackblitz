const whitelist = ['https://localhost:3500', 'https://www.google.com'];
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

module.exports = {corsOptions};  