import React, {Component} from 'react';

import styled from 'styled-components';

const coreBorders = {
    default: '1px solid',
    thick:   '2px solid'
}

const coreColors = {
    black:  '#000000',
    blue:   '#6495ed',
    grey:   '#d3d3d3',
    orange: '#ff8c00',
    white:  '#ffffff'
}

const coreFonts = {
    small:   '10px',
    normal:  '12px',
    medium:  '18px',
    large:   '20px',
    xlarge:  '24px',
    xxlarge: '40px'
}

export const coreTheme = () => {
    return {
        borders: {
            default: `${coreBorders.default} ${coreColors.black}`,
            thick:   `${coreBorders.thick} ${coreColors.black}`,
        },
        colors: coreColors,
        buttons: {
            default: {
                background:   `${coreColors.white}`,
                border:       `${coreBorders.thick} ${coreColors.black}`,
                borderRadius: '4px',
                color:        `${coreColors.black}`,
                cursor:       'pointer',
                fontSize:     `${coreFonts.medium}`,
                padding:      '4px 8px',
                hover: {
                    background: `${coreColors.blue}`
                }
            },
            disabled: {
                background: `${coreColors.white}`,
                border:     `${coreBorders.thick} ${coreColors.grey}`,
                color:      `${coreColors.grey}`,
                cursor:     'default'
            }
        },
        fonts: coreFonts
    }
}
