import {NewDetails} from '../../../src/views/details/new_details';

let newDetails = new NewDetails();

beforeEach(() => {
    let params = {
        type: 'world'
    };

    newDetails.activate(params);
});

describe('attached', () => {
    let _model = () => {
        return {
            currentView:  'details',
            message :     'Return to Dashboard',
            sectionTitle: 'New Details',
            trialMessage: 'New Entry Details for world Displayed Here'
        };
    };

    it('should initialize the React model', () => {
        spyOn(newDetails, '_prepareView').and.callThrough();
        spyOn(newDetails, '_render');
        newDetails.attached();

        expect(newDetails.model).toEqual(_model());
        expect(newDetails._prepareView).toHaveBeenCalled();
    });});
