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
        counter:       100,
        direction:     '',
        lastScrollTop: 0
    }

    componentWillMount() {
        _.map(this.props.members, member => {
            member.number = this.props.getElementNumber(member.element_num);
            member.color = this.props.getName(this.props.colors, member.color_id);
            member.piece = this.props.getName(this.props.pieces, member.piece_id);
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

    handleSort(key) {
        const members = this.props.members;
        const direction = this.state.direction;

        this.props.sortMe(key, direction, members);

        if (_.isEmpty(direction) || direction === 'down') {
            this.setState({direction: 'up'});
        } else {
            this.setState({direction: 'down'});
        }
    }

    render() {
        const members = getFilteredMembers(this.state.counter);

        return (
            <Table> 
                <Header>
                    <Cell thickleft><span>Number</span></Cell>
                    <Cell sortable
                          onClick={() => this.handleSort('piece')}>
                        <span>Piece</span>
                    </Cell>
                    <Cell sortable
                          onClick={() => this.handleSort('color')}>
                        <span>Color</span>
                    </Cell>
                    <Cell sortable
                          onClick={() => this.handleSort('num_sets')}>
                        <span>Number of Sets</span>
                    </Cell>
                    <Cell sortable
                          onClick={() => this.handleSort('num_usage')}>
                        <span>Number of Usages</span>
                    </Cell>
                    <Cell><span>Images</span></Cell>
                    <Cell thickright
                          sortable
                          onClick={() => this.handleSort('price')}>
                        <span>Price</span>
                    </Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell thickleft><span>{member.number}</span></Cell>
                        <Cell><span title={member.piece}>{member.piece}</span></Cell>
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