import {inject} from 'aurelia-framework';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import moment from 'moment';

import {CoreServices} from '../../services/core_services';

import DashboardShell from '../react/shells/DashboardShell';

const MEGABYTE = 1048576;

@inject(CoreServices, Element)
export class Dashboard {
    constructor(coreServices, element) {
        this.coreServices = coreServices;
        this.element = element;
    }

    attached() {
        this.model = {};
        
        _.set(this.model, 'pageTitle', 'Dashboard');
        _.set(this.model, 'greeting', 'Hello Jason Lunsford!');
        _.set(this.model, 'date', this.getDate.today());

        this.init();
    }

    detached() {}

    getDate = {
        today: () => { return moment().format('MMMM Do YYYY'); }
    }

    render() {
        ReactDOM.render(
          <DashboardShell 
            model={this.model}
          />,
          this.element
        );
    }

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

        const promises = [...countPromises, ...sizePromises];
        
        const categories = await this.getCategories(names, promises);

        _.set(this.model, 'categories', categories);

        this.render();
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
        // will need to add a lastModified document property to each
        // collection, and handle updating it manually upon POST/PUT
    }
}
