/*import React from 'react'
import axios from 'axios'
import PersonRow from './PersonRow'


class HomePage extends React.Component {


    state = {
        people: [],
        serch:''
    }


    componentDidMount = async()=> {
        const res = await axios.get('/api/PeopleCar/getPeople')
        this.setState({ people: res.data })
        console.log(this.state.people)
    }

    getAllThePeople = async() => {
        const res = await axios.get('/api/PeopleCar/getPeople')
        this.setState({ people: res.data })
    }

    
    render() {
        const { people } = this.state
        return <div className='row md-offset-3'> 
                <input value={serch} onChange={this.onTextChange} name="serch" className='form-control' placeholder='serch' />
            </div>
        
    }
}

export default HomePage;*/
