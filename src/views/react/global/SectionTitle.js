import React, {Component} from 'react';

import styled from 'styled-components';
import {Container,
        Title} from './styles/section_title.sc';

export default class SectionTitle extends Component {

    render() {
        const { title } = this.props;

        return (
            <Container>
                <Title>{title}</Title>
            </Container>
        );
    }
}
