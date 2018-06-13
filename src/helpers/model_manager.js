import {inject} from 'aurelia-framework';

import _ from 'lodash';

import {CoreServices} from '../services/core_services';
import {MEGABYTE} from './constants';

@inject(CoreServices)
export class ModelManager {
    constructor(coreServices) {
        this.coreServices = coreServices;

        this.model = {};
    }
    
    initModel() {
        _.set(this.model, 'collections', {});
        _.set(this.model, 'dashboard', {});
        _.set(this.model, 'details', {});
        _.set(this.model, 'categories', {});

        return this.model;
    }

    getModel() {
        return this.model;
    }

    saveModel(appModel, view) {
        this.model[view] = _.assign({}, this.model[view], appModel);

        return this.model;
    }

    _extractNames(source) {
        return _.map(source, item => {
            return item.name;
        });
    }

    async loadLEGOdata() {
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
                    count:   c.count,
                    members: [],
                    name:    value,
                    size:    s.size
                });
            });

            let collectionPromises = _.map(names, name => {
                return this.getCollection(name)
            });

            // Promise.all(collectionPromises).then(results => {
            //     console.log('results: ', results);

            //     return data;
            // }).catch(reason => {
            //     console.log('reason: ', reason)

            //     return data;
            // });

            return data;
        }).catch(reason => { 
            console.log('reason: ', reason);
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

    async getCollection(collection) {
        return await this.coreServices.getCollection(collection);
    }
}
