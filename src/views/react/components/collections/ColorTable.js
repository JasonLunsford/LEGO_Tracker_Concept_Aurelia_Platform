import React, {Component} from 'react';

import styled from 'styled-components';
import {Table} from './styles/collections.sc';

export default class ColorTable extends Component {

    render() {
        const { members } = this.props;

        return (
            <Table> 
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>RGB</td>
                        <td>Is Transparent?</td>
                        <td>Sample</td>
                    </tr>
                </thead>
                <tbody>
                {members.map((member, index) => 
                    <tr key={index}>
                        <td>{member.name}</td>
                        <td>{member.rgb}</td>
                        <td>{member.is_trans ? 'Yes' : 'No'}</td>
                        <td><div></div></td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }
}