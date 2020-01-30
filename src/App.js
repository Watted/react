import React, {Component} from 'react';
import './App.css';
import SignIn from "./Components/SignIn/SignIn";
import Table from "./Components/Table/Table";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: false,
        }


    }


    OnSuccessSignIn = (isSignIn) => {
        console.log("aaaa")
        this.setState({isSignIn});
    };


    render() {

        return (
            this.state.isSignIn === true ?
               <Table/>
                :
                <div className="App">
                    <SignIn onChangeSignIn={(boolean) => this.OnSuccessSignIn(boolean)}/>
                </div>
        );
    }
}

export default App;
