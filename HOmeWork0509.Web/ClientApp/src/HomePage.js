import React from 'react'
import axios from 'axios'
import PersonRow from './PersonRow'


class HomePage extends React.Component {


    state = {
        people: [],
        peopleToDesplay:[],
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

    /*onTextChangeSerch = e => {
        const {people}=this.state
        const copy =[{...people}]
        copy.filter((person)=>{
            let{firstName, lastName}=person
            if((firstName.contains({e})) ||(firstName.contains({e}))){
                return person
            }
        })
        
        
        /*const {person}=this.state
        /*const serch = e.target.value*/
        
        /*this.setState({ serch: serch })
        copy.contains({e})
        this.setState({ person: copy })
        

        const resultsFromSearch = copy.filter((person) =>{
            person.firstName.toLowerCase().includes(`${e}`.toLowerCase)
            this.setState({ person: resultsFromSearch })
        })
        
    }*/

    /*onTextChangeSerch = e => {
        /*const filterList = (list, searchValue) => {
        const copy=[{...this.state.people}]
        const serch = e.target.value
        let filtered = copy.filter(person => {
            const{firstName, lastName}=person
            console.log(firstName)
            const fullName = firstName.toLowerCase() + lastName.toLowerCase()
            const trimmedSearchValue = serch.replace(/\s+/g, '');
              
              return fullName.includes(trimmedSearchValue.toLowerCase())
            })
            return filtered
            console.log(filtered)
            this.setState({ person: filtered })
          
    }*/

    /*onTextChangeSerch=e=>{
            this.setState({ serch: e.target.value })
            const {people,serch} = this.state
            const arr={...people}
            console.log('arr')
            console.log(arr)
            console.log('serch')
            console.log(this.state.serch)  
            arr.select(person => {
                const {id,firstName, lastName, age, cars} = person
                const fullName= `${firstName} ${lastName}`
                console.log(fullName)
                console.log(serch)
                if(fullName.includes({serch})){
                    return person
                } 
                
                    /*return arr.push(person)
                    
                }
            })
            this.setState({ peopleToDesplay: arr })
            console.log(this.state.peopleToDesplay)
            }*/
    

    
    render() {
        const { peopleToDesplay, serch, people } = this.state
        return <div>
           {/*<div className='row md-offset-3'> 
                <input value={serch} onChange={this.onTextChangeSerch} name="serch" className='form-control' placeholder='serch' />
            </div>*/}
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Car Count</th>
                        <th>AddCar</th>
                        <th>DeleteCar</th>
                    </tr>
                </thead>
                {people.map((person, i) => <PersonRow  
                            person={person}/> )}
                <tbody>
                </tbody>
            </table>
        </div>
    }
}

export default HomePage;



