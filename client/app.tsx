import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Header from './Editor/Header';
import MainPanel from './Editor/MainPanel';
import Properties from './Editor/Properties';
import Selection from './Editor/Selection';


const App = () =>{
    return (
        <Provider store={store}>
            <Header key="header"/>
            <MainPanel key="main"/>
            <Properties key="main"/>
            <Selection key="main"/>
        </Provider>
    )
}
export default App;
