import React,{Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { render } from 'react-dom'
import {Cardlist} from './components/card-list/card-list.component'
import { Search } from './components/searchcomponent/search'

class App extends Component{
  constructor(){
    super();

    this.state = {monstor : [],
      searchfield : ''
  }}

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monstor:user}))
  }
  render(){
    const{monstor , searchfield} = this.state
    const filternew = monstor.filter(monstors=>monstors.name.toLowerCase().includes(searchfield.toLowerCase()))
    return(
      <div>
        {/* <input  type='search' placeholder='Search HERE' onChange={e=> this.setState({searchfield:e.target.value})}    /> */}
       <h1 className='fontfamily'>Monstor Rolodox</h1>
        <Search 
        placeholder='Search HERE'
        handle={e=> this.setState({searchfield:e.target.value})}
         />
         <Cardlist monstor={filternew}>
     
        </Cardlist></div>
    )
  }
  
}

export default App
