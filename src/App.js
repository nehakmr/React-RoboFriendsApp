import React from 'react';

import CardList from './cardcomponent';
import { Robot } from './robots';
import SearchBox from './searchBox'

class App extends React.Component {
    constructor() {
        super();
        this.state ={
            robots : Robot,
            searchField : '' 
            
        }

    }

    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter(ele =>{
            return ele.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>

        </div>
    )
  }
}

export default App;