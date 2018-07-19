import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Table, Cell, ModalBody, ModalCell,
        ModalTitle, ModalHeader} from '../styles/collections.sc';

export default class SetNumber extends Component {

    render() {
        const { member } = this.props;
        let set_nums = [member.set_num];

        if (member.alt_set_nums.length >= 1) {
            set_nums = [set_nums, ...member.alt_set_nums];
        }

        return (
            <div>
                <ModalTitle>{member.name}</ModalTitle>
                <Table>
                    <ModalHeader>
                        <Cell noBottom><span>Set Number</span></Cell>
                    </ModalHeader>
                    <ModalBody>
                        {set_nums.map((num, index) => 
                            <div key={index}>
                                <ModalCell>
                                    <span>{num}</span>
                                </ModalCell>
                            </div>
                        )}
                    </ModalBody>
                </Table>
            </div>
        )
    }
}
