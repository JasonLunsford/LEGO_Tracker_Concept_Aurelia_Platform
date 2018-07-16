import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, ModalMain} from './styles/modal.sc';
import {Button} from '../../global/styles/themes.sc';

export default class Modal extends Component {

    render() {
        const { handleClose, show, children } = this.props;

        return (
            <Container show={show}>
                <ModalMain>
                    {children}
                    <Button onClick={handleClose}>Close</Button>
                </ModalMain>
            </Container>
        );
    }
}
