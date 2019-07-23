import React from "react";
import GodsList from './gods/GodsList';
import GodCreate from './create/CreateGod'
import EmblemCreate from './create/CreateEmblem'
import AbodeCreate from './create/CreateAbode'
import Create from './create/Create'
import {Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={GodsList} />
            <Route exact path="/new" component={Create} />
        </div>
    );
};

export default App;