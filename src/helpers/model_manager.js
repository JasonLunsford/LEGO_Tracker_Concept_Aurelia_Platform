import _ from 'lodash';

export class ModelManager {
    constructor() {
        this.model = {};
    }
    
    initModel() {
        _.set(this.model, 'dashboard', {});
        _.set(this.model, 'collections', {});
        _.set(this.model, 'details', {});

        return this.model;
    }

    getModel() {
        return this.model;
    }

    saveModel(appModel, view) {
        this.model[view] = _.assign({}, this.model[view], appModel);

        return this.model;
    }
}
