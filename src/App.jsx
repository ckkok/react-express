import React from 'react';
import Greeting from './Components/Greeting/greeting';
import {Switch, Route} from 'react-router';

export default class App extends React.Component {
    render() {
        return(
            <div className="root">
                <Switch>
                    <Route exact path='/' render={()=><Greeting name="there!" />} />
                    <Route path='/world' render={()=><Greeting name="world!" />} />
                </Switch>
            </div>
        )
    }
};
