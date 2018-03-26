import {EditDetails} from '../../../src/views/details/edit_details';

let editDetails = new EditDetails();

beforeEach(() => {
    let params = {
        id:   'hello',
        type: 'world'
    };

    editDetails.activate(params);
});

describe('attached', () => {
    beforeEach(() => {
        editDetails.attached();
    });

    it('should initialize a demo string', () => {
        expect(editDetails.message).toEqual(jasmine.any(String));
    });

    it('should have access to two route parameters', () => {
        expect(editDetails.id).toEqual(jasmine.any(String));
        expect(editDetails.type).toEqual(jasmine.any(String));
    });
});
