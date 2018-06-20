import axios from 'axios';
import _ from 'lodash';

export class CoreServices {
    coreGetConfig = {
        method:  'get',
        baseURL: 'http://localhost:8181/',
        timeout: 20000
    }

    constructor() {}

    convert = {
        format: name => { return _.chain(name).toLower().replace(' ', '_').value() },
        search: term => { return _.chain(term).trim().escape().value(); }
    }

    // collection: <string>
    // returns: documents in collection
    async getCollection(collection) {
        let customConfig = {
            url: this.convert.format(collection),
            timeout: 100000,
        }

        return await this._callServer(customConfig);
    }

    // collection: <string>
    // id: <string>, note: mongodb ID
    // returns: specific document in specific collection
    async getItemById(collection, id) {
        let customConfig = {
            url: this.convert.format(collection) + '/' + id   
        }

        return await this._callServer(customConfig);
    }

    // collection: <string>
    // term: <string>, note: mongodb ID
    // returns: documents with a term match
    async getItemByTerm(collection, term) {
        let customConfig = {
            url: this.convert.format(collection),
            params: {
                q: this.convert.search(term)
            }   
        }

        return await this._callServer(customConfig);
    }

    // collection: <string>
    // returns: number of documents in collection
    async getCollectionCount(collection) {
        let customConfig = {
            url: this.convert.format(collection),
            params: {
                count: true
            }   
        }

        return await this._callServer(customConfig);
    }

    // Meta API
    // topic: <string>, ex: size, names (as in collection names)
    // target: <string> (optional), ex: 'colors', 'pieces'
    // returns: depends on topic. Name returns collection names,
    //          Size returns size of database or collection (based on target)
    async getMetaInfo(topic, target = '') {
        let customConfig = {
            url: 'status/' + this.convert.format(topic),
            params: {
                q: this.convert.search(target)
            }
        }

        return await this._callServer(customConfig);
    }

    // Generic server call, used by all APIs
    async _callServer(customConfig) {
        let result;
        let config = _.assign({}, this.coreGetConfig, customConfig);

        try {
            result = await axios(config);
        } catch (error) {
            throw error;
        }

        if (result.status === 200) {
            return result.data;
        } else {
            throw new Error(`Payload failure. Status code: ${result.status}`);
        }
    }
}