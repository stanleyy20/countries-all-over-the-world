import { Header } from './components/Header';
import './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { DarkTheme, LightTheme, Typography } from './styles/theme';

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <div className='App'>
                <ThemeProvider theme={Typography}>
                    <Header themeToggler={themeToggler} witchModeIsActive={theme} />
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
