import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, H2} from './styles/collections.sc';

export default class Collections extends Component {

    render() {
        let { trialMessage, type, router } = this.props;

        return (
            <Container>
                <H2>{trialMessage}</H2>
            </Container>
        );
    }
}
