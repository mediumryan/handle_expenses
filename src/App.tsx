// import styles
import { styled } from 'styled-components';
import './CSS/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Years from './Pages/Years';

const MainWrapper = styled.main``;

function App() {
    return (
        <MainWrapper>
            <header></header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/years/:years" element={<Years />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
