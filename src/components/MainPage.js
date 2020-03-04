import React, { Component }  from 'react';
import Movie from './Movie'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
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

        const handleSubmit = (event) => {
            console.log("submit was called")
        }

        return (
            <div className="main-container flex-column">
                <div className="flex-row justify-content-center search">
                    <input type="text" name="value" placeholder="Search for movies" onChange={(e) => handleChange(e)}/>
                    <button type="submit" onClick={() => handleSubmit()}>
                        Search
                </button>
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