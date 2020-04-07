import React, { Component } from "react";
import Cardlist from "./Cardlist";
import {robots} from './robots.js';
import Searchbox from './Searchbox';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    
    }

 
    onSearchChange = (event) => {

      this.setState({searchfield: event.target.value});

    }

    render(){
        const filterRobots = this.state.robots.filter(robots => { return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
        return (
        <div className='tc'>
        <h1 className="f1">Alistair's RoboFriends Project</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Cardlist robots={filterRobots} />
      </div>
    );
  }
}


export default App;