import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, SmallCell} from './styles/collections.sc';

@observer export default class PieceTable extends Component {

    componentWillMount() {
        _.map(this.props.members, member => {
            member.category = this.getCategory(this.props.categories, member.piece_cat_id);
            member.name = _.startCase(member.name);
        });

        setMembers(this.props.members);
    }

    getCategory(categories, categoryId) {
        return _.chain(categories)
                .find(category => category.id === categoryId)
                .get('name')
                .value();
    }

    render() {
        const members = getFilteredMembers();

        return (
            <Table>
                <Header>
                    <SmallCell thickleft><span>Name</span></SmallCell>
                    <SmallCell><span>Number</span></SmallCell>
                    <SmallCell><span>Category</span></SmallCell>
                    <SmallCell><span>Introduced</span></SmallCell>
                    <SmallCell><span>Ended</span></SmallCell>
                    <SmallCell><span>Weight</span></SmallCell>
                    <SmallCell><span>Alternates</span></SmallCell>
                    <SmallCell><span>Molds</span></SmallCell>
                    <SmallCell thickright><span>Prints</span></SmallCell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <SmallCell thickleft><span>{member.name}</span></SmallCell>
                        <SmallCell><span>{member.piece_num}</span></SmallCell>
                        <SmallCell><span>{member.category}</span></SmallCell>
                        <SmallCell><span>{member.year_from}</span></SmallCell>
                        <SmallCell><span>{member.year_to}</span></SmallCell>
                        <SmallCell><span>{member.weight}</span></SmallCell>
                        <SmallCell><span>[alternates]</span></SmallCell>
                        <SmallCell><span>[molds]</span></SmallCell>
                        <SmallCell thickright><span>[prints]</span></SmallCell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}