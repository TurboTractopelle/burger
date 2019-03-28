import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems =(props)=> {
return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            {props.isAuthenticated
                ? <NavigationItem link="/logout">Logout</NavigationItem>
                : <NavigationItem link="/auth">Auth</NavigationItem> 
            }
        </ul>
    
    );
}

export default navigationItems;