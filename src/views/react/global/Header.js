import React, {Component} from 'react';

import Banner from './Banner';
import Info from './Info';

import styled from 'styled-components';
import {Container} from './styles/header.sc';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { message, date } = this.props;

        return (
            <Container>
                <Banner />
                <Info message={message} date={date} />
            </Container>
        );
    }
}
