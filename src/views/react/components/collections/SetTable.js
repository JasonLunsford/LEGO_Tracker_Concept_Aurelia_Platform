import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Table, Header, Body, SmallCell, I} from './styles/collections.sc';

export default class SetTable extends Component {

    componentWillMount() {
        _.map(this.props.members, member => {
            member.theme = this.getTheme(this.props.themes, member.theme_id);
            member.name = _.startCase(member.name);
            member.num_minifigs = this.getMinifigs(member.num_minifigs);
        });
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
        const { members, themes } = this.props;

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
                        <SmallCell thickright><I className="fas fa-external-link-alt"></I></SmallCell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}