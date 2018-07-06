import React, {Component} from 'react';

import _ from 'lodash';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, SmallCell} from './styles/collections.sc';

@observer export default class ElementTable extends Component {

    componentWillMount() {
        _.map(this.props.members, member => {
            member.theme = this.getTheme(this.props.themes, member.theme_id);
            member.name = _.startCase(member.name);
            member.num_minifigs = this.getMinifigs(member.num_minifigs);
        });

        setMembers(this.props.members);
    }

    getColor(colors, colorId) {
        return _.chain(colors)
                .find(color => color.id === colorId)
                .get('name')
                .value();
    }

    getPiece(pieces, pieceId) {
        return _.chain(pieces)
                .find(piece => piece.id === pieceId)
                .get('name')
                .value();
    }

    render() {
        const members = getFilteredMembers();

        return (
            <Table> 
                <Header>
                    <SmallCell thickleft><span>Number</span></SmallCell>
                    <SmallCell><span>Piece</span></SmallCell>
                    <SmallCell><span>Color</span></SmallCell>
                    <SmallCell><span>Number of Sets</span></SmallCell>
                    <SmallCell><span>Number of Usages</span></SmallCell>
                    <SmallCell><span>Images</span></SmallCell>
                    <SmallCell thickright><span>Price</span></SmallCell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <SmallCell thickleft><span>{member.element_num}</span></SmallCell>
                        <SmallCell><span>{member.piece}</span></SmallCell>
                        <SmallCell><span>{member.color}</span></SmallCell>
                        <SmallCell><span>{member.num_sets}</span></SmallCell>
                        <SmallCell><span>{member.num_usage}</span></SmallCell>
                        <SmallCell><span>[images]</span></SmallCell>
                        <SmallCell thickright><span>{member.price}</span></SmallCell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}