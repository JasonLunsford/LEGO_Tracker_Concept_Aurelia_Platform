import React, {Component} from 'react';

import styled, {css} from 'styled-components';

export const Container = styled.div`
    border:  2px solid black;
    display: inline-flex;
    padding: 5px;
    width:   100%;
`;

export const Bar = styled.p`
    text-align:  ${props => props.right ? 'right' : 'left'};
    flex:        1 1 auto;
    font-size:   12px;
    margin:      0;
    padding:     0;
`;