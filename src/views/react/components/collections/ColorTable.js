import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, Cell} from './styles/collections.sc';

@observer export default class ColorTable extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = _.debounce(this.handleScroll, 250);
    }

    state = {
        counter: 100,
        lastScrollTop: 0
    }

    componentWillMount() {
        setMembers(this.props.members);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
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

    render() {
        const members = getFilteredMembers(this.state.counter);

        return (
            <Table>
                <Header>
                    <Cell thickleft><span>Name</span></Cell>
                    <Cell><span>RGB</span></Cell>
                    <Cell><span>Is Transparent?</span></Cell>
                    <Cell thickright><span>Sample</span></Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell thickleft><span>{member.name}</span></Cell>
                        <Cell><span>{member.rgb}</span></Cell>
                        <Cell><span>{member.is_trans ? 'Yes' : 'No'}</span></Cell>
                        <Cell thickright sample={'#'+member.rgb}></Cell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}