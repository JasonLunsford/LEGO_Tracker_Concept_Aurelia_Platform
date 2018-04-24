import React, {Component} from 'react';

import styled from 'styled-components';
import {BannerContainer,
        BannerHeader} from './header_style';

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { pageTitle } = this.props;

        return (
            <BannerContainer>
                <BannerHeader>{pageTitle}</BannerHeader>
            </BannerContainer>
        );
    }
}
