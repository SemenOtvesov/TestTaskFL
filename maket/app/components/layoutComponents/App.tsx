import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import MainRoute from '../routes/mainRoute/index';
import '@maket/css/style.css';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainRoute />} />
            </Route>
        </Routes>
    );
};
