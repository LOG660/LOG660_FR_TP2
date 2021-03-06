import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "RobertCFlores21@gmail.com",
            password: "eishie3meiH",
            errorMessage: "Invalid username or password, please try again",
            showErrorMessage: false
        };
    }
    render() {



        const setUser = (userObj) => {
            localStorage.setItem('user', JSON.parse(userObj))
            this.setState({ user: userObj });
        }

        const handleLogin = (e) => {
            e.preventDefault()
            const { email, password } = this.state;
            fetch(`http://localhost:8080/LOG660-TP2/User?email=${email}&password=${password}`)
                .then(response => {
                    if (response.status === 200) {
                        console.log(response)
                        this.setState({
                            showErrorMessage: false
                        });
                        this.props.handleClose();
                        response.json().then(user => {
                            console.log(user)
                            this.props.setUser(user);
                            this.props.handleClose();
                            this.props.setLogged(true);
                        })
                    } else {
                        this.setState({
                            showErrorMessage: true
                        })
                    }
                })
        }

        const handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
        return (
            <>
                {this.state.showErrorMessage &&
                    <p>{this.state.errorMessage}</p>
                }
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control defaultValue="RobertCFlores21@gmail.com" name="email" type="email" placeholder="Enter email" onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control defaultValue="eishie3meiH" name="password" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" variant="dark" label="Remember me" />
                    </Form.Group>
                    <button className="button-themed" type="submit" onClick={(e) => handleLogin(e)}>
                        Login
                    </button>
                </Form>
            </>
        )
    }
}