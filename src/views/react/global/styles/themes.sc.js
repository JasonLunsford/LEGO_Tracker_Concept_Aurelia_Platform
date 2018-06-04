import React, {Component} from 'react';

import styled from 'styled-components';

const coreColors = {
    black:  '#000000',
    orange: '#ff8c00',
    blue:   '#6495ed'
}

const coreButtons = {}

const coreFonts = {}

export const coreTheme = () => {
    return {
        borders: {
            default: '1px solid ' + coreColors.black,
            thick:   '2px solid ' + coreColors.black
        },
        colors: coreColors,
        buttons: coreButtons,
        fonts: coreFonts
    }
}