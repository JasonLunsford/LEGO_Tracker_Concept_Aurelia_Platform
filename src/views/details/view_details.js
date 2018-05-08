import {inject, observable} from 'aurelia-framework';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import Shell from '../react/global/Shell';

@inject(Element)
export class ViewDetails {
    @observable type;

    constructor(element) {
        this.element = element;
    }

    activate(params) {
        this.id = params.id;
        this.type = params.type;

        // promise to resolve entry details here
    }

    attached() {
        this._prepareView();
    }

    detached() {}

    typeChanged(newType, oldType) {
        if (_.isNil(oldType)) {
            return;
        }

        this._prepareView();     
    }

    _prepareView() {
        this.message = `View Entry Details for ${this.type} and ${this.id} Displayed Here`;
        this.model = {};
        
        _.set(this.model, 'currentView', 'Details');
        _.set(this.model, 'sectionTitle', 'View Details');
        _.set(this.model, 'message', 'Return to Dashboard');
        _.set(this.model, 'trialMessage', this.message);

        this._render();
    }

    _render() {
        ReactDOM.render(
          <Shell 
            model={this.model}
          />,
          this.insert
        );
    }
}
