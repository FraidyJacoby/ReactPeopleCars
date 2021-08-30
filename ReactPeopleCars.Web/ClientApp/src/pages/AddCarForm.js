import React from 'react';
import { produce } from 'immer';
import axios from 'axios';

class AddCarForm extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: ''
        }
    }

    onTextChange = e => {
        const nextState = produce(this.state, draft => {
            draft.car[e.target.name] = e.target.value;
        })
        this.setState(nextState);
    }

    onSubmit = async () => {
        const personId = this.props.match.params.personId;
        const { make, model, year } = this.state.car;
        const car = {
            make,
            model,
            year: parseInt(year),
            personId: parseInt(personId)
        }
        await axios.post('/api/people/addcar', car);
        this.props.history.push('/');
    }

    render() {
        const firstName = this.props.location.firstName;
        const lastName = this.props.location.lastName;
        const { make, model, year } = this.state.car;
        const { onTextChange, onSubmit } = this;

        return (
            <div className="container" style={{ marginTop: 20 }}>
                <h2 className="col-offset-md-3">Add car for {firstName} {lastName}</h2>
                <div className="row">
                    <div className="col-md-6 col-offset-md-3">
                        <input placeholder="Make" className="formControl" value={make} name="make"
                            onChange={onTextChange} />
                        <br/>
                        <input placeholder="Model" className="formControl" value={model} name="model"
                            onChange={onTextChange} />
                        <br/>
                        <input placeholder="Year" className="formControl" value={year} name="year"
                            onChange={onTextChange} />
                        <br/>
                        <button className="btn btn-outline-dark" onClick={onSubmit}>Add Car</button>
                    </div>
                </div>                
            </div>
            )
    }
}

export default AddCarForm;