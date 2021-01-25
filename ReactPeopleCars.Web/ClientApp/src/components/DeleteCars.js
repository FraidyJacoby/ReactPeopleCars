﻿import React from 'react';
import CarRow from './CarRow';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DeleteCars extends React.Component {

    state = {
        cars: []
    }

    componentDidMount = async () => {
        const personId = this.props.match.params.personId;
        const { data } = await axios.get(`/api/people/getcars?personId=${personId}`);
        this.setState({ cars: data });
    }

    onAgree = async () => {
        const personId = this.props.match.params.personId;
        await axios.post('/api/people/deletecars', { personId: +personId });
        this.props.history.push('/');
    }

    onCancel = () => {
        this.props.history.push('/');
    }

    render() {
        const firstName = this.props.location.firstName;
        const lastName = this.props.location.lastName;  
        const { cars } = this.state;
        const empty = cars.length === 0;

        return (
            <div className="container" style={{ marginTop:40}}>
                {empty && <div>
                    <h2>{firstName} {lastName} has no cars!</h2>
                    <Link to='/'>
                        <button className="btn btn-outline-info">Return to home page</button>
                    </Link>
                </div>}
            {!empty && <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(c => <CarRow car={c} />)}
                    </tbody>
                </table>
                <h2>Are you sure you want to delete {firstName} {lastName}'s cars?</h2>
                <div className="col-offset-md-6">
                    <button style={{ marginRight: 10 }} className="btn btn-outline-success" onClick={this.onAgree}>Yes</button>
                    <button className="btn btn-outline-dark" onClick={this.onCancel}>No</button>
                </div>
            </div>} 
        </div>
)
    }
}

export default DeleteCars;