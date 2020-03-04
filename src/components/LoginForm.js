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
        
        const login = (e) => {
			e.preventDefault()
			const { email, password } = this.state;
			fetch(`localhost:8080/LOG660-TP2/User?email=${email}&password=${password}`)
				.then(response => {
					switch(response.status) {
						case 200: 
							this.setState({
								showErrorMessage: false
                            });
                            this.props.handleClose();
							break;
						case 404: 
							this.setState({
								showErrorMessage: true
							})
					}
                })
                
                //localhost:8080/LOG660-TP2/User?email=RobertCFlores21@gmail.com&password=eishie3meiH
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
                        <Form.Control defaultValue="RobertCFlores21@gmail.com" name="email" type="email" placeholder="Enter email" onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control defaultValue="eishie3meiH" name="password" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
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