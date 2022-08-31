import React from 'react';

import { useTranslation } from '../hooks/useTranslator';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as moonRegular } from '@fortawesome/free-regular-svg-icons';
import { faMoon as moonSolid } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
    themeToggler: () => void;
    witchModeIsActive: string;
};

export const Header: React.FunctionComponent<HeaderProps> = ({
    themeToggler,
    witchModeIsActive,
}) => {
    const T = useTranslation();
    const { title } = T.components.header;

    const buttonProperties =
        witchModeIsActive === 'light'
            ? {
                  icon: moonRegular,
                  color: 'black',
                  text: 'Dark Mode',
              }
            : {
                  icon: moonSolid,
                  color: 'yellow',
                  text: 'Light Mode',
              };

    const { color, icon, text } = buttonProperties;

    return (
        <Container>
            <MainContent>
                <Title>{title}</Title>
                <ThemeModeButton onClick={() => themeToggler()}>
                    <FontAwesomeIcon icon={icon} color={color} size='lg' /> {text}
                </ThemeModeButton>
            </MainContent>
        </Container>
    );
};

const Container = styled.div`
    width: 100wv;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.items_color};
`;

const MainContent = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 25px;

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        width: 70%;
    }
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.text_color};
`;

const ThemeModeButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text_color};
    font-size: 13px;
`;
