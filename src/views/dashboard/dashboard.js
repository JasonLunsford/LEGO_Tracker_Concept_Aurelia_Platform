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

        this.initAppModel();
    }

    attached() {
        this._render();
    }

    detached() {}

    initAppModel() {
        const model = this.modelManager.getModel();

        this.appModel = _.get(model.views, this.currentView);

        _.set(this.appModel, 'sectionTitle', this.convert.upperFirst());
        _.set(this.appModel, 'message', 'Hello LEGO Super Fan!');
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
