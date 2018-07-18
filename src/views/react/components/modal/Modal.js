import React, {Component} from 'react';

import styled from 'styled-components';
import {Container, ModalMain, ButtonBox} from './styles/modal.sc';
import {Button} from '../../global/styles/themes.sc';

export default class Modal extends Component {

    render() {
        const { handleClose, show, children } = this.props;

        return (
            <Container show={show}>
                <ModalMain>
                    {children}
                    <ButtonBox>
                        <Button onClick={handleClose}>Close</Button>
                    </ButtonBox>
                </ModalMain>
            </Container>
        );
    }
}
