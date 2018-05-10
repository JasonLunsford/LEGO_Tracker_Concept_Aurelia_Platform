import React, {Component} from 'react';

import styled from 'styled-components';
import {Container,
        Title,
        Lego} from './styles/banner.sc';

export default class Banner extends Component {

    render() {
        return (
            <Container>
                <Title><Lego>LEGO</Lego> Tracker</Title>
            </Container>
        );
    }
}
