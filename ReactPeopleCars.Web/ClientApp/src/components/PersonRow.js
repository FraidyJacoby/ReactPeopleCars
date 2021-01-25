import React from 'react';
import { Link } from 'react-router-dom';

const PersonRow = (props) => {
    const { id, firstName, lastName, age } = props.person;
    const { carCount } = props;
    const addTo = {
        pathname: `/addcar/${id}`,
        firstName: `${firstName}`,
        lastName: `${lastName}`
    };
    const deleteTo = {
        pathname: `/deletecars/${id}`,
        firstName: `${firstName}`,
        lastName: `${lastName}`
    }
        return (
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>{carCount}</td>
                    <td>
                        <Link to={addTo}>
                            <button className="btn btn-outline-info">Add Car</button>
                        </Link>
                    </td>
                    <td>
                    <Link to={deleteTo}>
                            <button className="btn btn-outline-danger">Delete Cars</button>
                        </Link>
                    </td>
                </tr>
        )
}

export default PersonRow;