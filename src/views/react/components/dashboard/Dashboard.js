import React, {Component} from 'react';

import styled from 'styled-components';
import {DashboardContainer, List, Span} from './styles/dashboard';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { categories } = this.props;

        return (
            <DashboardContainer>
                <List>
                    {categories.map((category, index) => 
                      <li key={index}>
                        <Span>{category.name}</Span>
                        <Span>{category.count}</Span>
                        <Span>{category.size}</Span>
                      </li>
                    )}
                </List>
            </DashboardContainer>
        );
    }
}