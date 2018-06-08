import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 10px;
    width:         100%;
    z-index:       100;
`;

export const DownshiftBox = styled.div`
    > div {
        height: 30px;

        div.inputBox {
            align-items:     center;
            border:          ${props => props.theme.borders.default};
            display:         flex;
            justify-content: space-evenly;
            padding:         2px 5px;
        }

        div.menuBox {
            background-color: ${props => props.theme.colors.white};
            border-left:      ${props => props.theme.borders.default};
            border-right:     ${props => props.theme.borders.default};
            border-bottom:    ${props => props.theme.borders.default};
            padding:          0;

            > div {
                font-size: ${props => props.theme.fonts.medium};
                padding: 0 5px 0 23px;
            }
        }
    }
`;

export const I = styled.i`
    flex:    0 1 auto;
    margin:  0;
    padding: 0;
`;

export const Input = styled.input`
    border:    0;
    flex:      0 1 auto;
    font-size: ${props => props.theme.fonts.large};
    height:    100%;
    margin:    0;
    padding:   0 3px;
    width:     100%;

    &:focus {
        outline: none;
    }
`;
