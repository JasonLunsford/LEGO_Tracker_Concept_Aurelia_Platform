import {inject} from 'aurelia-framework';

import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import moment from 'moment';

import Shell from '../react/global/Shell';

const MEGABYTE = 1048576;

@inject(Element)
export class EditDetails {
    constructor(element) {
        this.element = element;
    }

    activate(params) {
        this.id = params.id;
        this.type = params.type;

        // promise to resolve entry details here
    }

    attached() {
        this.message = `Edit Entry Details for ${this.type} and ${this.id} Displayed Here`;
        this.model = {};
        
        _.set(this.model, 'currentView', 'Details');
        _.set(this.model, 'sectionTitle', 'Edit Details');
        _.set(this.model, 'message', 'Return to Dashboard');
        _.set(this.model, 'date', this.getDate.today());
        _.set(this.model, 'trialMessage', this.message);

        this.render();
    }

    detached() {}

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
}
