import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const DownshiftBox = styled.div`
    > div {
        border:         1px solid black;
        height:         20px;
        padding-top:    2px;
        padding-bottom: 2px;

        div.inputBox {
            padding: 0px 5px;
        }

        div.menuBox {
            margin-top: 3px;
            padding:    0;

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

export const Row = styled.div`
    background-color: white;

    &:hover {
        background-color: lightgray;
    }
`;
