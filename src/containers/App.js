import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
//import {robots} from './robots.js';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users})});

    }
 
    onSearchChange = (event) => {

      this.setState({searchfield: event.target.value});

    }
    
    render(){
      const {robots, searchfield} = this.state;
      const filterRobots = robots.filter(robot => { 
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })
      
      if(!robots.length){
        return <h1 className="tc f1">Loading</h1>
      }
      else{
          return (
            <div className='tc'>
            <h1 className="f1">Alistair's RoboFriends Project</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
              <Cardlist robots={filterRobots} />
              </ErrorBoundry>
            
            </Scroll>
          </div>
  );  
  }
    
  }
}


export default App;