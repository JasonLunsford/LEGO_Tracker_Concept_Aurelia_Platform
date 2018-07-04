import { observable } from 'mobx';

const appState = observable({
    members:      [],
    filteredMembers: [],
    sectionTitle: '',
    selectedItem: {}
});

export const setMembers = members => {
    appState.members = members;
    appState.filteredMembers = members;
};

export const setFilteredMembers = query => {
    if (_.isEmpty(query)) {
        appState.filteredMembers = appState.members;
        return;
    }

    let searchValue = _.toLower(query);

    appState.filteredMembers = _.filter(appState.members, member => {
        let searchName = _.toLower(member.name);
        return _.includes(searchName, searchValue);
    });
};

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

export const getFilteredMembers = () => {
    return appState.filteredMembers;
}
