import React, {Component} from 'react';

import styled from 'styled-components';
import {BannerContainer,
        BannerHeader} from './styles/banner';

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title } = this.props;

        return (
            <BannerContainer>
                <BannerHeader>{title}</BannerHeader>
            </BannerContainer>
        );
    }
}
