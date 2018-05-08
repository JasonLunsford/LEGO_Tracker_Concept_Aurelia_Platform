import {Dashboard} from '../../../src/views/dashboard/dashboard';

import moment from 'moment';

let dashboard = new Dashboard();

describe('attached', () => {
    let _model = () => {
        return {
            currentView:  'Dashboard',
            message :     'Hello Jason Lunsford!',
            sectionTitle: 'Dashboard'
        };
    };

    it('should initialize the React model', () => {
        spyOn(dashboard, 'init');
        spyOn(dashboard, '_prepareView').and.callThrough();
        dashboard.attached();

        expect(dashboard.model).toEqual(_model());
        expect(dashboard.init).toHaveBeenCalled();
        expect(dashboard._prepareView).toHaveBeenCalled();
    });
});


