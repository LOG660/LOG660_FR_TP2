import React  from 'react';
import Modal from 'react-bootstrap/Modal'
import LoginForm from './LoginForm.js';

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    render() {
        const handleClose = () => {
            this.setState({ show: false });
        };
        const handleShow = () => {
            this.setState({ show: true });
        };

        const userExistInLocal = () => {
            let user = JSON.parse(localStorage.getItem('user'));
            if (user) 
                return true;
            return false;
        }        
        const handleLogout = (event) => {
            localStorage.removeItem('user')
            this.props.setLogged(false);
            this.setState({
                user: {}
            });   
        }
        return (
            <>
                <div className="flex-row menu-container">
                    <div className="left flex-10">
                        <p>TP2</p>
                    </div>
                    <div className="flex"></div>
                    <div className="right flex-10">
                        {userExistInLocal() ?
                            <div className="flex-row">

                                <p>{JSON.parse(localStorage.getItem('user')).prenom} {JSON.parse(localStorage.getItem('user')).nom} </p>
                                <button className="action-btn" onClick={() => handleLogout()}>Logout</button>
                            </div>
                            :
                            <button className="action-btn" onClick={() => handleShow()}>Connect</button>
                        }

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
                        <LoginForm setUser={this.props.setUser.bind(this)} setLogged={this.props.setLogged.bind(this)} handleClose={handleClose.bind(this)} />
                    </Modal.Body>
                </Modal>
            </>

        );
    }


}

export default NavigationMenu