import React from 'react';

import './App.css';


let App=()=>{
  return (
    <div className="App">
      <header className="App-header">
        
        <Form const Form='application form' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header>
    </div>
  );
  
}
  

  class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <input type='submit' value= 'submit'/><br></br>
                
            </form>
            <div>
            <label>Password:
                <input type= "Password" name= "Password" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value= 'submit'/>
            </div>
            </div>
        );
    }
}



export default App;
