import React, { Component } from 'react';
import { Route } from 'react-router';
import HomePage from './HomePage';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';
import Layout from './Layout';


export default class App extends Component {
  render() {
    return (
      <Layout>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/AddPerson' component={AddPerson} />
        <Route exact path='/addcar/:personId' component={AddCar} />
        <Route exact path='/deletecars/:personId' component={DeleteCars} />
      </Layout>
    );
  }
}