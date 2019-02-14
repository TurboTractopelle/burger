import React from 'react';
import classes from "./Burger.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    console.log(props)
    return(
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>          
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom"/>            
        </div>
    )
}

export default Burger;