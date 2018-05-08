import React, {Component} from 'react';

import styled, {css} from 'styled-components';
import {Container,
        Bar} from './styles/info.sc';

export default class Info extends Component {
    render() {
        let { message, date } = this.props;

        return (
            <Container>
                <Bar>{message}</Bar>
                <Bar right>{date}</Bar>
            </Container>
        );
    }
}
