import {inject, observable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import {ModelManager} from '../../helpers/model_manager';
import {RouteManager} from '../../helpers/route_manager';

import Shell from '../react/global/Shell';

@inject(Element, ModelManager, RouteManager, Router)
export class ViewDetails {
    @observable type;
    @observable id;

    constructor(element, modelManager, routeManager, router) {
        this.element = element;
        this.modelManager = modelManager;
        this.routeManager = routeManager;
        this.router = router;

        this.currentView = 'details';
    }

    activate(params) {
        this.id = params.id;
        this.type = params.type;

        // promise to resolve entry details here
    }

    attached() {
        this.initAppModel();
    }

    detached() {}

    idChanged(newId, oldId) {
        if (_.isNil(oldId)) {
            return;
        }

        this.updateAppModel();
    }

    typeChanged(newType, oldType) {
        if (_.isNil(oldType)) {
            return;
        }

        this.updateAppModel();
    }

    saveModel() {
        return this.modelManager.saveModel(this.appModel, this.currentView);
    }

    initAppModel() {
        const model = this.modelManager.getModel();

        this.appModel = _.get(model, this.currentView);

        this.message = `View Details for ${this.type} Displayed Here`;
        
        _.set(this.appModel, 'sectionTitle',  this.convert.upperFirst());
        _.set(this.appModel, 'message', 'Return to Dashboard');
        _.set(this.appModel, 'trialMessage', this.message);
        _.set(this.appModel, 'type', this.type);
        _.set(this.appModel, 'id', this.id);

        this._render();
    }

    updateAppModel() {
        this.message = `View Details for ${this.type} Displayed Here`;

        _.set(this.appModel, 'trialMessage', this.message);
        _.set(this.appModel, 'type', this.type);
        _.set(this.appModel, 'id', this.id);

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
