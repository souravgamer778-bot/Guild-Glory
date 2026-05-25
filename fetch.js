const https = require('https');
https.get('https://freefire-guild-bot.github.io/Freebot/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
