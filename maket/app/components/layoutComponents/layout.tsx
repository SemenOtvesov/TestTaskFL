import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import { TlayoutContext } from '@app/locTypes/context/layout';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};
