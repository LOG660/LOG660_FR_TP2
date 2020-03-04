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

        const handleSubmit = (event) => {
            console.log("submit was called")
        }

        return (
            <div className="main-container flex-column">
                <div className="flex-row justify-content-center search">
                    <input type="text" placeholder="Search for movies" value={this.state.value} onChange={(e) => handleChange(e)}/>
                    <button type="submit" onClick={() => handleSubmit()}>
                        Search
                </button>
                </div>
                <div className="flex-column justify-content-center content">

                </div>
            </div>
        )
    }

}