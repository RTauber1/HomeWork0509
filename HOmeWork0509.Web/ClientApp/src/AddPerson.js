import React from 'react';
import axios from 'axios';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
        console.log(this.state.person)
    }

    submit=async()=>{
        const res = await axios.post('/api/PeopleCar/addAPerson', this.state.person)
        this.setState({
            people: res.data,
            person: {
                firstName: '',
                lastName: '',
                age: '',

            },
        });
        console.log(res)
        this.props.history.push('/')
    }


    render() {
        const { firstName, lastName, age } = this.state;
        return (<div>
            <div className='row md-offset-3'>
            <h2>Add a New Person</h2>
            </div>
            <div className='row md-offset-3'>            
            <div className='col-md-2 md-offset-1'>
                <input value={firstName} onChange={this.onTextChange} name="firstName" className='form-control' placeholder='First Name' />
            </div>
            <div className='col-md-2 md-offset-1'>
                <input value={lastName} onChange={this.onTextChange} name="lastName" className='form-control' placeholder='Last Name' />
            </div>
            <div className='col-md-2 md-offset-1'>
                <input value={age} onChange={this.onTextChange}  name="age" className='form-control' placeholder='Age' />
            </div>
            <div className='col-md-6 md-offset-1'>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.submit}>Submit</button>
            </div>
            </div>
        </div>)
            
        
    }
    
}

export default AddPerson;