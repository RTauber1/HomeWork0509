import React from 'react'
import axios from 'axios'
import CarRow from './CarRow'
import { Link } from 'react-router-dom';


class DeleteCar extends React.Component {


    state = {
        cars: [],
        personId: ''
    }


    componentDidMount = async()=> {
        console.log('starting')
        const {personId}= this.props.match.params
        this.setState({ personId: personId })
        /*console.log('starting')*/
        const res = await axios.get(`/api/PeopleCar/getCars?personId=${personId}`)
        this.setState({ cars: res.data/*.filter(car=>car.personId===this.state.personId) */ })
        /*console.log('the cars:')
        console.log(this.state.cars)
        this.setState({ personId: personId })
        console.log(this.state.personId)*/
    }

    deleteCars=async()=>{
        const {personId}=this.state
        /*await axios.post('/api/PeopleCar/deleteCars',`${personId}`)*/
        await axios.post(`/api/PeopleCar/deleteCars?personId=${personId}`)
        console.log('let c if this worked')
        console.log(this.state.cars)
        this.props.history.push('/');
    }

    /*getAllTheCars = async() => {
        const res = await axios.get('/api/PeopleCar/getCars')
        this.setState({ people: res.data })
    }*/
    
    
    render() {
        const { cars, personId } = this.state
        return <div>
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>
                {console.log(personId)}
                {cars.map((car, i) =>  <CarRow  
                            car={car}/> )}
                <tbody>
                </tbody>
            </table>
            <h1>Are you sure you want to delete all the cars?</h1>
            <Link className='col-md-6' to='/'>
                    <button className='btn btn-warning btn-block'>No</button>
            </Link>
            
            <div className='col-md-6'>
                    <button onClick={this.deleteCars} className='btn btn-danger btn-block'>Yes</button>
            </div>
        </div>
    }
}

export default DeleteCar;