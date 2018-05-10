import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    align-items:     start;
    display:         flex;
    flex-flow:       row wrap;
    justify-content: start;
    margin:          0;
    padding:         5px 2px 5px;
`;

export const Badge = styled.div`
    border:  1px solid black;
    flex:    0 1 auto;
    height:  200px;
    margin:  0 20px 30px 0;
    padding: 5px;
    width:   250px;
`;

export const Span = styled.span`
    flex:          1 1 auto;
    padding-right: 10px;
`;

export const TitleBox = styled.div`
    display:        flex;
    flex-direction: column;
    margin:         0 0 20px 0;
    padding:        0;
`;

export const Title = styled.span`
    flex:       1 1 auto;
    font-size:  20px;
`;

export const LastUpdate = styled.span`
    flex:       1 1 auto;
    font-size:  12px;
    font-style: italic;
`;

export const CountBox = styled.div`
    align-items:     center;
    border-bottom:   2px solid black;
    display:         flex;
    justify-content: center;
    flex-direction:  column;
    margin:          0 0 5px 0;
    padding:         0 0 5px 0;
`;

export const Count = styled.span`
    flex:       1 1 auto;
    font-size:  40px;
`;

export const SizeBox = styled.div`
    align-items:     center;
    display:         flex;
    justify-content: center;
    flex-direction:  column;
    padding:         0;
`;
