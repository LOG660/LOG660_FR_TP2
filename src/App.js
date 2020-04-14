import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationMenu'
import './styles/App.scss';
import MainPage from './components/MainPage';
import SectionAnalyse from './components/SectionAnalyse';

export default class App extends Component {
  constructor(props) {
    super(props);
    let user = localStorage.getItem('user');
    let logged = () => {

      if (user === null || user == null || user == undefined) {
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
        prenom: '',
        showSearch: true,
        showAnalyse: false
      }
    }
  }
  renderOutlet() {
    if (this.state.logged) {
      if (this.state.showSearch)
        return <MainPage />
      else
        return <SectionAnalyse />
    }
    return null;
  }

  render() {

    const setUser = (userObj) => {
      localStorage.setItem('user', JSON.stringify(userObj))
      this.setState({ user: userObj });
    }

    const setLogged = (value) => {
      this.setState({ logged: value });
    }

    const showSearch = () => {
      this.setState({
        showSearch: true,
        showAnalyse: false
      })
    }

    const showAnalyse = () => {
      this.setState({
        showSearch: false,
        showAnalyse: true
      })
    }




    return (
      <>
        <div className="app">
          <Navbar user={this.state.user} setLogged={setLogged.bind(this)} setUser={setUser.bind(this)} />
          <div class="navigation-btns">
            <button type="submit" onClick={(e) => showSearch()}>
              Recherche de film
            </button>
            <button type="submit" onClick={(e) => showAnalyse()}>
              Analyse de location
            </button>
          </div>
          {this.renderOutlet()}
        </div>
      </>
    );
  }
}
