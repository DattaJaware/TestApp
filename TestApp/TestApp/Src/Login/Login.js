import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { hot } from "react-hot-loader/root";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
     validateForm() {
        return email.length > 0 && password.length > 0;
    }

     handleSubmit(event) {
        event.preventDefault();
    }
    render() {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}
}
export default hot(Login);