import React from 'react';
/** UI */
import { AppUI } from './AppUI';
import { ContextProvider } from '../components/Context';
/**CSS Stylesheets */
import './App.css';
import './mobile.css';
import './desktop.css';

function App() {
    return(
        <ContextProvider>
            <AppUI />
        </ContextProvider>
    )
}

export default App;