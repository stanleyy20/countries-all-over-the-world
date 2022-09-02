import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Countries } from './components/Countries';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { DarkTheme, LightTheme, Typography } from './styles/theme';

import { Dark, Light } from './types/theme';

import { CountryDetails } from './components/CountryDetails';

import './styles/theme.ts';

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

    const GlobalStyle = createGlobalStyle<{ theme: Dark | Light }>`
        body {
            background-color: ${({ theme }) => theme.background_color};
            font-family: 'Nunito Sans', sans-serif;
            min-height: 100vh;
            letter-spacing: 1px;
        }
    `;

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <div className='App'>
                <ThemeProvider theme={Typography}>
                    <Header themeToggler={themeToggler} witchModeIsActive={theme} />
                    <Routes>
                        <Route path='/' element={<Countries />} />
                        <Route path='/country/:countryCode' element={<CountryDetails />} />
                    </Routes>
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
