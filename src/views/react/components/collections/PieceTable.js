import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, SmallCell} from './styles/collections.sc';

@observer export default class PieceTable extends Component {
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
            member.category = this.getCategory(this.props.categories, member.piece_cat_id);
            member.name = _.startCase(member.name);
        });

        setMembers(this.props.members);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    getCategory(categories, categoryId) {
        return _.chain(categories)
                .find(category => category.id === categoryId)
                .get('name')
                .value();
    }

    handleScroll() {
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
                    <SmallCell thickleft
                               sortable
                               onClick={() => this.handleSort('name')}>
                        <span>Name</span>
                    </SmallCell>
                    <SmallCell><span>Number</span></SmallCell>
                    <SmallCell sortable
                               onClick={() => this.handleSort('category')}>
                        <span>Category</span>
                    </SmallCell>
                    <SmallCell sortable
                               onClick={() => this.handleSort('year_from')}>
                        <span>Introduced</span>
                    </SmallCell>
                    <SmallCell sortable
                               onClick={() => this.handleSort('year_to')}>
                        <span>Ended</span>
                    </SmallCell>
                    <SmallCell sortable
                               onClick={() => this.handleSort('weight')}>
                        <span>Weight</span>
                    </SmallCell>
                    <SmallCell><span>Alternates</span></SmallCell>
                    <SmallCell><span>Molds</span></SmallCell>
                    <SmallCell thickright><span>Prints</span></SmallCell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <SmallCell thickleft><span title={member.name}>{member.name}</span></SmallCell>
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