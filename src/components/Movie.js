import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    
    render() {
		const handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }

        const handleRent = (event) => {
            //logic pour louer
            
        }

        return (
            <div className="movie-container flex-row">
                <p>{this.props.movie.name}</p>
                <button className=""  onClick={() => handleRent()}> 
                    Louer
                </button>
            </div>
        )
    }

}