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
    let _model = () => {
        return {
            currentView:  'Details',
            message :     'Return to Dashboard',
            sectionTitle: 'Edit Details',
            trialMessage: 'Edit Entry Details for world and hello Displayed Here'
        };
    };

    it('should initialize the React model', () => {
        spyOn(editDetails, '_prepareView').and.callThrough();
        spyOn(editDetails, '_render');
        editDetails.attached();

        expect(editDetails.model).toEqual(_model());
        expect(editDetails._prepareView).toHaveBeenCalled();
    });
});
