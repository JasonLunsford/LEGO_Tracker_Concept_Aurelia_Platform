import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Container, Badge, Span, TitleBox, 
        Title, LastUpdate, CountBox, 
        Count, SizeBox, ButtonBox, SearchBox,
        Button} from './styles/dashboard.sc';

import { setSectionTitle } from '../../global/mobx/appState';
import MyDownshift from '../mydownshift/MyDownshift';

export default class Dashboard extends Component {

    state = {
        disabled: true
    }

    componentWillMount() {
        setSectionTitle('Dashboard');
    }

    selectionUpdate(selection) {
        if (_.isNil(selection) || _.isEmpty(selection)) {
            this.setState({disabled: true});
            return;
        }

        this.setState({disabled: false});
    }

    convert = {
        pretty: value => { return _.chain(value).replace('_', ' ').startCase().value(); }
    }

    items = [
      {value: 'apple'},
      {value: 'pear'},
      {value: 'orange'},
      {value: 'grape'},
      {value: 'banana'},
    ];

    render() {
        const { collections, router } = this.props;
        const { disabled } = this.state;

        const collectionRouter = target => {
            setSectionTitle(this.convert.pretty(target));
            router('collections', {target});
        }

        const detailsRouter = (target, {state, parent, child})  => {
            setSectionTitle(this.convert.pretty(target));
            router('details', {state, target, parent, child});
        }

        const action = (e, state, name) => {
            e.preventDefault();
            e.stopPropagation();

            switch (state) {
                case 'new':
                    detailsRouter(name, {state})
                    break;
                case 'view':
                    detailsRouter(name, {state, parent: 'hello', child: 'world'})
                    break;
            }
        }

        return (
            <Container>
                {collections.map((collection, index) => 
                  <Badge key={index} onClick={() => collectionRouter(collection.name)}>
                    <TitleBox>
                        <Title>{this.convert.pretty(collection.name)}</Title>
                        <LastUpdate>Last updated: March 16, 2018</LastUpdate>
                    </TitleBox>
                    <CountBox>
                        <Count>{collection.count}</Count>
                        <Span>Documents</Span>
                    </CountBox>
                    <SizeBox>
                        <Span>{collection.size} MB</Span>
                        <Span>Disk</Span>
                    </SizeBox>
                    <SearchBox>
                        <MyDownshift items={this.items}
                                     selectionUpdate={this.selectionUpdate.bind(this)} />
                    </SearchBox>
                    <ButtonBox>
                        <Button disabled={disabled}
                                onClick={e => action(e, 'view', collection.name)}>View</Button>
                        <Button onClick={e => action(e, 'new', collection.name)}>Add</Button>
                    </ButtonBox>
                  </Badge>
                )}
            </Container>
        );
    }
}
