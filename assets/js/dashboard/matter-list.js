var React = require('react');


export default class MatterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matters: []
        };
        this.loadMatters = this.loadMatters.bind(this);
    }

    loadMatters() {
        this.setState({
            matters: [
                {name: "test1", profit: 5},
                {name: "test2", profit: 2}
            ]
        })
    }

    componentDidMount() {
        this.loadMatters();
        setInterval(this.loadMatters, this.props.pollInterval)
    }

    
    render() {
        if (this.state.matters) {
            var nodes = this.state.matters.map(function(val){
                    return <li> {val.name} </li>
            })
        }
        return (
            <ul>
                {nodes}
            </ul>
        );
    }
}