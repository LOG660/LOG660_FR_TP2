import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export default class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: '',
            annee:'',
            langue:'',
            pays: [],
            duree:'',
            genres:[],
            realisateur:'',
            acteurs: [],
            resume:'',
        }
    }
    componentDidMount() {
        const idMovie = this.props.match.params.id;
        fetch(`http://localhost:8080/LOG660-TP2/FilmInfos?id=${idMovie}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                this.setState({titre: response.titre})
                this.setState({annee: response.annee})
                this.setState({langue: response.langue})
                this.setState({duree: response.duree})
                this.setState({pays: response.pays })
                this.setState({genres: response.genres})
                this.setState({realisateur: response.realisateur})
                this.setState({acteurs: response.acteurs})
                this.setState({resume: response.resume})
            })
    }

    render() {

        const handleInfos = (e) => {
            e.preventDefault()

            let user = JSON.parse(localStorage.getItem('user'));

        }

        return (
            <div>
                <h1>{this.state.titre}</h1>
                <p>Annee: {this.state.annee}</p>
                <p>Langue: {this.state.langue}</p>
                <p>Duree: {this.state.duree} minutes</p>
                <p>realisateur: {this.state.realisateur}</p>
                <p>resume: {this.state.resume}</p>
                <p>Acteurs: {this.state.acteurs.map((a, i ) =>
                    <Link to={'/acteur/'  + a.id}>{a.nom + "(" + a.personnage + "), " }</Link>)}</p>
                <p>Pays:  {this.state.pays.map((p, i ) =>
                   p + ", " )}</p>
                <p>Genres: {this.state.genres.map((g, i ) =>
                    g + ", " )}</p>
                <p>Pays:  {this.state.pays.map((p, i ) =>
                    p + ", " )}</p>

            </div>

        )
    }

}