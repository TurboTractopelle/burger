import React from 'react';
import classes from './Modal.css'

const modal =(props)=> {
    console.log(props.testShow)
return (
        <div className={classes.Modal}
            style={{transform: props.testShow ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.testShow ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    );
}

export default modal;