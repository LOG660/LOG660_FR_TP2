import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "tonyown10@gmail.com",
            password: "123",
            errorMessage: "Invalid username or password, please try again",
            showErrorMessage: false
        };
    }
    render() {
        
        const login = (e) => {
			
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
                <Form onSubmit={login.bind(this)}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control defaultValue="user" name="username" type="text" placeholder="Enter username" onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control defaultValue="123" name="password" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" variant="dark" label="Remember me" />
                    </Form.Group>
                    <button className="button-themed" type="submit">
                        Login
                </button>
                </Form>
            </>
        )
    }
}