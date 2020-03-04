import React, { Component } from 'react';
import Movie from './Movie'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: 'Jungle',
            anneeMin: '',
            anneeMax: '',
            genre: '',
            movies: [
                {
                    name: "movie1"
                },
                {
                    name: "movie2"
                },
                {
                    name: "movie3"
                },
                {
                    name: "movie4"
                }
            ]
        }
    }


    render() {
        const handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const { titre, anneeMin, anneeMax, genre } = this.state;
            console.log(titre)
            fetch(`http://localhost:8080/LOG660-TP2/Film?titre=${titre}`)
            .then(response => {
                console.log(response)
            }).then(data => {
                console.log(data)
            })
        }

        return (
            <div className="main-container flex-column">
                <div className="flex-row justify-content-center search">
                    <form className="flex-column">
                        <input type="text" name="titre" placeholder="Titre" onChange={(e) => handleChange(e)} />
                        <input type="text" name="anneeMin" placeholder="Annee Min" onChange={(e) => handleChange(e)} />
                        <input type="text" name="anneeMax" placeholder="Annee Max" onChange={(e) => handleChange(e)} />
                        <input type="text" name="genre" placeholder="Genre" onChange={(e) => handleChange(e)} />
                        <button type="submit" onClick={(e) => handleSubmit(e)}>
                            Search
                        </button>
                    </form>
                </div>
                <div className="flex-column justify-content-center content">
                    {this.state.movies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }

}