import React from 'react';
import classes from "./Input.css"

const Input =(props)=> {
let inputElement = null

switch(props.inputtype){  
    case 'input':
        inputElement = <input className={classes.InputElement} {...props} value={props.value}/>
        break
    case 'textarea' :
        inputElement = <textarea {...props}/>
        break
        case 'select' :
        inputElement = <select className={classes.InputElement} value={props.value}>{props.options.map(option=> <option value={option.value}>{option.display}</option>)} </select>
        break        
    default:
    inputElement = <input className={classes.InputElement} {...props} value={props.value}/>
}

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;