import {Dashboard} from '../../../src/views/dashboard/dashboard';

let dashboard = new Dashboard();

describe('attached', () => {
    beforeEach(() => {
        dashboard.attached();
    });

    it('should initialize a demo string', () => {
        expect(dashboard.message).toEqual(jasmine.any(String));
    });
});
