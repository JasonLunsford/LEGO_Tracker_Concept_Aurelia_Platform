import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Container, Badge, Span, TitleBox, 
        Title, LastUpdate, CountBox, 
        Count, SizeBox} from './styles/dashboard.sc';

export default class Dashboard extends Component {

    convert = {
        pretty: name => { return _.chain(name).replace('_', ' ').startCase().value(); }
    }

    render() {
        const { categories, router } = this.props;

        const collectionRouter = target => router('collections', {target});

        return (
            <Container>
                {categories.map((category, index) => 
                  <Badge key={index} onClick={() => collectionRouter(category.name)}>
                    <TitleBox>
                        <Title>{this.convert.pretty(category.name)}</Title>
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
