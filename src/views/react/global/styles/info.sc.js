import React, {Component} from 'react';

import styled, {css} from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    padding: 0;
    width:   100%;
`;

export const Bar = styled.p`
    border-left:   ${props => props.right ? '0' : props.theme.borders.thick};
    border-right:  ${props => props.right ? props.theme.borders.thick : '0'};
    text-align:    ${props => props.right ? 'right' : 'left'};
    border-top:    ${props => props.theme.borders.thick};
    border-bottom: ${props => props.theme.borders.thick};
    flex:          1 1 auto;
    font-size:     ${props => props.theme.fonts.normal};
    margin:        0;
    padding:       5px;
`;

 export const Span = styled.span`
    color:  ${props => props.theme.colors.blue};
    cursor: pointer;
 `;