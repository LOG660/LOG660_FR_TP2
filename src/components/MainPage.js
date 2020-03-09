import React, { Component } from 'react';
import Movie from './Movie'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: 'Jungle',
            annee: 0,
            affiche: '',
            genre: '',
            duree: 0,
            realisateur: '',
            langue: '',
            roles: '',
            movies: [
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
            const { titre, annee, genre, duree, realisateur, langue, roles } = this.state;
            var url =  new URL('http://localhost:8080/LOG660-TP2/Film');
            const params = {
                titre, 
                annee,
                duree,
                genre,
                realisateur,
                langue,
                roles
            }
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            fetch(url)
                .then(response => {
                    if (response.status === 200) {
                        response.json()
                            .then(data => {
                                console.log()
                                let movies = []
                                Object.values(data).map(d => movies.push(d));
                                this.setState({ movies: movies[0]})
                            })
                    }

                })
        }

        return (
            <div className="main-container flex-column">
                <div className="search">
                    <form className="flex-column">
                        <input type="text" name="titre" placeholder="Titre" onChange={(e) => handleChange(e)} />
                        <input type="text" name="annee" placeholder="Annee" onChange={(e) => handleChange(e)} />
                        <input type="text" name="genre" placeholder="Genre" onChange={(e) => handleChange(e)} />
                        <input type="text" name="duree" placeholder="Duree" onChange={(e) => handleChange(e)} />
                        <input type="text" name="realisateur" placeholder="Realisateur" onChange={(e) => handleChange(e)} />
                        <input type="text" name="langue" placeholder="Langue" onChange={(e) => handleChange(e)} />
                        <input type="text" name="role" placeholder="Role" onChange={(e) => handleChange(e)} />
                        <button type="submit" onClick={(e) => handleSubmit(e)}>
                            Search
                        </button>
                    </form>
                </div>
                <div className="flex-column justify-content-center content">}
                    {this.state.movies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }

}