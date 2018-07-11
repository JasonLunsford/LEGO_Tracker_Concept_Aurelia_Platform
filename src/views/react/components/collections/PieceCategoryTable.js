import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, Cell} from './styles/collections.sc';

@observer export default class PieceCategoryTable extends Component {
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

    render() {
        const members = getFilteredMembers(this.state.counter);

        return (
            <Table>
                <Header>
                    <Cell long thickleft><span>Name</span></Cell>
                    <Cell long thickright><span>Piece Count</span></Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell long thickleft><span>{member.name}</span></Cell>
                        <Cell long thickright><span>{member.piece_count}</span></Cell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}