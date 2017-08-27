
const Promise = require('bluebird');

const redis = require('promise-redis')(resolver => {
  return new Promise(resolver);
});

var host = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
var port = process.env.REDIS_PORT_6379_TCP_PORT || 6379
const client = redis.createClient(port, host);

client.on('error', err => {
  console.log('uh oh Redis had an error connecting', err);
});

/**
 * Verify connection and intitialize redis with all the DB data
 * Note: uncomment the below if you want the guardian news to be cached
 * this was commented out to prevent hitting the max limit of api calls
 * during testing
*/
client.on('connect', () => {
  console.log(`Redis connection established to: ${host}`);
  client.flushall()
  .then(result => {
    if (result) console.log('Redis data flushed');
  })
  .catch(err => {
    throw err;
  });
});

module.exports = client;
