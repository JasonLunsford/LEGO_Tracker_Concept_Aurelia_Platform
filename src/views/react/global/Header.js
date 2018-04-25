import React, {Component} from 'react';

import Banner from './Banner';
import Info from './Info';

import styled from 'styled-components';
import {HeaderContainer} from './styles/header';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, greeting, date } = this.props;

        return (
            <HeaderContainer>
                <Banner title={title} />
                <Info greeting={greeting} date={date} />
            </HeaderContainer>
        );
    }
}
