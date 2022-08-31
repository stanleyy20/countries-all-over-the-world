import { Header } from './components/Header';
import './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { DarkTheme, LightTheme, Typography } from './styles/theme';

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
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
