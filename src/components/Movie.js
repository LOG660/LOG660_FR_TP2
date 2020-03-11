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
                if(response.ok) {
                    this.props.confirmRentedMovie(this.props.movie);
                }
            })
        }

        return (
            <tr>
                <td>{this.props.movie.annee}</td>
                <td>{this.props.movie.titre}</td>
                <td>
                    <button className=""  onClick={(e) => handleRent(e)}> 
                        Louer
                    </button>
                </td>
            </tr>
        )
    }

}