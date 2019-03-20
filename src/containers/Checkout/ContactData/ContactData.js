import React, {Component} from 'react'
import classes from './ContactData.css'
import Button from "../../../components/UI/Button/Button"
import Input from "../../../components/UI/Input/Input"

class ContactData extends Component {

    state ={
        orderForm : {
            name :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "your name"
                },
                value:""
            },
            street :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "your street"
                },
                value:""                
            },
            zip :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "zip"
                },
                value:"54"                
            },
            country :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "country"
                },
                value:""                
            },
            email :{
                elementType: "email",
                elementConfig: {
                    type:"text",
                    placeholder: "email"
                },
                value:""                
            },
            deliveryMethod :{
                elementType: "select",
                elementConfig: {
                    options: [
                        {value:"fast", display:"Fast"},
                        {value:"cheap", display:"Cheap"},
                    ]
                },
                value:""                
            },          

        },
        loading:false
    }

    inputChangeHandler = (id) => (e)=> {
        const value = e.target.value

        this.setState(prevState => ({
            ...prevState, 
                orderForm: {...prevState.orderForm, 
                                [id] : {...prevState.orderForm.name, 
                                        value}}
        }))

    }

    render(){

       return(
            <div className={classes.ContactData}>
                <h4>Your data</h4>
                <form>

                {Object.entries(this.state.orderForm).map((input,i) => {
                    const id = input[0]
                    return <Input 
                        inputtype={input[1].elementType} 
                        elementConfig={input[1].elementConfig} 
                        pvalue={input[1].value} 
                        changed={this.inputChangeHandler(id)} 
                        key={id} 
                        />
                    })
                }

                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }

}

export default ContactData