import React, {Component} from 'react';

import _ from 'lodash';

import styled from 'styled-components';
import {Table, Cell, ModalCell, ModalBody, ModalImgCell, Img,
        ModalTitle, ModalHeader} from '../styles/collections.sc';

export default class SetPiece extends Component {

    getPieces() {
        const props = this.props;

        let results = [];

        if (_.isEmpty(props.member.set_pieces)) {
            return [];
        }

        _.forEach(props.member.set_pieces, piece => {
            if (piece.is_spare === props.showSpares) {
                results.push({
                    color:    props.getName(props.colors, piece.color_id),
                    element:  props.getNumber(props.elements, piece.element_id) || 'unknown',
                    name:     props.getName(props.pieces, piece.piece_id),
                    number:   props.getNumber(props.pieces, piece.piece_id),
                    quantity: piece.quantity,
                    weight:   props.getWeight(props.pieces, piece.piece_id)
                });
            }
        });

        return results;
    }

    render() {
        const { member } = this.props;
        const pieces = this.getPieces();

        return (
            <div>
                <ModalTitle>{member.name}</ModalTitle>
                <Table>
                    <ModalHeader>
                        <Cell noBottom><span>Name</span></Cell>
                        <Cell noBottom><span>Piece Number</span></Cell>
                        <Cell noBottom><span>Element Number</span></Cell>
                        <Cell noBottom><span>Color</span></Cell>
                        <Cell noBottom><span>Quantity</span></Cell>
                        <Cell noBottom><span>Weight</span></Cell>
                    </ModalHeader>
                    <ModalBody>
                        {pieces.map((piece, index) => 
                            <div key={index}>
                                <ModalCell>
                                    <span title={piece.name}>{piece.name}</span>
                                </ModalCell>
                                <ModalCell>
                                    <span>{piece.number}</span>
                                </ModalCell>
                                <ModalCell>
                                    <span>{piece.element}</span>
                                </ModalCell>
                                <ModalCell>
                                    <span>{piece.color}</span>
                                </ModalCell>
                                <ModalCell>
                                    <span>{piece.quantity}</span>
                                </ModalCell>
                                <ModalCell>
                                    <span>{piece.weight}</span>
                                </ModalCell>
                            </div>
                        )}
                    </ModalBody>
                </Table>
            </div>
        )
    }
}
