import {Dashboard} from '../../../src/views/dashboard/dashboard';

let dashboard = new Dashboard();

describe('attached', () => {
    let _model = () => {
        return {
            pageTitle: 'Dashboard',
            greeting:  'Hello Jason Lunsford!'
        };
    };

    it('should initialize an empty model and a welcome message', () => {
        spyOn(dashboard, 'init');
        dashboard.attached();

        expect(dashboard.model).toEqual(_model());
        expect(dashboard.init).toHaveBeenCalled();
    });
});
