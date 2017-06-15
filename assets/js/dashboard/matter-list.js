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
        $.get(this.props.url)
        .done( (data) => {
            this.setState({
                matters: data.results
            });
        })
        .fail( (xhr, status, error) => {
            console.log("Error received: " + error + ", " + status);
        });

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