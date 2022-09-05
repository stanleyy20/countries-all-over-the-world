import { TailSpin } from 'react-loader-spinner';

type LoadingIndicatorProps = {
    isLoading: boolean;
};

const LoadingIndicator: React.FunctionComponent<LoadingIndicatorProps> = ({ isLoading }) => {
    if (isLoading)
        return (
            <div
                style={{
                    position: 'absolute',
                    marginTop: '30px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 0,
                }}>
                <TailSpin color='#ff3d4f' height={80} width={80} />
            </div>
        );
    else return null;
};

export default LoadingIndicator;
