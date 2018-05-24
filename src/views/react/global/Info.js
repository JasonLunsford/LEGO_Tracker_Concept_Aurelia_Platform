import React, {Component} from 'react';

import styled, {css} from 'styled-components';
import {Container,
        Bar,
        Span} from './styles/info.sc';

export default class Info extends Component {

    viewToggle({message, view, router}) {
        const dashboardRouter = view => router('dashboard');

        if (view === 'dashboard') {
            return <Bar>{message}</Bar>
        }

        return <Bar onClick={dashboardRouter}>
                   <Span>{message}</Span>
               </Bar>
  }

    render() {
        let { message, date, view, router } = this.props;

        return (
            <Container>
                {this.viewToggle({message, view, router})}
                <Bar right>{date}</Bar>
            </Container>
        );
    }
}
