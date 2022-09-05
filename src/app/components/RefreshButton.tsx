import styled from 'styled-components';

type RefreshButtonProps = {
    refresh: (endpoint: string) => void;
    endpoint?: string;
};

export const RefreshButton: React.FunctionComponent<RefreshButtonProps> = ({
    refresh,
    endpoint,
}) => {
    return (
        <Container>
            <Text>Something went wrong...</Text>
            <Button
                onClick={() => {
                    if (!endpoint) return;
                    refresh(endpoint);
                }}>
                Try again
            </Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.items_color};
    color: ${({ theme }) => theme.text_color};
    font-size: ${({ theme }) => theme.font_size.details}px;
    border: none;
    border-radius: 6px;
    padding: 10px 30px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.box_shadow};
    width: 60%;
`;

const Text = styled.h3`
    font-size: 25px;
`;
