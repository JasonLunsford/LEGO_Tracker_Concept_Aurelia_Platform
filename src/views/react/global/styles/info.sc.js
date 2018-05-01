import React, {Component} from 'react';

import styled, {css} from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    padding: 0;
    width:   100%;
`;

export const Bar = styled.p`
    border-left:   ${props => props.right ? '0' : '2px solid black'};
    border-right:  ${props => props.right ? '2px solid black' : '0'};
    text-align:    ${props => props.right ? 'right' : 'left'};
    border-top:    2px solid black;
    border-bottom: 2px solid black;
    flex:          1 1 auto;
    font-size:     12px;
    margin:        0;
    padding:       5px;
`;