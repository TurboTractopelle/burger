import React from 'react';
import classes from "./Spinner.css"

const Spinner =(props)=> {
return (
        <div className={classes.ldsDualRing}>
        loading...
        </div>
    );
}

export default Spinner;