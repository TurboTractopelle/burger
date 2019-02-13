import React from 'react';
import Aux from '../../hoc/Aux2';

const Layout =(props)=>{
    return(
        <Aux>
            <div>
                layout, sideDrawer, Backdrop
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;