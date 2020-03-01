import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Main from './pages/Main';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#2d2e37" />
            <Main />
        </>
    );
}
