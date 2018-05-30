import { observable } from 'mobx';

const appState = observable({
    sectionTitle: ''
});

export const setSectionTitle = title => {
    appState.sectionTitle = title;
};

export const getSectionTitle = () => {
    return appState.sectionTitle;
}