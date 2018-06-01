import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const DownshiftBox = styled.div`
    > div {
        height: 20px;

        div.inputBox {
            border:  1px solid black;
            padding: 2px 5px;
        }

        div.menuBox {
            background-color: white;
            border-left:      1px solid black;
            border-right:     1px solid black;
            border-bottom:    1px solid black;
            padding:          0;

            > div {
                padding: 0 5px;
            }
        }
    }
`;

export const Input = styled.input`
    border:    0;
    display:   block;
    font-size: 18px;
    height:    100%;
    margin:    0;
    padding:   0;
    width:     100%;

    &:focus {
        outline: none;
    }
`;
