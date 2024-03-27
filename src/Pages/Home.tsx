import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        height: 100vh;
    }
`;

export const PageTitle = styled.h3`
    margin: 2rem auto;
    padding: 1rem 5rem;
    border-radius: 10px;
    font-size: 1.5rem;
    letter-spacing: 4px;
    font-style: italic;
    font-weight: bold;
    color: var(--accent-100);
    background-color: var(--accent-300);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 3.5rem auto;
    }
`;

const HomeWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 400px;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 50%;
        width: 100%;
        color: var(--accent-100);
        background-color: var(--accent-300);
        margin: 1rem;
        border-radius: 10px;
        text-decoration: none;
        font-size: 2rem;
        transition: 300ms opacity;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
        height: 65%;
    }
`;

export default function Home() {
    return (
        <PageWrapper>
            <PageTitle>Home</PageTitle>
            <HomeWrapper>
                <Link to="/years/2024">2024년</Link>
                <Link to="/years/2025">2025년</Link>
            </HomeWrapper>
        </PageWrapper>
    );
}
