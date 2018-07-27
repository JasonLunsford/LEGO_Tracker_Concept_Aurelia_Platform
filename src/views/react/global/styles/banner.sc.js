import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    display:       inline-flex;
    margin-bottom: 5px;
    padding:       0;
    width:         100%;
`;

export const Title = styled.h1`
    flex:        1 1 auto;
    font-size:   ${props => props.theme.fonts.xxlarge};
    font-weight: normal;
    margin:      0;
    padding:     10px 0;
    text-align:  center;
`;

export const Lego = styled.span`
    color:       ${props => props.theme.colors.orange};
    font-weight: bold;
`;
