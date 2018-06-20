import React, {Component} from 'react';

import styled, {injectGlobal} from 'styled-components';

export const Container = styled.div`
    display:        flex;
    flex-direction: column;
    margin:         0;
    padding:        0;
    width:          100%;

    > * {
        flex: 1 1 auto;
    }
`;

export const InjectBody = () => {
    injectGlobal`
      body {
        cursor:      default;
        font-family: 'raleway', sans-serif;
        margin:      0;
        padding:     0 10px;
      }
    `;
}