import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const DownshiftBox = styled.div`
    > div {
        border: 1px solid black;
        height: 20px;
        padding: 2px 5px;

        > div {
            margin-top: 3px;
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