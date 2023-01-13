import React, {Component} from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {
    render() {
        const ingredientArray = this.props.ingredients.map( (ingredient, idx )=> {
            return <Ingredient ingredient={ingredient} handleAddIngredient={this.props.handleAddIngredient} />
        })
        return (
            <>
            <div><h4>Choose Your Ingredients:</h4></div>
            <div>{ingredientArray}</div>
            </>
        )
    }
}