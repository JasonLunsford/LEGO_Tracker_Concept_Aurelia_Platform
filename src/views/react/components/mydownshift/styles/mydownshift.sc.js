import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

export const DownshiftBox = styled.div`
    > div {
        height: 30px;

        div.inputBox {
            border:  ${props => props.theme.borders.default};
            padding: 2px 5px;
        }

        div.menuBox {
            background-color: ${props => props.theme.colors.white};
            border-left:      ${props => props.theme.borders.default};
            border-right:     ${props => props.theme.borders.default};
            border-bottom:    ${props => props.theme.borders.default};
            padding:          0;
            z-index:          100;

            > div {
                font-size: ${props => props.theme.fonts.medium};
                padding: 0 5px;
            }
        }
    }
`;

export const Input = styled.input`
    border:    0;
    display:   block;
    font-size: ${props => props.theme.fonts.large};
    height:    100%;
    margin:    0;
    padding:   0;
    width:     100%;

    &:focus {
        outline: none;
    }
`;
