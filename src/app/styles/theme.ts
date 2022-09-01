import { Dark, Light, Typography_Media } from '../types/theme';

export const DarkTheme: Dark = {
    items_color: 'hsl(209, 23%, 22%)',
    background_color: 'hsl(207, 26%, 17%)',
    text_color: 'hsl(0, 0%, 100%)',
    input_color: 'hsl(0, 0%, 100%)',
};

export const LightTheme: Light = {
    text_color: 'hsl(200, 15%, 8%)',
    items_color: 'hsl(0, 0%, 100%)',
    background_color: 'hsl(0, 0%, 98%)',
    input_color: 'hsl(0, 0%, 100%)',
    box_shadow: '0px 9px 14px -4px rgba(66, 68, 90, 1)',
};

export const Typography: Typography_Media = {
    media: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    font_size: {
        homepage: 14,
        details: 16,
    },
};
