import React, {Component} from "react";
import './SignIn.css';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            errorLogIn: '',
        }
    }


    // post to the server thee username and password to sign in
    onSubmitSignIn = () => {
        console.log("ppppp")
        fetch("http://localhost:4000/auth/signin/" + this.state.signInEmail, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                password: this.state.signInPassword
            })
        }).then(res => res.json()).then(res => {
            console.log("ok")
            this.setState({errorLogIn: ''});
            this.props.onChangeSignIn(true)
        })
            .catch(err => {
                this.setState({errorLogIn: "Username or password is not correct"});
            })
    };

    // handle the event of the username
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    };

    // handle the event of the password
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    };


    // sign in form
    render() {

        return (
            <div className="center card rounded br3 shadow-1 mt6 w-25">

                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Log In</strong>
                </h5>

                <div className="card-body px-lg-5 pt-0">

                    <div className="text-center mt-4" style={{"color": "#757575"}}>

                        <div className="md-form mt-3">
                            <input onChange={this.onEmailChange} placeholder="E-mail" type="email"
                                   id="materialLoginFormEmail" className="form-control"/>
                        </div>

                        <div className="md-form mt-3">
                            <input onChange={this.onPasswordChange} placeholder="Password" type="password"
                                   id="materialLoginFormPassword" className="form-control"/>
                        </div>


                        <p className={'mt-3 tc f4 red'}><span>{this.state.errorLogIn}</span></p>

                        <button onClick={this.onSubmitSignIn}
                                className="btn btn-primary btn-rounded w-40 my-4 waves-effect z-depth-0"
                        >Sign in
                        </button>


                    </div>
                </div>

            </div>

        );

    }

}


export default SignIn;

