import React, {Component} from 'react';

import styled from 'styled-components';
import {Container,
        Title} from './styles/section_title';

export default class SectionTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title } = this.props;

        return (
            <Container>
                <Title>{title}</Title>
            </Container>
        );
    }
}
