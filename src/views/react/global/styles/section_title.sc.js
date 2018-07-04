import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    display:         flex;
    flex-flow:       row nowrap;
    justify-content: space-between;
    margin:          0 0 10px 0px;
    padding:         0;
    width:           100%;
`;

export const Title = styled.p`
    flex:          0 1 auto;
    font-size:     ${props => props.theme.fonts.xlarge};
    margin:        0;
    padding:       0;
`;

export const Search = styled.div`
    align-items:     center;
    border:          ${props => props.theme.borders.default};
    display:         flex;
    flex:            0 1 auto;
    justify-content: space-evenly;
    margin:          0;
    padding:         0 5px;

    input {
        border:    0;
        font-size: ${props => props.theme.fonts.xlarge};

        &:focus {
            outline: none;
        }
    }

    i {
        padding-right: 5px;
    }
`;