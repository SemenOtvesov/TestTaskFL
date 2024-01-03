import useWindowSizeCheck, { TwindowSize } from '@app/hooks/useWindowSizeCheck';
import styled from '@emotion/styled';
import { $orange } from '@maket/#source/allStyled/colors';
import posAbs from '@maket/#source/allStyled/posAbs';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            padding: size.isMobile ? '9rem 0' : '16rem 0',
            color: '#fff',
            backgroundColor: '#4E4E4E',
            fontFamily: 'Days One, sans-serif',
            gap: 20,
        }),
        Title: styled.div(TitleParams(size)),
        Text: styled.span(TextParams(size)),
        Background: styled.div({
            ...posAbs,
            zIndex: 0,
            '.loading-img': {
                backgroundColor: '#00000000',
            },
        }),
        size,
    };
};
function TitleParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        flex: '0 0 43%',
        width: '50%',
        fontSize: '2.68rem',
        textAlign: 'center',
        zIndex: 1,
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: '2rem' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: '1.5rem' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, fontSize: '1rem', width: '80%', marginTop: 10 };
    }
    return allStyle;
}
function TextParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        zIndex: 1,
        fontSize: '2rem',
        color: $orange,
        position: 'relative',

        '::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            backgroundColor: $orange,
            bottom: -1,
        },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: '1.5rem' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, fontSize: '0.9rem' };
    }
    return allStyle;
}
