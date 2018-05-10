import React, {Component} from 'react';

import styled from 'styled-components';

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
