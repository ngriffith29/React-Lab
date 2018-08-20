import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'State TEXT:',
            hasLoaded: false, 
        }
    }
    handleInputChange = (value) => {
        this.setState({ text: value });
    }
    hasLoaded = (value) => {
        if(this.state.hasLoaded === false){
       return this.setState({ hasLoaded: true} );}
       else{
           return <h1>Hello World</h1>
       }
    }
    render() {

        return (
            <React.Fragment>
                <h1>Hello, {this.state.text}, {this.props.nameProp}</h1>
            <input type="Text" placeholder={this.state.hasLoaded }
                    onChange={(event) => this.handleInputChange(event.target.value)}></input>
                <br></br>
                <button onClick={(event) => this.hasLoaded()}
                >CLICK ME BITCH I..DARE YOU</button>
            </React.Fragment>

        );
    }
}
export default App;




















// const App = (props) => {
//     return <h1>Hello, {props.name}!</h1>
// }



// export default App;