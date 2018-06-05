import React, {Component} from 'react';

import styled from 'styled-components';

const coreColors = {
    black:  '#000000',
    blue:   '#6495ed',
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
            default: '1px solid ' + coreColors.black,
            thick:   '2px solid ' + coreColors.black
        },
        colors: coreColors,
        buttons: {},
        fonts: coreFonts
    }
}