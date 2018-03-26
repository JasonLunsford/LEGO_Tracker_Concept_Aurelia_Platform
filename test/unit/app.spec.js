import {App} from '../../src/app';

let legoTracker = new App();

describe('configureRouter', () => {
    let config;
    let router;

    beforeEach(() => {
        router = {};

        config = {
            title:            '',
            mapUnknownRoutes: () => {},
            map:              () => {}
        }
    });

    it('should create route options', () => {
        legoTracker.configureRouter(config, router);

        expect(legoTracker.router).toEqual(jasmine.any(Object));
    });
});
