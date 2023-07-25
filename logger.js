const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const { EventEmitter } = require('events');
const { existsSync } = require('fs');
const { join } = require('path');

const fsPromise = require('fs').promises;

const logEvent = async (message) => {
  const datetime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${datetime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!existsSync(join(__dirname, 'logs'))) {
      await fsPromise.mkdir(join(__dirname, 'logs'));
    }
    await fsPromise.appendFile(
      join(__dirname, 'logs', 'eventlog.txt'),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

class MyEventEmitter extends EventEmitter {}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on('log', (msg) => logEvent(msg));

const logMsg = async (message) => {
  myEventEmitter.emit('log', message.toString());
};

module.exports = { logMsg };
