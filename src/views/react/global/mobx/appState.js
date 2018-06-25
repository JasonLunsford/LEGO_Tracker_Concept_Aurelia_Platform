import { observable } from 'mobx';

const appState = observable({
    sectionTitle: '',
    selectedItem: {}
});

export const setSectionTitle = title => {
    appState.sectionTitle = title;
};

export const setSelectedItem = item => {
    appState.selectedItem = item;
};

export const getSectionTitle = () => {
    return appState.sectionTitle;
}

export const getSelectedItem = () => {
    return appState.selectedItem;
}