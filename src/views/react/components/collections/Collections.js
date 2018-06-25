import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, H2} from './styles/collections.sc';

export default class Collections extends Component {

    render() {
        let { router } = this.props;

        return (
            <Container>
                <H2>Hello World</H2>
            </Container>
        );
    }
}
