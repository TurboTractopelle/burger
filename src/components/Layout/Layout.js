import React from 'react';
import Aux from '../../hoc/Aux2';
import classes from './Layout.css';

const Layout =(props)=>{
    return(
        <Aux>
            <div>
                layout, sideDrawer, Backdrop
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;