import React, {Component} from 'react'
import classes from './ContactData.css'
import Button from "../../../components/UI/Button/Button"
import Input from "../../../components/UI/Input/Input"

class ContactData extends Component {

    state ={
        name :'',
        email : '',
        adress: {
            street : "",
            postal : ''
        }
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Your data</h4>
                <form>
                    <Input inputType="input" type="input" name="name" placeholder="your name" />
                    <Input inputType="input" type="email" name="email" placeholder="your email" />
                    <Input inputType="input" type="text" name="street" placeholder="your street" />
                    <Input inputType="input" type="text" name="postal" placeholder="your postal" />


                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }

}

export default ContactData