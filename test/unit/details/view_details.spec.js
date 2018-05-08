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
    let _model = () => {
        return {
            currentView:  'Details',
            message :     'Return to Dashboard',
            sectionTitle: 'View Details',
            trialMessage: 'View Entry Details for world and hello Displayed Here'
        };
    };

    it('should initialize the React model', () => {
        spyOn(viewDetails, '_prepareView').and.callThrough();
        spyOn(viewDetails, '_render');
        viewDetails.attached();

        expect(viewDetails.model).toEqual(_model());
        expect(viewDetails._prepareView).toHaveBeenCalled();
    });
});
