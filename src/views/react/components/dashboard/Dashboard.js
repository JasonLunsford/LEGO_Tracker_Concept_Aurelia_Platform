import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Container, Badge, Span, TitleBox, 
        Title, LastUpdate, CountBox, 
        Count, SizeBox, SearchBox} from './styles/dashboard.sc';

import { setSectionTitle } from '../../global/mobx/appState';
import MyDownshift from '../mydownshift/MyDownshift';

export default class Dashboard extends Component {

    componentWillMount() {
        setSectionTitle('Dashboard');
    }

    selectionUpdate(selection) {
        console.log('selection: ', selection);
    }

    convert = {
        pretty: name => { return _.chain(name).replace('_', ' ').startCase().value(); }
    }

    items = [
      {value: 'apple'},
      {value: 'pear'},
      {value: 'orange'},
      {value: 'grape'},
      {value: 'banana'},
    ];

    render() {
        const { categories, router } = this.props;

        const collectionRouter = target => {
            setSectionTitle(this.convert.pretty(target));
            router('collections', {target});
        }

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
                    <SearchBox>
                        <MyDownshift items={this.items}
                                     selectionUpdate={this.selectionUpdate} />
                    </SearchBox>
                  </Badge>
                )}
            </Container>
        );
    }
}
