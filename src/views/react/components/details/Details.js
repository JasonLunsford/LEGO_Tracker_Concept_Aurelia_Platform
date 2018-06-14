import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, H2} from './styles/details.sc';

export default class Details extends Component {

    render() {
        let { trialMessage, type, router } = this.props;

        return (
            <Container>
                <H2>{trialMessage}</H2>
            </Container>
        );
    }
}
