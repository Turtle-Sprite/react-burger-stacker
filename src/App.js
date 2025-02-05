import React, {Component} from "react";
import IngredientList from "./Components/IngredientList";
import BurgerList from "./Components/BurgerList";
import './index.css'

export default class App extends Component {
  state = {
    addIngredients: [''],
    // ingredientsArray: [...ingredientsArray]
  }

  handleAddIngredient = (filter) => {
    console.log('this is an ingredient', filter)
    this.setState(prevState => {
      return {
        addIngredients: [filter, ...prevState.addIngredients]
      }
    })
  }
  handleClearBurger = () => {
    console.log('burger clear')
    this.setState({
      addIngredients: []
    })
  }

  render() {
    const ingredients = [
      {name: 'Burger Bun', color: 'brown'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Crabby patty', color: 'brown'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'},
      {name: 'Cheese', color: 'lightyellow'},
      {name: 'secret sauce', color: 'red'}
    ]
    return (
      <>
      <div className="container">
        <div className="header"><h1>Make Your Own Burger!</h1></div>
        <div className="Ingredients-Panel">
          <IngredientList ingredients={ingredients} handleAddIngredient={this.handleAddIngredient}/>
        </div>
        <div className="Burger-Panel">
          <BurgerList addIngredients={this.state.addIngredients} 
                      clearBurger={this.handleClearBurger}
          />
        </div>
        </div>
      </>
    )
  }
}
