import React, {Component} from 'react';

import styled, {css} from 'styled-components';

export const InfoContainer = styled.div`
    display:        inline-flex;
    margin-bottom:  10px;
    padding-top:    10px;
    padding-bottom: 10px;
    width:          100%;
`;

export const InfoHeader = styled.h3`
    text-align:  ${props => props.right ? 'right' : 'left'};
    flex:        1 1 auto;
    font-family: sans-serif;
    margin:      0;
    padding:     0;
`;