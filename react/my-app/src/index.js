import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CardProvider } from './ContextSample/CardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CardProvider>

        <BrowserRouter>

            <App></App>
        
        </BrowserRouter>


    </CardProvider>

    
    
);

