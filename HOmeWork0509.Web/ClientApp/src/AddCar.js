import React from 'react';
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
        },
        person:{
            firstName: '',
            lastName: ''
        }
    }

    componentDidMount= async() => {
        
        const { personId } = this.props.match.params;
        const res = await axios.get(`/api/PeopleCar/getAPerson?personId=${personId}`)
        this.setState({ person: res.data })
        console.log(this.state.person)
        this.setState({car:{personId: personId}})
    }

    onTextChange = e => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
        console.log(this.state.car)
    }

    submit=async()=>{
        const res = await axios.post('/api/PeopleCar/addACar', this.state.car)
        this.setState({
            people: res.data,
            car: {
                make: '',
                model: '',
                year: '',
                personId:''

            },
        });
        this.props.history.push('/');
    }


    render() {
        const { make, model,year } = this.state.car
        const{firstName, lastName} = this.state.person
        return (<div>
            <div className='row md-offset-3'> 
            <h2>Add a car for {firstName} {lastName}</h2>
            </div>
            <div className='row md-offset-3'>            
            <div className='col-md-2 md-offset-1'>
                <input value={make} onChange={this.onTextChange} name="make" className='form-control' placeholder='make' />
            </div>
            <div className='col-md-2 md-offset-1'>
                <input value={model} onChange={this.onTextChange} name="model" className='form-control' placeholder='model' />
            </div>
            <div className='col-md-2 md-offset-1'>
                <input value={year} onChange={this.onTextChange}  name="year" className='form-control' placeholder='year' />
            </div>
            <div className='col-md-6 md-offset-1'>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.submit}>Submit</button>
            </div>
            </div>
        </div>)
            
        
    }
    
}

export default AddCar;