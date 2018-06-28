import React, {Component} from 'react';

import styled from 'styled-components';
import {Table, Header, Body, Cell, Sample} from './styles/collections.sc';

export default class ColorTable extends Component {

    render() {
        const { members } = this.props;

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