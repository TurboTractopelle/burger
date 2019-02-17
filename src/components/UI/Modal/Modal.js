import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux2'

const modal =(props)=> {
return (
        <Aux>
        <Backdrop testShow={props.testShow} closeModal={props.closeModal} />
        <div className={classes.Modal}
            style={{transform: props.testShow ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.testShow ? '1' : '0'
            }}
        >
            {props.children}
        </div>
        </Aux>
    );
}

export default modal;