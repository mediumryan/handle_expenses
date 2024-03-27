import { styled } from 'styled-components';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import styles
import './CSS/index.css';
// import pages
import Home from './Pages/Home';
import Years from './Pages/Years';
import Month from './Pages/Month';
// import icons
import { FaBars } from 'react-icons/fa';

const MainWrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    & > h3 {
        cursor: pointer;
        width: 50%;
        margin: 2rem auto 0.5rem auto;
        padding: 1rem 5rem;
        border-radius: 10px;
        font-size: 1.5rem;
        letter-spacing: 4px;
        font-style: italic;
        font-weight: bold;
        text-align: center;
        color: var(--accent-100);
        background-color: var(--accent-300);
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        transition: 300ms box-shadow;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
        }
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
            margin-top: 3.5rem;
        }
    }
`;

const HeaderToggle = styled(FaBars)`
    position: absolute;
    top: 24px;
    left: 24px;
`;

function App() {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <HeaderToggle />
            <h3
                onClick={() => {
                    navigate('/');
                }}
            >
                🐮처럼 벌고 🐶처럼 쓴다
            </h3>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/years/:year" element={<Years />} />
                <Route path="/:year/:month" element={<Month />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
