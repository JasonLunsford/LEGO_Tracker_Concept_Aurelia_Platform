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

export const Table = styled.table`
    thead {
        tr {
            border: ${props => props.theme.borders.thick};
            margin: 0 0 5px 0;
        }
    }

    tbody {
        border: ${props => props.theme.borders.thick};

        tr {
            border-bottom: ${props => props.theme.borders.thick};

            td {
                border-right: ${props => props.theme.borders.thick};
            }

            td:last-child {
                border-right: 0;
            }
        }
    }
`;