import React, {Component} from 'react';

import styled from 'styled-components';
import {Container,
        Title,
        Lego} from './styles/banner.sc';

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Title><Lego>LEGO</Lego> Tracker</Title>
            </Container>
        );
    }
}
