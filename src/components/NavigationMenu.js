import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Modal from 'react-bootstrap/Modal'
import LoginForm from './LoginForm.js';

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        const handleClose = () => {
			this.setState({ show: false });
		};
		const handleShow = () => {
			this.setState({ show: true });
		};
        return (
            <>
                <div className="flex-row menu-container">
                    <div className="left flex-10">
                        <p>Our appp</p>
                    </div>
                    <div className="flex"></div>
                    <div className="right flex-10">
                        <button className="action-btn" onClick={handleShow.bind(this)}>Connect</button>
                    </div>
                </div>
                <Modal
                    show={this.state.show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <Modal.Header>
                            <h2>Login</h2>
                        </Modal.Header>
                        <LoginForm handleClose={handleClose.bind(this)} />
                    </Modal.Body>
                </Modal>
            </>

        );
    }


}

export default NavigationMenu