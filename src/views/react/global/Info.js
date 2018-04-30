import React, {Component} from 'react';

import styled, {css} from 'styled-components';
import {Container,
        Bar} from './styles/info';

export default class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { greeting, date } = this.props;

        return (
            <Container>
                <Bar>{greeting}</Bar>
                <Bar right>{date}</Bar>
            </Container>
        );
    }
}
