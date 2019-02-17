import React from 'react';
import Aux from '../../hoc/Aux2';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css';

const Layout =(props)=>{
    return(
        <Aux>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;