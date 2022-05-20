import { ReactNode } from 'react';

// import { Container } from './styles';

const RenderIf = ({ children, isTrue }: { children: ReactNode, isTrue: boolean }) => {
    return (
        <>
            {isTrue ? children : undefined}
        </>
    );
}

export default RenderIf;