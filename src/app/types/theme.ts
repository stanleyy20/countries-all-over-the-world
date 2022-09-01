export type Light = {
    text_color: string;
    items_color: string;
    background_color: string;
    input_color: string;
    box_shadow: string;
    border: string;
};

export type Dark = {
    text_color: string;
    items_color: string;
    background_color: string;
    input_color: string;
};

export type Typography_Media = {
    media: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };

    font_size: {
        homepage: number;
        details: number;
    };
};
