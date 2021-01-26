import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    state = {
        people: [],
        searchText: ''
    }

    loadTable = async () => {
        const { data } = await axios.get('/api/people/getpeople');
        this.setState({ people: data, searchText: '' });
    }

    componentDidMount = () => {
        this.loadTable();
    }

    onSearchChange = e => {
        const text = e.target.value;
        const people = this.state.people.filter(p => `${p.firstName.toLowerCase()} ${p.lastName.toLowerCase()}`.includes(text.toLowerCase()));
        this.setState({ people, searchText: text });
    }

    onClear = () => {
        this.loadTable();
    }

    render() {
        const { people, searchText } = this.state;
        const { onSearchChange, onClear } = this;
        return (
            <div className="container">
                <div className="row" style={{ marginTop: 30, marginBottom: 20 }}>
                    <Link to='/addperson' style={{ textDecoration: 'none' }}>
                        <button className="btn btn-block btn-outline-success">Add Person</button>
                    </Link>
                </div>
                <input placeholder="search" className="formControl" onChange={onSearchChange} value={searchText} />
                <button className="btn btn-outline-warning" onClick={onClear}>Clear</button>
                <table style={{ marginTop: 30 }} className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person =>
                            <PersonRow
                                key={person.id}
                                person={person}
                                carCount={person.cars.length}
                            />)}
                    </tbody>
                </table>
            </div>
            )
    }
}

export default PeopleTable;