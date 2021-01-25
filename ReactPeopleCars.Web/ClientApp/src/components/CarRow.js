import React from 'react';

const CarRow = (props) => {
    const { make, model, year } = props.car;

    return (
        <tr>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
        </tr>
        )
}

export default CarRow;