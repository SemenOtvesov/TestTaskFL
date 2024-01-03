import useWindowSizeCheck from '@app/hooks/useWindowSizeCheck';
import styled from '@emotion/styled';
import { $orange } from '@maket/#source/allStyled/colors';
import posAbs from '@maket/#source/allStyled/posAbs';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            justifyContent: size.isMobile || size.isTab ? 'center' : 'flex-end',
            position: 'relative',
            color: '#fff',
        }),
        Left: styled.div({
            flex: size.isTab ? '0 0 90%' : size.isMobile ? '0 0 100%' : '0 0 55%',
            zIndex: 1,

            display: 'flex',
            flexDirection: 'column',
            gap: size.isDesktop ? 40 : 20,
            padding: size.isDesktop ? '2rem 0' : size.isMobile ? '1.5rem' : '1rem 0',
        }),
        Title: styled.div({
            fontFamily: 'Days One, sans-serif',
            fontSize: size.isDesktop ? '1.375rem' : size.isLaptop ? '1.125rem' : '1rem',
            textTransform: 'uppercase',
        }),
        InfoBox: styled.div({
            display: 'flex',
            borderLeft: `2px solid ${$orange}`,
            borderRight: `2px solid ${$orange}`,
            width: 'fit-content',
            margin: size.isMobile || size.isTab ? '0 auto' : 0,
        }),
        Info: styled.div({
            borderRight: `2px solid ${$orange}`,
            padding: size.isMobile ? '0.5rem' : '0.5rem 3rem 1.25rem',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: size.isMobile ? 8 : 15,

            maxWidth: '20rem',
            fontWeight: 500,

            ':nth-last-child(1)': {
                border: 'none',
            },
        }),
        Right: styled.div({
            flex: '0 0 36%',
            zIndex: 1,
            position: 'relative',
            display: size.isMobile || size.isTab ? 'none' : 'block',
        }),
        ImageBox: styled.div({
            position: 'absolute',
            bottom: '-10%',
            right: 0,
            height: '150%',
            ':after': {
                content: '""',
                position: 'absolute',
                width: size.isLaptop ? '25rem ' : '31.125rem',
                left: size.isLaptop ? '10%' : 0,
                top: size.isLaptop ? '10%' : '-10%',
                aspectRatio: '1/0.6',
                backgroundColor: $orange,
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: -1,
            },
        }),
        InfoTitle: styled.div({
            fontSize: size.isDesktop ? '1.75rem' : size.isMobile ? '1rem' : '1.25rem',
            span: {
                fontSize: size.isDesktop ? '2.5rem' : size.isMobile ? '1.25rem' : '1.75rem',
                color: $orange,
                textTransform: 'uppercase',
            },
        }),
        InfoText: styled.div({
            fontSize: size.isDesktop ? '1.125rem' : size.isMobile ? '0.6rem' : '1rem',
            textTransform: 'uppercase',
            textAlign: 'center',
        }),
        Background: styled.div({
            ...posAbs,
            zIndex: 0,
        }),
        size,
    };
};
