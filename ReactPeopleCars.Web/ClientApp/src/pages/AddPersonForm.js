import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddPersonForm extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const nextState = produce(this.state, draft => {
            draft.person[e.target.name] = e.target.value;
        })
        this.setState(nextState);
    }

    onSubmitClick = async () => {
        const { firstName, lastName, age } = this.state.person;
        const person = {
            firstName,
            lastName,
            age: parseInt(age)
        }
        await axios.post('/api/people/addperson', person);
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName, age } = this.state.person;
        const { onTextChange, onSubmitClick } = this;

        return (
            <div className="container" style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col-md-6 col-offset-md-3">
                        <input className="form-control" name="firstName" placeholder="First Name"
                            value={firstName} onChange={onTextChange} />
                        <br />
                        <input className="form-control" name="lastName" placeholder="Last Name"
                            value={lastName} onChange={onTextChange} />
                        <br />
                        <input className="form-control" name="age" placeholder="Age"
                            value={age} onChange={onTextChange} />
                        <br />
                        <button className="btn btn-outline-warning" onClick={onSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPersonForm;