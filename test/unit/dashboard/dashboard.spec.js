import {Dashboard} from '../../../src/views/dashboard/dashboard';

import moment from 'moment';

let dashboard = new Dashboard();

describe('attached', () => {
    let _model = () => {
        return {
            pageTitle: 'Dashboard',
            greeting:  'Hello Jason Lunsford!',
            date:      moment().format('MMMM Do YYYY')
        };
    };

    it('should initialize an empty model and a welcome message', () => {
        spyOn(dashboard, 'init');
        dashboard.attached();

        expect(dashboard.model).toEqual(_model());
        expect(dashboard.init).toHaveBeenCalled();
    });
});

describe('getDate', () => {
    let date;

    beforeEach(() => {
        date = moment().format('MMMM Do YYYY');
    });

    it('should return todays date when today method called', () => {
        let actual = dashboard.getDate.today();

        expect(actual).toEqual(date);
    });
});
