var ReactDOM = require('react-dom');
var React = require('react');

import MatterList from './dashboard/matter-list';

class App extends React.Component{
    render() {
        return(
            <MatterList pollInterval={1000}/>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);