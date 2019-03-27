import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input"
import classes from "./Auth.css"

class Auth extends Component {

state ={
    controls:{
        email :{
            elementType: "email",
            elementConfig: {
                type:"text",
                placeholder: "email"
            },
            value:"",
            validation: {
                valid:false,                    
                required:false,
                touched:false
            }                
        },
        password :{
            elementType: "input",
            elementConfig: {
                type:"text",
                placeholder: "password"
            },
            value:"",
            validation: {
                valid:false,                    
                required:false,
                touched:false,
                minLength:6
            }                
        },

}
}


inputChangeHandler = (id) => (e) => {
    const value = e.target.value

    this.setState(prevState => {

        return({
        ...prevState, 
            controls: {...prevState.controls, 
                            [id] : {...prevState.controls[id], 
                                    validation : {...prevState.controls[id].validation, touched:true, valid: this.checkValidity(value, prevState.controls[id].validation)},
                                    value}
                        },
        formIsValid : this.checkFormValidity(prevState.controls)
    })
    
    })

}

checkValidity = (value, rules)=> {
    let isValid = true 

    if(rules.required){
        isValid = value.trim() !== "" && isValid
    }

    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid
    }

    return isValid
}


checkFormValidity= (orderForm)=>{

    // TODO refaire ici le test de validation pour avoir la dernière valeur de la validité de l id
    let formIsValidArr = [];

    for(let data in orderForm ){
        formIsValidArr.push(orderForm[data].validation.valid)
    }
    return !formIsValidArr.some((e)=>e===false)

}


render() {


const form = (
Object.entries(this.state.controls).map((input,i) => {
    const id = input[0]

    return <Input 
        inputtype={input[1].elementType} 
        elementConfig={input[1].elementConfig} 
        pvalue={input[1].value} 
        changed={this.inputChangeHandler(id)} 
        valid={input[1].validation.valid}
        key={id} 
        />
    })
)



    return (
        <div className={classes.ContactData}>
            <form>
                {form}
                <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>                
            </form>
        </div>
    );
}
}

export default Auth;