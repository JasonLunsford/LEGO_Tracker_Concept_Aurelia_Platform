import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, H2} from './styles/collections.sc';

export default class Collections extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { trialMessage } = this.props;

        return (
            <Container>
                <H2>{trialMessage}</H2>
            </Container>
        );
    }
}
