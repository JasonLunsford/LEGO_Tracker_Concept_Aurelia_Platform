import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

SectionTitle.propTypes = {
  title: PropTypes.string
};