import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, Badge, Span, TitleBox, 
        Title, LastUpdate, CountBox, 
        Count, SizeBox} from './styles/dashboard.sc';

export default class Dashboard extends Component {

    render() {
        let { categories } = this.props;

        return (
            <Container>
                {categories.map((category, index) => 
                  <Badge key={index}>
                    <TitleBox>
                        <Title>{category.name}</Title>
                        <LastUpdate>Last updated: March 16, 2018</LastUpdate>
                    </TitleBox>
                    <CountBox>
                        <Count>{category.count}</Count>
                        <Span>Documents</Span>
                    </CountBox>
                    <SizeBox>
                        <Span>{category.size} MB</Span>
                        <Span>Disk</Span>
                    </SizeBox>
                  </Badge>
                )}
            </Container>
        );
    }
}
