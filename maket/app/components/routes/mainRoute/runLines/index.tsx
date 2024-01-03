'use client';
import { $orange, $yellow } from '@maket/#source/allStyled/colors';
import style from './style';
import React from 'react';

export default () => {
    const { OrangeLine, YellowRed } = style();
    return (
        <div>
            <OrangeLine style={{ backgroundColor: $orange }}>
                <span>успейте купить до конца октября 2023 года по Акции</span>
                <span>успейте купить до конца октября 2023 года по Акции</span>
                <span>успейте купить до конца октября 2023 года по Акции</span>
            </OrangeLine>
            <YellowRed style={{ backgroundColor: $yellow }}>
                <span>Ваши надежные инвестиции</span>
                <span>Ваши надежные инвестиции</span>
                <span>Ваши надежные инвестиции</span>
            </YellowRed>
        </div>
    );
};
