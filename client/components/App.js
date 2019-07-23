import React from "react";
import GodsList from './gods/GodsList';
import GodDetail from './gods/GodDetail';
import GodCreate from './create/CreateGod'
import EmblemCreate from './create/CreateEmblem'
import AbodeCreate from './create/CreateAbode'
import Create from './create/Create'
import {Route} from 'react-router-dom';
import Navigation from './navigation'

const App = () => {
    return (
        <div>
            <Route path="/" component={Navigation}/>
            <Route exact path="/" component={GodsList} />
            <Route exact path="/gods/:id" component={GodDetail} />
            <Route exact path="/new" component={Create} />
        </div>
    );
};

export default App;