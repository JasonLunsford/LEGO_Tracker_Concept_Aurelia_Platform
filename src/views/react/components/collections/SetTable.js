import React, {Component} from 'react';

import styled from 'styled-components';
import {Table, Header, Body, Cell, Sample} from './styles/collections.sc';

export default class SetTable extends Component {

    render() {
        const { members } = this.props;

        return (
            <Table> 
                <Header>
                    <Cell thickleft><span>Name</span></Cell>
                    <Cell><span>Set Number</span></Cell>
                    <Cell><span>Year</span></Cell>
                    <Cell><span>Theme</span></Cell>
                    <Cell><span>Pieces</span></Cell>
                    <Cell><span>Spares</span></Cell>
                    <Cell><span>Minifigs</span></Cell>
                    <Cell><span>Members</span></Cell>
                    <Cell><span>Gear</span></Cell>
                    <Cell><span>Build Sources</span></Cell>
                    <Cell thickright><span>View</span></Cell>
                </Header>
                <Body>
                {members.map((member, index) => 
                    <div key={index}>
                        <Cell thickleft><span>{member.name}</span></Cell>
                    </div>
                )}
                </Body>
            </Table>
        );
    }
}