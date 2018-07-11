import React, {Component} from 'react';

import _ from 'lodash';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, SmallCell, Cell} from './styles/collections.sc';

@observer export default class ElementTable extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = _.debounce(this.handleScroll, 250);
    }

    state = {
        counter: 100,
        lastScrollTop: 0
    }

    componentWillMount() {
        _.map(this.props.members, member => {
            member.number = this.getElementNumber(member.element_num);
            member.color = this.getColor(this.props.colors, member.color_id);
            member.piece = this.getPiece(this.props.pieces, member.piece_id);
        });

        setMembers(this.props.members);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scrollTop = window.scrollY;

        if (scrollTop > this.state.lastScrollTop) {
            let start = this.state.counter;
            this.setState({
                counter: start + 100,
                lastScrollTop: scrollTop <= 0 ? 0 : scrollTop
            });
        }
    }

    getColor(colors, colorId) {
        return _.chain(colors)
                .find(color => color.id === colorId)
                .get('name')
                .startCase()
                .value();
    }

    getPiece(pieces, pieceId) {
        return _.chain(pieces)
                .find(piece => piece.id === pieceId)
                .get('name')
                .startCase()
                .value();
    }

    getElementNumber(number) {
        if (_.isNil(number) || _.isEmpty(number)) {
            return 'unknown';
        }

        return number;
    }

    render() {
        const members = getFilteredMembers(this.state.counter);

        return (
            <Table> 
                <Header>
                    <Cell thickleft><span>Number</span></Cell>
                    <Cell><span>Piece</span></Cell>
                    <Cell><span>Color</span></Cell>
                    <Cell><span>Number of Sets</span></Cell>
                    <Cell><span>Number of Usages</span></Cell>
                    <Cell><span>Images</span></Cell>
                    <Cell thickright><span>Price</span></Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell thickleft><span>{member.number}</span></Cell>
                        <Cell><span>{member.piece}</span></Cell>
                        <Cell><span>{member.color}</span></Cell>
                        <Cell><span>{member.num_sets}</span></Cell>
                        <Cell><span>{member.num_usage}</span></Cell>
                        <Cell><span>[images]</span></Cell>
                        <Cell thickright><span>{member.price}</span></Cell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}