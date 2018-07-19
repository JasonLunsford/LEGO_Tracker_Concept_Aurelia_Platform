import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    margin:  0;
    padding: 5px 0;
`;

export const H2 = styled.h2`
    margin:     20px 0 0 0;
    padding:    0;
    text-align: center;
    width:      100%;
`;

 export const Link = styled.span`
    color:  ${props => props.theme.colors.blue};
    cursor: pointer;
 `;

export const Table = styled.div`
    align-items:     start;
    display:         flex;
    flex-direction:  column;
    justify-content: start;
    width:           100%
`;

export const Header = styled.div`
    border:    ${props => props.theme.borders.default};
    display:   flex;
    flex:      0 1 auto;
    flex-flow: row nowrap;
    margin:    0 0 10px 0;
    width:     100%;
`;

export const Body = styled.div`
    border:         ${props => props.theme.borders.default};
    display:        flex;
    flex:           0 1 auto;
    flex-direction: column;
    margin:         0;
    width:          100%;

    > div {
        display:   flex;
        flex-flow: row nowrap;
        height:    30px;
        width:     100%;
    }
`;

export const Cell = styled.div`
    align-items:      center;
    background-color: ${props => props.sample};
    border:           ${props => props.theme.borders.default};
    border-left:      ${props => props.thickLeft ? props.theme.borders.thick : props.theme.borders.default};
    border-right:     ${props => props.thickRight ? props.theme.borders.thick : props.theme.borders.default};
    border-bottom:    ${props => props.noBottom ? '0px' : props.theme.borders.default};
    cursor:           ${props => props.sortable ? 'pointer' : 'default' };
    display:          flex;
    flex:             1 1 0;
    height:           30px;

    span {
        overflow:      hidden;
        padding-left:  5px;
        text-overflow: ellipsis;
        white-space:   nowrap;
        width:         ${props => props.long ? '100%' : '180px'};
    }
`;

export const SmallCell = Cell.extend`
    span {
        width: 89px;
    }
`;

export const ViewIcon = styled.i`
    display:         flex !important;
    flex:            1 1 0;
    justify-content: center;
    margin:          0;
    padding:         0;
`;

export const ModalHeader = Header.extend`
    border-bottom: 0;
    margin:        0;
`;

export const ModalBody = Body.extend`
    > div {
        display:   flex;
        flex-flow: row nowrap;
        height:    100%;
        width:     100%;
    }
`;

export const ModalCell = Cell.extend`
    display:         flex;
    height:          100%;
    justify-content: start
    padding:         5px 0;
`;

export const ModalImgCell = ModalCell.extend`
    justify-content: ${props => props.center ? 'center' : 'start' };
    min-height:      100px;
`;

export const ModalTitle = styled.p`
    font-size:   24px;
    font-weight: bold;
    margin:      0 0 10px 0;
    padding:     0;
`;

export const Img = styled.img`
    height: 100px;
`;

