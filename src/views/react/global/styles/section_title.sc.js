import React, {Component} from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    margin:  0 0 10px 0px;
    padding: 0;
    width:   100%;
`;

export const Title = styled.p`
    font-size: ${props => props.theme.fonts.xlarge};
    margin:    0;
    padding:   0;
`;
