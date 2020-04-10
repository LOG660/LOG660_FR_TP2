import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export default class ActeurDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            photo:'',
            dateNaissance:'',
            lieu: '',
            biographie:'',
        }
    }
    componentDidMount() {
        const idActeur = this.props.match.params.id;
        fetch(`http://localhost:8080/LOG660-TP2/Acteur?id=${idActeur}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                this.setState({nom: response.nom})
                this.setState({photo: response.photo})
                this.setState({dateNaissance: response.dateNaissance})
                this.setState({biographie: response.biographie})
                this.setState({lieu: response.lieu })

            })
    }

    render() {

        const handleInfos = (e) => {
            e.preventDefault()

            let user = JSON.parse(localStorage.getItem('user'));

        }

        return (
            <div>
                <h1>{this.state.nom}</h1>
                <p><a href={this.state.photo}
                >photo</a></p>
                <p><b>date de naissance</b>: {this.state.dateNaissance}</p>
                <p><b>biographie</b>: {this.state.biographie}</p>
                <p><b>Lieu de naissance</b>: {this.state.lieu}</p>
            </div>

        )
    }

}