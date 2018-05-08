import {Collections} from '../../../src/views/collections/collections';

let collections = new Collections();

beforeEach(() => {
    let params = {
        type: 'world'
    };

    collections.activate(params);
});

describe('attached', () => {
    let _model = () => {
        return {
            currentView:  'Collections',
            message :     'Return to Dashboard',
            sectionTitle: 'Collections',
            trialMessage: 'Collection Details for world Displayed Here'
        };
    };

    it('should initialize the React model', () => {
        spyOn(collections, '_prepareView').and.callThrough();
        spyOn(collections, '_render');
        collections.attached();

        expect(collections.model).toEqual(_model());
        expect(collections._prepareView).toHaveBeenCalled();
    });
});
