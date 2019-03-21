import React, {Component} from 'react'
import classes from './ContactData.css'
import Button from "../../../components/UI/Button/Button"
import Input from "../../../components/UI/Input/Input"
import axios from "../../../axios-order"

class ContactData extends Component {

    state ={
        orderForm : {
            name :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "your name"
                },
                value:"",
                validation: {
                    required:true
                }
            },
            street :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "your street"
                },
                value:"",
                validation: {
                    valid:false,
                    required:true
                }            
            },
            zip :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "zip"
                },
                value:"",
                validation: {
                    valid:false,                    
                    required:true,
                    minLength : 3,
                    maxLength : 5
                }               
            },
            country :{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "country"
                },
                value:"",
                validation: {
                    valid:false,                    
                    required:true
                }                
            },
            email :{
                elementType: "email",
                elementConfig: {
                    type:"text",
                    placeholder: "email"
                },
                value:"",
                validation: {
                    valid:false,                    
                    required:true
                }                
            },
            deliveryMethod :{
                elementType: "select",
                elementConfig: {
                    options: [
                        {value:"fast", display:"Fast"},
                        {value:"cheap", display:"Cheap"},
                    ]
                },
                value:"",
                validation: {
                    valid:true,                    
                    required:true
                }                
            },          

        },
        ingredients: [],
        loading:false
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

    inputChangeHandler = (id) => (e)=> {
        const value = e.target.value

        this.setState(prevState => ({
            ...prevState, 
                orderForm: {...prevState.orderForm, 
                                [id] : {...prevState.orderForm[id], 
                                        validation : {...prevState.orderForm[id].validation, valid: this.checkValidity(value, prevState.orderForm[id].validation)},
                                        value}}
        }))

    }

    orderHandler= (e)=>{
        e.preventDefault();
        this.setState({loading:true})
        
        const formData = {}
        for(let data in this.state.orderForm)
        {
            formData[data] = this.state.orderForm[data].value
        }

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: formData 
        }

        setTimeout(()=>{

            axios.post("/orders.json" , order)
            .then(resp=> {
                console.log(resp)
                this.setState(prevState=>({...prevState, loading:false, purchasing:false}))
                this.props.history.push({
                    pathname : "/"
                });
            })
            .catch(error => console.log("catched"))
        },500)

    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        for (let param of query.entries()){
            // [ "salad", "0" ]
            ingredients[param[0]] = param[1]
        }
        this.setState({ingredients: ingredients})
    }

    render(){


       return(
            <div className={classes.ContactData}>
                <h4>Your data</h4>
                <form onSubmit={this.orderHandler}>

                {Object.entries(this.state.orderForm).map((input,i) => {
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
                }

                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }

}

export default ContactData