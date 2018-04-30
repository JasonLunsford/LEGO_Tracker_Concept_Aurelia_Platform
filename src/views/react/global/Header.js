import React, {Component} from 'react';

import Banner from './Banner';
import Info from './Info';

import styled from 'styled-components';
import {Container} from './styles/header';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { greeting, date } = this.props;

        return (
            <Container>
                <Banner />
                <Info greeting={greeting} date={date} />
            </Container>
        );
    }
}
