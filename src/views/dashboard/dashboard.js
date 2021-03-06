import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import {ModelManager} from '../../helpers/model_manager';
import {RouteManager} from '../../helpers/route_manager';

import Shell from '../react/global/Shell';

@inject(Element, ModelManager, RouteManager, Router)
export class Dashboard {
    constructor(element, modelManager, routeManager, router) {
        this.element = element;
        this.modelManager = modelManager;
        this.routeManager = routeManager;
        this.router = router;

        this.currentView = 'dashboard';
        this.loadingScreen = true;

        this.initAppModel();
    }

    attached() {
        this.initCollectionLoad();
    }

    detached() {}

    initAppModel() {
        const model = this.modelManager.getModel();

        this.appModel = _.get(model.views, this.currentView);

        _.set(this.appModel, 'sectionTitle', this.convert.upperFirst());
        _.set(this.appModel, 'message', 'Hello LEGO Super Fan!');
    }

    initCollectionLoad() {
        const model = this.modelManager.getModel();

        if (_.has(model.collections[0], 'members')) {
            this.loadingScreen = false;
            this._render();

            return;
        }

        this.modelManager.loadCollections().then(result => {
            this.loadingScreen = false;
            this._render();
        }).catch(reason => {
            console.log('Promise failed because: ', reason);
        });
    }

    saveModel() {
        return this.modelManager.saveModel(this.appModel, this.currentView);
    }

    convert = {
        upperFirst: () => { return _.upperFirst(this.currentView); }
    }

    _render() {
        const model = this.saveModel();
        
        ReactDOM.render(
          <Shell 
            model={model}
            view={this.currentView}
            router={this.routeManager.myRouter.bind(this)}
          />,
          this.insert
        );
    }
}
