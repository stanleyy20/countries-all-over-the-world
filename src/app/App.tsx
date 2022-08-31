import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Countries } from './components/Countries';

import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme, Typography } from './styles/theme';

import './styles/theme.ts';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
    const initialTheme = localStorage.getItem('theme') || 'light';

    const [theme, setTheme] = useState(initialTheme);

    const themeToggler = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <div className='App'>
                <ThemeProvider theme={Typography}>
                    <Header themeToggler={themeToggler} witchModeIsActive={theme} />
                    <LoadingIndicator />
                    <Countries />
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
