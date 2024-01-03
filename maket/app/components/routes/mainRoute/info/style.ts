import useWindowSizeCheck, { TwindowSize } from '@app/hooks/useWindowSizeCheck';
import styled from '@emotion/styled';
import { $black, $orange } from '@maket/#source/allStyled/colors';
import posAbs from '@maket/#source/allStyled/posAbs';
import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            margin: '0 auto',
            width: size.isMobile ? '90%' : '80%',
            color: $black,
        }),
        Title: styled.div({
            fontSize: size.isDesktop ? '1.75rem' : size.isMobile ? '1rem' : '1.5rem',
            fontWeight: 700,
            fontFamily: 'Days One, sans-serif',
            marginBottom: size.isMobile ? '30px' : '75px',
            width: size.isDesktop ? '50%' : '70%',
        }),
        Main: styled.div(MainParams(size)),
        Left: styled.div({
            flex: '0 0 50%',
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile || size.isTab ? '2rem' : '5rem',
            marginBottom: size.isMobile || size.isTab ? '2rem' : 0,
        }),
        Right: styled.div({
            flex: '0 0 50%',
            display: 'flex',
            justifyContent: size.isMobile || size.isTab ? 'start' : 'end',
            alignItems: 'center',
        }),
        Item: styled.div({
            width: '80%',
            aspectRatio: '2/1',
            position: 'relative',
        }),
        Text: styled.div({ ...cardText(size) }),
        ItemText: styled.div({
            ...posAbs,
            top: '35%',
            left: size.isMobile || size.isTab ? '24%' : '53%',
            height: 'fit-content',
            minHeight: '70%',
            width: '86%',

            display: 'flex',
            alignItems: 'center',
            ...cardText(size),
        }),
        size,
    };
};
function MainParams(size: TwindowSize): any {
    let allStyle: SxProps = { display: 'flex' };
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, flexDirection: 'column' };
    }
    return allStyle;
}
function cardText(size: TwindowSize) {
    let allStyle: CSSProperties = {
        backgroundColor: '#ffffffda',
        padding: 30,
        border: `1px solid ${$orange}`,
        borderLeft: `4px solid ${$black}`,
        fontSize: '1.25rem',
        fontWeight: 500,
    };
    if (size.isLaptop) {
        allStyle = { ...allStyle, fontSize: '1rem', padding: '20px' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, fontSize: '0.7rem', padding: '10px', width: '100%' };
    }
    return allStyle;
}
