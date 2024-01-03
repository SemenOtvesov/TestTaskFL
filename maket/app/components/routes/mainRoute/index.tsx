'use client';
import React from 'react';
import style from './style';
import Preview from './preview/index';
import Info from './info/index';
import Line from './line/index';
import RunLines from './runLines';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Preview />
            <Info />
            <Line />
            <RunLines />
        </Container>
    );
};
