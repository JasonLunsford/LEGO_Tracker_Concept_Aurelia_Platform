import _ from 'lodash';

import { observable } from 'mobx';

const appState = observable({
    members:      [],
    filteredMembers: [],
    sectionTitle: '',
    selectedItem: {}
});

const sectionFilter = (member, searchValue) => {
    let searchName, searchRgb, searchParentName, searchCategory,
        searchTheme, searchSetNumber, searchPiece, searchColor,
        searchPieceNumber;
    switch(appState.sectionTitle) {
        case 'Colors':
            searchName = _.toLower(member.name);
            searchRgb = _.toLower(member.rgb);
            return _.includes(searchName, searchValue) ||
                   _.includes(searchRgb, searchValue);
            break;
        case 'Themes':
            searchName = _.toLower(member.name);
            searchParentName = _.toLower(member.parent_name);
            return _.includes(searchName, searchValue) ||
                   _.includes(searchParentName, searchValue);
            break;
        case 'Sets':
            searchName = _.toLower(member.name);
            searchTheme = _.toLower(member.theme);
            searchSetNumber = _.toLower(member.set_num);
            return _.includes(searchName, searchValue) ||
                   _.includes(searchTheme, searchValue) ||
                   _.includes(searchSetNumber, searchValue);
            break;
        case 'Elements':
            searchPiece = _.toLower(member.piece);
            searchColor = _.toLower(member.color);
            return _.includes(searchPiece, searchValue) ||
                   _.includes(searchColor, searchValue);
            break;
        case 'Pieces':
            searchName = _.toLower(member.name);
            searchCategory = _.toLower(member.category);
            searchPieceNumber = _.toLower(member.piece_num);
            return _.includes(searchName, searchValue) ||
                   _.includes(searchCategory, searchValue) ||
                   _.includes(searchPieceNumber, searchValue);
            break;
        default:
            searchName = _.toLower(member.name);
            return _.includes(searchName, searchValue);
    }
}

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
        return sectionFilter(member, searchValue);
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

export const getFilteredMembers = index => {
    return _.slice(appState.filteredMembers, 0, index);
}
