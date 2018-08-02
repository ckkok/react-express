// This file serves as webpack's entry point of compilation. Webpack will take this file, and all its dependencies (i.e. its imports, and the imports of those imports, etc) and run them through the _transpiler_ that we've configured, Babel in this case, then roll everything up into a single bundle.js file.

// Note that we have also configured webpack to load up css files, which are necessary if you wish to keep the styles of your React components in separate css files.

// Inspect webpack.config.js for details.

// Babel is responsible for taking the ES6 code in here and turning it into ES5 (this is not always possible, e.g. if you use ES6 proxies in your code since those are not equivalent to any ES5 construct). Here, we have configured it to use the env, react, and stage-2 presets in its transpilation. The react preset is required for Babel to understand the jsx mumbo jumbo that React uses. The other 2 presets refer to different JS standards that we wish for Babel to transpile into ES5.

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Components/Greeting/greeting';

class Root extends React.Component {
    render() {
        return(
            <div className="root">
                <Greeting name="world!" />
            </div>
        )
    }
};

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);

module.hot.accept();