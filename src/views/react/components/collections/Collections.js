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

    table({type, members, themes, categories, colors, pieces}) {
        switch (type) {
            case 'colors':
                return <ColorTable members={members} />;
                break;
            case 'elements':
                return <ElementTable members={members}
                                     colors={colors}
                                     pieces={pieces} />;
                break;
            case 'pieces':
                return <PieceTable members={members} categories={categories} />;
                break;
            case 'piece_categories':
                return <PieceCategoryTable members={members} />;
                break;
            case 'sets':
                return <SetTable members={members} themes={themes} />;
                break;
            case 'themes':
                return <ThemeTable members={members} />;
                break;
        }
    }

    convert = {
        pretty: value => { return _.chain(value).replace('_', ' ').startCase().value(); }
    }

    render() {
        const { members,
                router,
                type,
                themes,
                categories,
                colors,
                pieces } = this.props;

        return (
            <Container>
                {this.table({type, members, themes, categories, colors, pieces})}
            </Container>
        );
    }
}
