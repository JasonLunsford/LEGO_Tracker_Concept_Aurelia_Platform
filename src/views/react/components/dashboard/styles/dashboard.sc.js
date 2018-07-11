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
    border:  ${props => props.theme.borders.thick};
    flex:    0 1 auto;
    height:  300px;
    margin:  0 20px 30px 0;
    padding: 5px;
    width:   250px;

    &:hover {
        border-color:     ${props => props.theme.colors.orange};
        cursor:           pointer;
    }
`;

export const Span = styled.span`
    flex: 1 1 auto;
`;

export const TitleBox = styled.div`
    display:        flex;
    flex-direction: column;
    margin:         0 0 20px 0;
    padding:        0;
`;

export const Title = styled.span`
    flex:       1 1 auto;
    font-size:  ${props => props.theme.fonts.large};
`;

export const LastUpdate = styled.span`
    flex:       1 1 auto;
    font-size:  ${props => props.theme.fonts.normal};
    font-style: italic;
`;

export const CountBox = styled.div`
    align-items:     center;
    border-bottom:   ${props => props.theme.borders.default};
    display:         flex;
    flex-direction:  column;
    justify-content: center;
    margin:          0 0 5px 0;
    padding:         0 0 5px 0;
`;

export const Count = styled.span`
    flex:       1 1 auto;
    font-size:  ${props => props.theme.fonts.xxlarge};
`;

export const SizeBox = styled.div`
    align-items:     center;
    display:         flex;
    justify-content: center;
    flex-direction:  column;
    margin-bottom:   10px;
    padding:         0;
`;

export const SearchBox = styled.div`
    display: flex;
`;

export const ButtonBox = styled.div`
    align-items:     center;
    display:         flex;
    justify-content: space-between;
    flex-direction:  row;
    margin-bottom:   10px;
    padding:         0;
    z-index:         0;
`;

export const SingleButtonBox = ButtonBox.extend`
    justify-content: flex-end;
    margin-top:      40px;
`;

export const Button = styled.button`
    border:        ${props => props.disabled 
                    ? props.theme.buttons.disabled.border 
                    : props.theme.buttons.default.border };
    border-radius: ${props => props.theme.buttons.default.borderRadius};
    color:         ${props => props.disabled 
                    ? props.theme.buttons.disabled.color 
                    : props.theme.buttons.default.color };
    cursor:        ${props => props.disabled 
                    ? props.theme.buttons.disabled.cursor 
                    : props.theme.buttons.default.cursor };
    flex:          0 1 auto;
    font-size:     ${props => props.theme.buttons.default.fontSize};
    padding:       ${props => props.theme.buttons.default.padding};

    &:hover {
        background: ${props => props.disabled 
            ? props.theme.buttons.disabled.background
            : props.theme.buttons.default.hover.background};
    }

    &:focus {
        outline: none;
    }
`;
