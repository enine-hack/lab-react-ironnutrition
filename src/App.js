import React from 'react';
import './App.css';
import Foodbox from './FoodBox';
import foods from './foods.json';

class App extends React.Component {
  state = {
    foods: foods
  }
  render () {
    return (
      <div className="App">
        {this.state.foods.map(food => (
          <div key={food.name}><Foodbox {...food}/></div>
        ))}
        <Foodbox />
      </div>
    );
  }
 
}

export default App;
