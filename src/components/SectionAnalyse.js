import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default class SectionAnalyse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groupeage: '',
            province: '',
            jour: '',
            mois: '',
        }
    }


    render() {

        const handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
        const handleRent = (e) => {
            e.preventDefault();
            let user = JSON.parse(localStorage.getItem('user'));
            let movieid = this.props.movie.id
            let userid = user.id;

            fetch(`http://localhost:8080/LOG660-TP2/Location?user=${userid}&film=${movieid}`, {
                method: 'POST'
            })
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        this.props.confirmRentedMovie(this.props.movie);
                    }
                })
        }

        return (
            <>
                <div className="main-container flex-column">
                    <h2>Analyse des locations</h2>
                    <p>Dans cette section, il s'agit de d'entree les informations suivantes pour obtenir une analyse du nombre de locations.</p>
                    <div className="search">
                        <form className="flex-column">
                            <input type="text" name="groupage" placeholder="Groupe d'age" onChange={(e) => handleChange(e)} />
                            <input type="text" name="province" placeholder="Annee Min" onChange={(e) => handleChange(e)} />
                            <input type="text" name="jour" placeholder="Jour de la semaine" onChange={(e) => handleChange(e)} />
                            <input type="text" name="mois" placeholder="Mois de l'annee" onChange={(e) => handleChange(e)} />
                            <button type="submit" onClick={(e) => handleRent(e)}>
                                Analyser
                        </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

}