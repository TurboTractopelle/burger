import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems =(props)=> {
return (
    <nav>
        <ul className={classes.NavigationItems}>
            <NavigationItem link={"a"} active>Burger Builder</NavigationItem>
            <NavigationItem link={"a"}>Checkout</NavigationItem>
        </ul>
    </nav>        
    );
}

export default navigationItems;