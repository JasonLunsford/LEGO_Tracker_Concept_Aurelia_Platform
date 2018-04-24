import React, {Component} from 'react';

import Banner from './Banner';
import Info from './Info';

import styled from 'styled-components';
import {HeaderContainer} from './header_style';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { pageTitle, greeting, date } = this.props;

        return (
            <HeaderContainer>
                <Banner pageTitle={pageTitle} />
                <Info greeting={greeting} date={date} />
            </HeaderContainer>
        );
    }
}
