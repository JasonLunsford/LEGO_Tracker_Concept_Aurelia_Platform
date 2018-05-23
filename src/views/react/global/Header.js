import React, {Component} from 'react';

import Banner from './Banner';
import Info from './Info';

import styled from 'styled-components';
import {Container} from './styles/header.sc';

export default class Header extends Component {

    render() {
        let { message, date, view, router } = this.props;

        return (
            <Container>
                <Banner />
                <Info {...this.props} />
            </Container>
        );
    }
}
