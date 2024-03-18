// import styles
import { styled } from 'styled-components';
import './CSS/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Years from './Pages/Years';
import { FaBars } from 'react-icons/fa';

const MainWrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    & > h3 {
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
    }
`;

const HeaderToggle = styled(FaBars)`
    position: absolute;
    top: 24px;
    left: 24px;
`;

function App() {
    return (
        <MainWrapper>
            <HeaderToggle />
            <h3>🐮처럼 벌고 🐶처럼 쓴다</h3>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/years/:years" element={<Years />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
