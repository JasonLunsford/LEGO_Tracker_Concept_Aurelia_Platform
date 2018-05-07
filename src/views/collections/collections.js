import {inject, observable} from 'aurelia-framework';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import moment from 'moment';

import Shell from '../react/global/Shell';

const MEGABYTE = 1048576;

@inject(Element)
export class Collections {
    @observable type;

    constructor(element) {
        this.element = element;
    }

    activate(params) {
        this.type = params.type;

        // promise to resolve collection details here
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

    getDate = {
        today: () => { return moment().format('MMMM Do YYYY'); }
    }

    render() {
        ReactDOM.render(
          <Shell 
            model={this.model}
          />,
          this.element
        );
    }

    _prepareView() {
        this.message = `Collection Details for ${this.type} Displayed Here`;
        this.model = {};
        
        _.set(this.model, 'currentView', 'Collections');
        _.set(this.model, 'sectionTitle', 'Collections');
        _.set(this.model, 'message', 'Return to Dashboard');
        _.set(this.model, 'date', this.getDate.today());
        _.set(this.model, 'trialMessage', this.message);

        this.render();
    }
}
