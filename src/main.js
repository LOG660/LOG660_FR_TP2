import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationMenu'
import './styles/App.scss';
import MainPage from './components/MainPage';

export default class Main extends Component {
    constructor(props) {
        super(props);
        let user = localStorage.getItem('user');
        let logged = () => {

            if(user === null || user == null || user == undefined) {
                console.log("here")
                return false;
            } else {
                return true;
            }
        }
        this.state = {
            logged: logged(),
            user: {
                nom: '',
                prenom:'',
            }
        }
    }


    render() {

        const setUser = (userObj) => {
            localStorage.setItem('user', JSON.stringify(userObj))
            this.setState({ user: userObj });
        }

        const setLogged = (value) => {
            this.setState({logged: value});
        }

        return (
            <div className="app">
                <Navbar user={this.state.user} setLogged={setLogged.bind(this)} setUser={setUser.bind(this)}/>
                {this.state.logged ?
                    <MainPage />
                    :
                    null
                }
            </div>
        );
    }
}
