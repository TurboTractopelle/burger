import React from 'react';
import classes from './SlideNav.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux2/Aux2'

const slideNav =(props)=> {
return (
        <Aux>
        <div className={[classes.SlideNav, props.showMenu ? classes.Open : classes.Close].join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        <BackDrop testShow={props.showBackdrop} closeModal={props.closeModal} />
        </Aux>
    );
}

export default slideNav;