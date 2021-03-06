import React, {Component} from 'react';

import _ from 'lodash';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, SmallCell, ViewIcon} from './styles/collections.sc';

@observer export default class SetTable extends Component {
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
            member.theme = this.getTheme(this.props.themes, member.theme_id);
            member.name = _.startCase(member.name);
            member.num_minifigs = this.getMinifigs(member.num_minifigs);
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

    getTheme(themes, themeId) {
        return _.chain(themes)
                .find(theme => theme.id === themeId)
                .get('name')
                .value();
    }

    getMinifigs(minifigs) {
        if (_.isNil(minifigs) || _.isEmpty(minifigs)) {
            return '0';
        }

        return minifigs;
    }

    render() {
        const members = getFilteredMembers(this.state.counter);

        return (
            <Table> 
                <Header>
                    <SmallCell thickleft><span>Name</span></SmallCell>
                    <SmallCell><span>Set Number</span></SmallCell>
                    <SmallCell><span>Year</span></SmallCell>
                    <SmallCell><span>Theme</span></SmallCell>
                    <SmallCell><span>Pieces</span></SmallCell>
                    <SmallCell><span>Spares</span></SmallCell>
                    <SmallCell><span>Minifigs</span></SmallCell>
                    <SmallCell><span>Members</span></SmallCell>
                    <SmallCell><span>Gear</span></SmallCell>
                    <SmallCell><span>Builds</span></SmallCell>
                    <SmallCell thickright><span>View</span></SmallCell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <SmallCell thickleft><span title={member.name}>{member.name}</span></SmallCell>
                        <SmallCell><span>{member.set_num}</span></SmallCell>
                        <SmallCell><span>{member.year}</span></SmallCell>
                        <SmallCell><span title={member.theme}>{member.theme}</span></SmallCell>
                        <SmallCell><span>{member.num_pieces}</span></SmallCell>
                        <SmallCell><span>{member.num_spares}</span></SmallCell>
                        <SmallCell><span>{member.num_minifigs}</span></SmallCell>
                        <SmallCell><span>[members]</span></SmallCell>
                        <SmallCell><span>{member.has_gear ? 'Yes' : 'No'}</span></SmallCell>
                        <SmallCell><span>[build_urls]</span></SmallCell>
                        <SmallCell thickright><ViewIcon className="fas fa-external-link-alt"></ViewIcon></SmallCell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}