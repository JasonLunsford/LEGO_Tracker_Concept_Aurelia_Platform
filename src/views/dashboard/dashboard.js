import {inject} from 'aurelia-framework';

import _ from 'lodash';

import {CoreServices} from '../../services/core_services';

const MEGABYTE = 1048576;

@inject(CoreServices)
export class Dashboard {
    constructor(coreServices) {
        this.coreServices = coreServices;
    }

    attached() {
        this.model = {};
        
        _.set(this.model, 'pageTitle', 'Dashboard');
        _.set(this.model, 'greeting', 'Hello Jason Lunsford!');

        this.init();
    }

    detached() {}

    _extractNames(source) {
        return _.map(source, item => {
            return item.name;
        });
    }

    _getTodaysDate() {
        // 1) install Moment
        // 2) get and prepare date in format: January 7, 2018
        // 3) return during attached
    }

    async init() {
        const names = await this.getNames();

        let countPromises = _.map(names, name => {
            return this.getCount(name)
        });

        let sizePromises = _.map(names, name => {
            return this.getSize(name)
        });

        const promises = [...countPromises, ...sizePromises];
        
        const categories = await this.getCategories(names, promises);

        _.set(this.model, 'categories', categories);
    }

    async getCategories(names, promises) {
        return Promise.all(promises).then(results => {
            let data = [];
            let counts = _.filter(results, result => result.count >= 0 );
            let sizes = _.filter(results, result => result.size >= 0 );

            names.forEach((value, index) => {
                let c = counts[index];
                let s = sizes[index];

                data.push({
                    name: value,
                    count: c.count,
                    size: s.size
                });
            });

            return data;
        });
    }

    async getNames() {
        const cols = await this.coreServices.getMetaInfo('names');

        return this._extractNames(cols);
    }

    async getCount(collection) {
        return await this.coreServices.getCollectionCount(collection);
    }

    async getSize(collection) {
        const source = await this.coreServices.getMetaInfo('size', collection);

        return {
            size: _.chain(source.size).divide(MEGABYTE).round(2).value()
        }
    }

    async getLastModified(collection) {
        // are the mongodb APIs this flexible??
    }
}
