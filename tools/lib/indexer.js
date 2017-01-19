const elasticsearch = require('elasticsearch');

class Indexer {
    constructor(index, type, options) {
        this._index = index;
        this._type = type;
        this.client = new elasticsearch.Client(options);
        this.mapping = (options && options.mapping) || null;
    }

    create(mapping) {
        let options = { index: this._index };

        return this.client.indices.exists(options)
            .then((exists) => {
                if (exists) {
                    return true;
                }

                if (mapping) {
                    options.body = mapping;
                }

                return this.client.indices.create(options);
            });
    }

    bulkify(data) {
        return data.reduce((acc, item) => {
            acc.push({
                index: {
                    _index: this._index,
                    _type: this._type,
                    _id: item.id
                }
            });

            acc.push(item);

            return acc;
        }, []);
    }

    index(data) {
        return this.create(this.mapping).then(() => this.client.bulk({ body: this.bulkify(data) }));
    }
}

module.exports = Indexer;
