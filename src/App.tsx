import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {HashRouter} from "react-router-dom";
import {Header} from "./Header/Header";
import {Pages} from "./pages/Pages";


export const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                    <Pages />
                </HashRouter>
            </Provider>
        </div>
    );
}

