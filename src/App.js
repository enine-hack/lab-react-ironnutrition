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

  }

  addFoodHandler = (newfood) => {
    const foodsCopy = [...this.state.foods]; // copy!
    console.log('newfood=',newfood)
    foodsCopy.push(newfood)

    this.setState({
      foods: foodsCopy
    
    })

  }
  searchHandler = (newsearch) => {
    console.log('new search = ',newsearch)
    let foodsCopy = [...this.state.foods];
    console.log('foods copy 1=  ', foodsCopy)
    foodsCopy = foodsCopy.filter(el => el["name"].includes(newsearch))
    console.log('foods copy =  ', foodsCopy)
    this.setState({
      foods: foodsCopy
    
    })
    
  }

  render () {
    return (
      <div>
        <Search search={this.searchHandler}/>
        <button onClick={(event) => {
          this.setState({
            showform: !this.state.showform
          })

        }}>Add New Food</button>

        {this.state.showform && <Addfood addNewFood= {this.addFoodHandler} />}

        

        <div className="App">
          {this.state.foods.map(food => (
            <div key={food.name}><Foodbox {...food}/></div>
          ))}
          
        </div>
      </div>
    );
  }
 
}

export default App;
