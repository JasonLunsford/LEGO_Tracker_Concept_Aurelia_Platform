import {Collections} from '../../../src/views/collections/collections';

let collections = new Collections();

beforeEach(() => {
    let params = {
        type: 'world'
    };

    collections.activate(params);
});

describe('attached', () => {
    beforeEach(() => {
        collections.attached();
    });

    it('should initialize a demo string', () => {
        expect(collections.message).toEqual(jasmine.any(String));
    });

    it('should have access to one route parameters', () => {
        expect(collections.type).toEqual(jasmine.any(String));
    });
});
