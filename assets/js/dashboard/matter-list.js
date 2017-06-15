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
                {id: 1, name: "test1", profit: 5},
                {id: 2, name: "test2", profit: 2}
            ]
        })
    }

    componentDidMount() {
        this.loadMatters();
        this.intervalID = setInterval(this.loadMatters, this.props.pollInterval)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    
    render() {
        const nodes = this.state.matters.map((val) =>
                <li key={val.id.toString()}> {val.name} </li>
        );
        return (
            <ul>
                {nodes}
            </ul>
        );
    }
}