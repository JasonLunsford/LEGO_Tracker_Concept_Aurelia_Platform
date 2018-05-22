import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import {CoreServices} from '../../services/core_services';
import {ModelManager} from '../../helpers/model_manager';
import {MEGABYTE} from '../../helpers/constants';

import Shell from '../react/global/Shell';

@inject(CoreServices, Element, ModelManager, Router)
export class Dashboard {
    constructor(coreServices, element, modelManager, router) {
        this.coreServices = coreServices;
        this.element = element;
        this.modelManager = modelManager;
        this.router = router;

        this.currentView = 'dashboard';

        this.initAppModel();
    }

    attached() {
        this.init();
    }

    detached() {}

    initAppModel() {
        const model = this.modelManager.getModel();

        this.appModel = _.get(model, this.currentView);

        _.set(this.appModel, 'sectionTitle', this.convert.upperFirst());
        _.set(this.appModel, 'message', 'Hello LEGO Super Fan!');
    }

    saveModel() {
        return this.modelManager.saveModel(this.appModel, this.currentView);
    }

    convert = {
        upperFirst: () => { return _.upperFirst(this.currentView); }
    }

    myRouter(mode, aspects) {
        let { target, state, parent, child } = aspects;

        switch(mode) {
            case 'collections':
                let route = `${mode}/${target}`
                this.router.navigate(route);
                break;
        }
    }

    _extractNames(source) {
        return _.map(source, item => {
            return item.name;
        });
    }

    _render() {
        const model = this.saveModel();
        
        ReactDOM.render(
          <Shell 
            model={model}
            currentView={this.currentView}
            router={this.myRouter.bind(this)}
          />,
          this.insert
        );
    }

    async init() {
        if (_.get(this.appModel, 'categories')) {
            this._render();

            return;
        }

        const names = await this.getNames();

        let countPromises = _.map(names, name => {
            return this.getCount(name)
        });

        let sizePromises = _.map(names, name => {
            return this.getSize(name)
        });

        const promises = [...countPromises, ...sizePromises];
        
        const categories = await this.getCategories(names, promises);

        _.set(this.appModel, 'categories', categories);

        this._render();
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
