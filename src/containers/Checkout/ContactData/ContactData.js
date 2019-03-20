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

    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Your data</h4>
                <form>

                {Object.entries(this.state.orderForm).map(input => <Input inputtype={input[1].elementType} {...input[1].elementConfig} value={input[1].value} />) }

                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }

}

export default ContactData