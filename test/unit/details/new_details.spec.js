import {NewDetails} from '../../../src/views/details/new_details';

let newDetails = new NewDetails();

beforeEach(() => {
    let params = {
        type: 'world'
    };

    newDetails.activate(params);
});

describe('attached', () => {
    beforeEach(() => {
        newDetails.attached();
    });

    it('should initialize a demo string', () => {
        expect(newDetails.message).toEqual(jasmine.any(String));
    });

    it('should have access to one route parameters', () => {
        expect(newDetails.type).toEqual(jasmine.any(String));
    });
});
