import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import styled from 'styled-components';
import {Table, Header, Body, Cell} from './styles/collections.sc';

@observer export default class PieceCategoryTable extends Component {

    componentWillMount() {
        _.map(this.props.members, member => {
            member.name = _.startCase(member.name);
        });

        setMembers(this.props.members);
    }

    render() {
        const members = getFilteredMembers();

        return (
            <Table>
                <Header>
                    <Cell thickleft><span>Name</span></Cell>
                    <Cell thickright><span>Piece Count</span></Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell thickleft><span>{member.name}</span></Cell>
                        <Cell thickright><span>{member.piece_count}</span></Cell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}