import {inject, observable} from 'aurelia-framework';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import moment from 'moment';

import Shell from '../react/global/Shell';

const MEGABYTE = 1048576;

@inject(Element)
export class EditDetails {
    @observable id;
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

    idChanged(newId, oldId) {
        if (_.isNil(oldId)) {
            return;
        }

        this._prepareView();     
    }

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
        this.message = `Edit Entry Details for ${this.type} and ${this.id} Displayed Here`;
        this.model = {};
        
        _.set(this.model, 'currentView', 'Details');
        _.set(this.model, 'sectionTitle', 'Edit Details');
        _.set(this.model, 'message', 'Return to Dashboard');
        _.set(this.model, 'date', this.getDate.today());
        _.set(this.model, 'trialMessage', this.message);

        this.render();
    }
}
