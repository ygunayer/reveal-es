const argv = require('optimist').argv;
const Indexer = require('./lib/indexer');

const options = {
    host: argv.host || 'localhost:9200',
    requestTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    mapping: argv.mapping ? require('../data/mapping/' + argv.mapping) : null
};

if (!argv.index || !argv.type) {
    throw new Error('Please specify an index and a type');
}

const data = require('../data/' + (argv.data || 'recipes'));

if (!data) {
    throw new Error('Data not found');
}

const indexer = new Indexer(argv.index, argv.type, options);

indexer.index(data)
    .then(r => console.log('Successfully indexed', r.items.length, 'items'))
    .catch(console.error.bind(console));
