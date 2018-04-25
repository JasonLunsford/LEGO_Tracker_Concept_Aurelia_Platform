import React, {Component} from 'react';

import styled, {css} from 'styled-components';
import {InfoContainer,
        InfoHeader} from './styles/info';

export default class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { greeting, date } = this.props;

        return (
            <InfoContainer>
                <InfoHeader>{greeting}</InfoHeader>
                <InfoHeader right>{date}</InfoHeader>
            </InfoContainer>
        );
    }
}
