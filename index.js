const CoinHive = require('coin-hive');

(async () => {
  // Create miner
  console.log("Starting Miner");
  const miner = await CoinHive('etnjvDruGQhH8GV3NrS9kK6BAeCfJtuTEQRUguGH6AzqR4bUBKwF1dKaLd7RRCts5wNP57Krgj7gCEvbF1FL2W1k6XTWWfbUda', {
    pool: {
      host: 'nl.etnpool.net',
      port: 3333
    },
    launch: {
   executablePath: '/usr/bin/chromium-browser',
   args: ['--disable-setuid-sandbox', '--no-sandbox']
 }
  });
  miner.start();

  // Listen on events
 miner.on('found', () => console.log('Found!'));
 miner.on('accepted', () => console.log('Accepted!'));
 miner.on('update', data =>
   console.log(`
   Hashes per second: ${data.hashesPerSecond}
   Total hashes: ${data.totalHashes}
   Accepted hashes: ${data.acceptedHashes}
 `)
 );
})();
