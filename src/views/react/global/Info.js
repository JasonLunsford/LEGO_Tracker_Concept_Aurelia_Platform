import React, {Component} from 'react';

import styled, {css} from 'styled-components';
import {Container,
        Bar,
        LinkBar} from './styles/info.sc';

export default class Info extends Component {

  viewToggle({message, view}) {
      switch (view) {
        case 'dashboard':
          return <Bar>{message}</Bar>
          break;
        case 'collections':
          return <LinkBar>{message}</LinkBar>
          break;
        case 'details':
          return <LinkBar>{message}</LinkBar>
          break;
      }
  }

    render() {
        let { message, date, view, router } = this.props;

        return (
            <Container>
                {this.viewToggle({message, view})}
                <Bar right>{date}</Bar>
            </Container>
        );
    }
}
