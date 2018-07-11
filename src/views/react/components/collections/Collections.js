import React, {Component} from 'react';

import { setSectionTitle } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Container, H2} from './styles/collections.sc';

import ColorTable from './ColorTable';
import ElementTable from './ElementTable';
import PieceCategoryTable from './PieceCategoryTable';
import PieceTable from './PieceTable';
import SetTable from './SetTable';
import ThemeTable from './ThemeTable';

export default class Collections extends Component {

    componentWillMount() {
        setSectionTitle(this.convert.pretty(this.props.type));
    }

    table(tableObj) {
        switch (tableObj.type) {
            case 'colors':
                return <ColorTable members={tableObj.members} />;
                break;
            case 'elements':
                return <ElementTable members={tableObj.members}
                                     colors={tableObj.colors}
                                     pieces={tableObj.pieces} />;
                break;
            case 'pieces':
                return <PieceTable members={tableObj.members}
                                   categories={tableObj.categories} />;
                break;
            case 'piece_categories':
                return <PieceCategoryTable members={tableObj.members} />;
                break;
            case 'sets':
                return <SetTable members={tableObj.members}
                                 themes={tableObj.themes} />;
                break;
            case 'themes':
                return <ThemeTable members={tableObj.members} />;
                break;
        }
    }

    convert = {
        pretty: value => { return _.chain(value).replace('_', ' ').startCase().value(); }
    }

    render() {
        return (
            <Container>
                {this.table(this.props)}
            </Container>
        );
    }
}
