import useWindowSizeCheck from '@app/hooks/useWindowSizeCheck';
import styled from '@emotion/styled';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile || size.isTab ? '2rem' : '5.3rem',
        }),
        size,
    };
};
