import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Container, Badge, Span, TitleBox, 
        Title, LastUpdate, CountBox, 
        Count, SizeBox, ButtonBox,
        SingleButtonBox, SearchBox} from './styles/dashboard.sc';

import {Button} from '../../global/styles/themes.sc';

import { setSectionTitle,
         setSelectedItem,
         getSelectedItem } from '../../global/mobx/appState';
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
            setSelectedItem({});
            return;
        }

        this.setState({disabled: false});
        setSelectedItem(selection);
    }

    convert = {
        pretty: value => { return _.chain(value).replace('_', ' ').startCase().value(); }
    }

    render() {
        const { collections, router } = this.props;
        const { disabled } = this.state;

        const collectionRouter = target => {
            setSectionTitle(this.convert.pretty(target));
            router('collections', {target});
        }

        const detailsRouter = (target, {state, id})  => {
            setSectionTitle(this.convert.pretty(target));
            router('details', {state, target, id});
        }

        const action = (e, state, name) => {
            e.preventDefault();
            e.stopPropagation();

            switch (state) {
                case 'new':
                    detailsRouter(name, {state})
                    break;
                case 'view':
                    let selectedItem = getSelectedItem();
                    detailsRouter(name, {state, id: selectedItem._id})
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
                        {collection.name !=='elements' && (<MyDownshift items={collection.members}
                                     selectionUpdate={this.selectionUpdate.bind(this)} />)}
                    </SearchBox>
                    {collection.name !=='elements' && (<ButtonBox>
                        <Button disabled={disabled}
                                onClick={e => action(e, 'view', collection.name)}>View</Button>
                        <Button onClick={e => action(e, 'new', collection.name)}>Add</Button>
                    </ButtonBox>)}
                    {collection.name ==='elements' && (<SingleButtonBox>
                        <Button onClick={e => action(e, 'new', collection.name)}>Add</Button>
                    </SingleButtonBox>)}
                  </Badge>
                )}
            </Container>
        );
    }
}
