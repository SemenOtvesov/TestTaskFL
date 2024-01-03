import useWindowSizeCheck, { TwindowSize } from '@app/hooks/useWindowSizeCheck';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        OrangeLine: styled.div(LineParams('orange', size)),
        YellowRed: styled.div(LineParams('yellow', size)),
        size,
    };
};
function LineParams(type: 'orange' | 'yellow', size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        gap: size.isMobile || size.isTab ? 30 : 50,
        padding: size.isMobile ? '10px' : '15px',
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: size.isDesktop ? '1.5rem' : size.isMobile ? '0.75rem' : '1rem',
        fontFamily: 'Days One, sans-serif',
        marginBottom: size.isMobile ? 7 : 0,
    };
    if (type === 'orange') {
        allStyle = { ...allStyle, transform: 'translate(-5%)', minWidth: '110%', width: '150em' };
    }
    if (type === 'yellow') {
        allStyle = {
            ...allStyle,
            justifyContent: size.isMobile || size.isTab ? '' : 'space-around',
            transform: size.isMobile || size.isTab ? 'translate(-5%)' : '',
            minWidth: size.isMobile || size.isTab ? '110%' : '100%',
            width: size.isMobile || size.isTab ? '150em' : '100%',
        };
    }

    return allStyle;
}
