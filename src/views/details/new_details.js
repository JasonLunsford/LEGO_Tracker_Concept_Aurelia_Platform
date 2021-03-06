import {inject, observable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import {ModelManager} from '../../helpers/model_manager';
import {RouteManager} from '../../helpers/route_manager';

import Shell from '../react/global/Shell';

@inject(Element, ModelManager, RouteManager, Router)
export class NewDetails {
    @observable type;

    constructor(element, modelManager, routeManager, router) {
        this.element = element;
        this.modelManager = modelManager;
        this.routeManager = routeManager;
        this.router = router;

        this.currentView = 'details';
    }

    activate(params) {
        this.type = params.type;

        // promise to resolve entry details here
    }

    attached() {
        this.initAppModel();
    }

    detached() {}

    typeChanged(newType, oldType) {
        if (_.isNil(oldType)) {
            return;
        }

        this._prepareView();     
    }

    saveModel() {
        return this.modelManager.saveModel(this.appModel, this.currentView);
    }

    initAppModel() {
        const model = this.modelManager.getModel();

        this.appModel = _.get(model.views, this.currentView);

        this.message = `New Details for ${this.type} Displayed Here`;
        
        _.set(this.appModel, 'sectionTitle',  this.convert.upperFirst());
        _.set(this.appModel, 'message', 'Return to Dashboard');
        _.set(this.appModel, 'trialMessage', this.message);
        _.set(this.appModel, 'type', this.type);

        this._render();
    }

    updateAppModel() {
        this.message = `New Details for ${this.type} Displayed Here`;

        _.set(this.appModel, 'trialMessage', this.message);
        _.set(this.appModel, 'type', this.type);

        this._render();
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
