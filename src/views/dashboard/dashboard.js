import {inject} from 'aurelia-framework';

import _ from 'lodash';

import {CoreServices} from '../../services/core_services';

@inject(CoreServices)
export class Dashboard {
    MEGABYTE = 1048576;

    constructor(coreServices) {
        this.coreServices = coreServices;
    }

    attached() {
        this.model = [];
        this.message = 'Dashboard Shell / Home Page';

        this.init();
    }

    detached() {}

    _extractNames(source) {
        return _.map(source, item => {
            return item.name;
        });
    }

    async init() {
        const names = await this.getNames();

        let countPromises = _.map(names, name => {
            return this.getCount(name)
        });

        let sizePromises = _.map(names, name => {
            return this.getSize(name)
        });

        let promises = [...countPromises, ...sizePromises];
        
        Promise.all(promises).then(results => {
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

            this.model = [...data];
        });
    }

    async getNames() {
        let cols = await this.coreServices.getMetaInfo('names');

        return this._extractNames(cols);
    }

    async getCount(collection) {
        return await this.coreServices.getCollectionCount(collection);
    }

    async getSize(collection) {
        let source = await this.coreServices.getMetaInfo('size', collection);

        return {
            size: _.chain(source.size).divide(this.MEGABYTE).round(2).value()
        }
    }    
}
