import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { getSectionTitle } from './mobx/appState'

import styled from 'styled-components';
import {Container,
        Title} from './styles/section_title.sc';

@observer export default class SectionTitle extends Component {

    render() {
        const { title } = this.props;

        return (
            <Container>
                <Title>{getSectionTitle()}</Title>
            </Container>
        );
    }
}
