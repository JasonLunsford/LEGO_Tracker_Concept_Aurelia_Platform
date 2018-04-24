import React, {Component} from 'react';

import styled, {css} from 'styled-components';
import {HeaderContainer, 
        BannerContainer,
        BannerHeader,
        InfoContainer,
        InfoHeader} from './header_style';

const Banner = ({pageTitle}) => {
  return (
    <BannerContainer>
        <BannerHeader>{pageTitle}</BannerHeader>
    </BannerContainer>
  );
}

const Info = ({greeting, date}) => {
  return (
    <InfoContainer>
      <InfoHeader>{greeting}</InfoHeader>
      <InfoHeader right>{date}</InfoHeader>
    </InfoContainer>
  );
}

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pageTitle, greeting, date } = this.props;

    let Header = () => {
      return (
        <HeaderContainer>
          <Banner pageTitle={pageTitle} />
          <Info greeting={greeting} date={date} />
        </HeaderContainer>
      );
    }

    return (
      <Header />
    );
  }
}