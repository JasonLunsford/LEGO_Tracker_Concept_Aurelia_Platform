import React, {Component} from 'react';

import { setSectionTitle } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Container, H2} from './styles/collections.sc';

import ColorTable from './ColorTable';
import SetTable from './SetTable';
import ThemeTable from './ThemeTable';
import PieceTable from './PieceTable';

export default class Collections extends Component {

    componentWillMount() {
        setSectionTitle(this.convert.pretty(this.props.type));
    }

    table({type, members, themes, categories}) {
        switch (type) {
            case 'colors':
                return <ColorTable members={members} />;
                break;
            case 'pieces':
                return <PieceTable members={members} categories={categories}/>;
                break;
            case 'sets':
                return <SetTable members={members} themes={themes}/>;
                break;
            case 'themes':
                return <ThemeTable members={members}/>;
                break;
        }
    }

    convert = {
        pretty: value => { return _.chain(value).replace('_', ' ').startCase().value(); }
    }

    render() {
        const { members, router, type, themes, categories } = this.props;

        return (
            <Container>
                {this.table({type, members, themes, categories})}
            </Container>
        );
    }
}
