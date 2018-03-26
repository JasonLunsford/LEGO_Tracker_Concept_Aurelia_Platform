import {Dashboard} from '../../../src/views/dashboard/dashboard';

let dashboard = new Dashboard();

describe('attached', () => {
    it('should initialize an empty model and a welcome message', () => {
        dashboard.attached();

        expect(dashboard.message).toEqual(jasmine.any(String));
        expect(dashboard.model).toEqual([]);
    });
});
