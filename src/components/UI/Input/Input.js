import React from 'react';
import classes from "./Input.css"

const Input =(props)=> {


const valid = props.valid ? classes.Valid : null;

let inputElement = null

switch(props.inputtype){  
    case 'input':
        inputElement = <input className={[classes.InputElement, valid].join(" ")} {...props.elementConfig} value={props.pvalue} onChange={props.changed}/>
        break
    case 'select' :
        inputElement =  
            <select className={classes.InputElement} value={props.pvalue} onChange={props.changed}>
                {props.elementConfig.options.map(option=> <option key={option.value}>{option.display}</option>)}
            </select>
        break        
    default:
    inputElement = <input className={[classes.InputElement, valid].join(" ")} {...props.elementConfig} value={props.pvalue} onChange={props.changed}/>
}

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;