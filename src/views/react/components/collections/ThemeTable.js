import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, Cell} from './styles/collections.sc';

@observer export default class ThemesTable extends Component {

    componentWillMount() {
        _.map(this.props.members, member => {
            member.name = _.startCase(member.name);
            member.parent_name = this.getParentName(member.parent_name);
        });

        setMembers(this.props.members);
    }

    getParentName(parent) {
        if (_.isNil(parent) || _.isEmpty(parent)) {
            return 'No Parent';
        }

        return _.startCase(parent);
    }

    render() {
        const members = getFilteredMembers();

        return (
            <Table>
                <Header>
                    <Cell thickleft><span>Name</span></Cell>
                    <Cell><span>Parent Theme</span></Cell>
                    <Cell><span>Set Count</span></Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell thickleft><span>{member.name}</span></Cell>
                        <Cell><span>{member.parent_name}</span></Cell>
                        <Cell thickright><span>{member.set_count}</span></Cell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}