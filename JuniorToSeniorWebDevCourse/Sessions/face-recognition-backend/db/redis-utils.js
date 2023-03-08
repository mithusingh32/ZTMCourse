const redis = require("redis");
const redisClient = redis.createClient({
  url: 'redis://redis:6379',
  legacyMode: true
});

async function redisConnect() {
  return await redisClient.connect();
}

redisConnect()

module.exports = {
  redisClient
}
