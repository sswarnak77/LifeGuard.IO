var ReactDOM = require('react-dom');
var React = require('react');

import MatterList from './dashboard/matter-list';
import MatterForm from './dashboard/matter-form';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showForm: false
        }
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-primary" value={this.state.toggleForm}>New Matter</button>
                <MatterList pollInterval={1000} url='/matters/'/> 
            </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);