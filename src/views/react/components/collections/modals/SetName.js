import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Table, Cell, ModalBody, ModalImgCell, Img,
        ModalTitle, ModalHeader} from '../styles/collections.sc';

export default class SetName extends Component {

    render() {
        const { member } = this.props;

        return (
            <div>
                <ModalTitle>{member.name}</ModalTitle>
                <Table>
                    <ModalHeader>
                        <Cell noBottom><span>Image</span></Cell>
                        <Cell noBottom><span>Description</span></Cell>
                    </ModalHeader>
                    <ModalBody>
                        {member.set_img_urls.map((img, index) => 
                            <div key={index}>
                                <ModalImgCell center>
                                    <Img src={img.url}></Img>
                                </ModalImgCell>
                                <ModalImgCell>
                                    <span>{_.startCase(img.source)}</span>
                                </ModalImgCell>
                            </div>
                        )}
                    </ModalBody>
                </Table>
            </div>
        )
    }
}
