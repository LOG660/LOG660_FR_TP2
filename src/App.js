import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationMenu'
import './styles/App.scss';
import MainPage from './components/MainPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
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
      console.log(this.state.user)
    }

    const setLogged = (value) => {
      this.setState({logged: value});
    }

    return (
      <div className="app">
        <Navbar user={this.state.user} setLogged={setLogged.bind(this)} setUser={setUser.bind(this)}/>
        <div className="app-content">
        {this.state.logged ?
          <MainPage />
          : 
          null
        }
        </div>
      </div>
    );
  }
}
