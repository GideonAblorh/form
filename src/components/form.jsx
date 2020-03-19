import React from 'react'
import App from '../App';

class App extends React.Component {
    constructor(props){
        super(prop);
        this.sate = {value: ''};

        this.handleChange = handle.Change.bind(this)
        this.handleSubmit = handle.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('submitted:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>Email:
                <input type= "text" name= "email" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>Password:
                <input type= "Password" name= "Password" value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
            </div>
        );
    }
}

export default App;