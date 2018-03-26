import {ViewDetails} from '../../../src/views/details/view_details';

let viewDetails = new ViewDetails();

beforeEach(() => {
    let params = {
        id:   'hello',
        type: 'world'
    };

    viewDetails.activate(params);
});

describe('attached', () => {
    beforeEach(() => {
        viewDetails.attached();
    });

    it('should initialize a demo string', () => {
        expect(viewDetails.message).toEqual(jasmine.any(String));
    });

    it('should have access to two route parameters', () => {
        expect(viewDetails.id).toEqual(jasmine.any(String));
        expect(viewDetails.type).toEqual(jasmine.any(String));
    });
});
