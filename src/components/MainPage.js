import React, { Component } from 'react';
import Movie from './Movie'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: '',
            anneeMin: 0,
            anneeMax: 0,
            affiche: '',
            genre: '',
            duree: 0,
            realisateur: '',
            langue: '',
            roles: '',
            movies: [
            ],
            showErrorMessage: false,
            errorMessage: "No films with the provided parameters found! Try again.",
            rentedMovies: []
        }
    }


    render() {
        const handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }

        const confirmRentedMovie = (movie) => {
            this.state.rentedMovies.push(movie);
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const { titre, anneeMin, anneeMax, genre, duree, realisateur, langue, roles } = this.state;
            var url = new URL('http://localhost:8080/LOG660-TP2/Film');
            const params = {
                titre,
                anneeMin,
                anneeMax,
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
                                let movies = []
                                Object.values(data).map(d => movies.push(d));
                                this.setState({ movies: movies[0], showErrorMessage: false })
                            })
                    } else {
                        this.setState({ showErrorMessage: true })
                    }

                })
        }

        return (
            <>
                <div className="main-container flex-column">
                    <div className="search">
                        <form className="flex-column">
                            <input type="text" name="titre" placeholder="Titre" onChange={(e) => handleChange(e)} />
                            <input type="text" name="anneeMin" placeholder="Annee Min" onChange={(e) => handleChange(e)} />
                            <input type="text" name="anneeMax" placeholder="Annee Max" onChange={(e) => handleChange(e)} />
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
                </div>
                <br />
                <br />
                {this.state.rentedMovies.map((movie) => (
                    <p>{movie.name} has successfully been rented to {localStorage.getItem('user').firstName} {localStorage.getItem('user').lastName}</p>
                ))}
                {this.state.showErrorMessage ?
                    <p>
                        <b>{this.state.errorMessage}</b>
                    </p>
                    :
                    (
                        <table>
                            <thead>
                                <tr>
                                    <td><b>Year</b></td>
                                    <td><b>Title</b></td>
                                    <td><b>Action</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.movies.map((movie, index) => (
                                    <Movie key={index} movie={movie} confirmRentedMovie={confirmRentedMovie.bind(this)}/>
                                ))}
                            </tbody>
                        </table>
                    )
                }
            </>
        )
    }

}