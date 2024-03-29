import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
// import styles
import './CSS/index.css';
// import components
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
