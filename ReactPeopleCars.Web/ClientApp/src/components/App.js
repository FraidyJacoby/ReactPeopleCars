import React from 'react';
import { Route } from 'react-router';
import PeopleTable from './PeopleTable';
import AddPersonForm from './AddPersonForm';
import AddCarForm from './AddCarForm';
import DeleteCars from './DeleteCars';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={PeopleTable} />
            <Route exact path='/addperson' component={AddPersonForm} />
            <Route exact path='/addcar/:personId' component={AddCarForm} />
            <Route exact path='/deletecars/:personId' component={DeleteCars} />
        </div>
        );
}

export default App;