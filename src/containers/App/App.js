import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TemplatesEditPage from '../TemplatesEditPage';

import './App.style.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                Place to render components

                <Switch>
                    <Route path="/edit/:templateId" component={TemplatesEditPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
