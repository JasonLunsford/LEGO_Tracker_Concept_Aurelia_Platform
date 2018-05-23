import {inject, observable} from 'aurelia-framework';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import {ModelManager} from '../../helpers/model_manager';

import Shell from '../react/global/Shell';

@inject(Element, ModelManager)
export class Collections {
    @observable type;

    constructor(element, modelManager) {
        this.element = element;
        this.modelManager = modelManager;

        this.currentView = 'collections';
    }

    activate(params) {
        this.type = params.type;

        // promise to resolve collection details here
    }

    attached() {
        this.initAppModel();
    }

    detached() {}

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

        this.message = `Collection Details for ${this.type} Displayed Here`;
        
        _.set(this.appModel, 'sectionTitle',  this.convert.upperFirst());
        _.set(this.appModel, 'message', 'Return to Dashboard');
        _.set(this.appModel, 'trialMessage', this.message);

        this._render();
    }

    updateAppModel() {
        this.message = `Collection Details for ${this.type} Displayed Here`;

        _.set(this.appModel, 'trialMessage', this.message);

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
          />,
          this.insert
        );
    }
}
