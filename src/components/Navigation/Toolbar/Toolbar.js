import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SlideNav from '../SlideNav/SlideNav'

const toolbar =(props)=> {
return (
        <header className={classes.Toolbar}>
            <div onClick={props.showMenuHandler}>MENU</div>
          
            <Logo />

            <SlideNav showMenu={props.showMenu} />
            <nav className={classes.nav}>
                <NavigationItems />
            </nav>
            
        </header>
    );
}

export default toolbar;