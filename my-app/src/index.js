import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component {
    state= {status: true};
    answer()
    {
        this.setState({status: !this.state.status });
    }
    render(){

        if(this.state.status)
        {return(
            <div>
            <p>Why was the JavaScript developer sad?</p>
            <button onClick={this.answer.bind(this)}>Answer</button>
            </div>)
        }
        else
        { return(
            <div>
            <p>Why was the JavaScript developer sad?</p>
            <p>Because he didnt Node how to Express himself?</p>
            <button onClick={this.answer.bind(this)}> Again! </button>
            </div>
        )
        }
}
}
ReactDOM.render(<App />, document.getElementById('root'));