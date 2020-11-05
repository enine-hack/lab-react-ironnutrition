import React from 'react';
import './App.css';
import Foodbox from './FoodBox';
import foods from './foods.json';
import Addfood from './Addfood';
import Search from './Search'


class App extends React.Component {
  state = {
    foods: foods,
    showform: false,
    query:''

  }

  addFoodHandler = (newfood) => {
    const foodsCopy = [...this.state.foods]; // copy!
    console.log('newfood=',newfood)
    foodsCopy.push(newfood)

    this.setState({
      foods: foodsCopy
    
    })

  }
  
  handlerChange = (event) => {
    this.setState({
       query:event.target.value
    })
}

  render () {
    return (
      <div>
        <Search search={this.handlerChange} query={this.state.query}/>
        <button onClick={(event) => {
          this.setState({
            showform: !this.state.showform
          })

        }}>Add New Food</button>

        {this.state.showform && <Addfood addNewFood= {this.addFoodHandler} />}

        

        <div className="App">
          {this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.query)).map(food => (
            <div key={food.name}><Foodbox {...food}/></div>
          ))}
          
        </div>
      </div>
    );
  }
 
}

export default App;
