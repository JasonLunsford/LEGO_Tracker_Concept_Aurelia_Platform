import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.6);
    display:    ${props => props.show ? 'block' : 'none'};
    height:     100%;
    left:       0;
    position:   fixed;
    top:        0;
    width:      100%;
`;

export const ModalMain = styled.div`
    background: white;
    height:     350px;
    left:       50%;
    overflow:   scroll;
    padding:    10px;
    position:   fixed;
    top:        50%;
    transform:  translate(-50%,-50%);
    width:      auto;
`;

export const ButtonBox = styled.div`
    text-align: right;
    margin-top: 10px;
`;