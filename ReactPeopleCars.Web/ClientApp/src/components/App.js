import React from 'react';
import { Route } from 'react-router';
import PeopleTable from '../pages/PeopleTable';
import AddPersonForm from '../pages/AddPersonForm';
import AddCarForm from '../pages/AddCarForm';
import DeleteCars from '../pages/DeleteCars';

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