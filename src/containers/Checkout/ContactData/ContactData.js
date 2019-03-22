import React, {Component} from 'react'
import classes from './ContactData.css'
import Button from "../../../components/UI/Button/Button"
import Input from "../../../components/UI/Input/Input"
import axios from "../../../axios-order"
import {connect} from "react-redux"

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
                    valid:false,                    
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
                value:"fast", // besoin de préciser, sinon dans UI on voit une sélection, et à la validation il est est true en +
                validation: {
                    valid:true,                    
                    required:true
                }                
            },          

        },
        formIsValid : false,
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


    checkFormValidity= (orderForm, value, id, validation)=>{

        // TODO refaire ici le test de validation pour avoir la dernière valeur de la validité de l id
        let formIsValidArr = [];

        for(let data in orderForm ){
            formIsValidArr.push(orderForm[data].validation.valid)
        }
        return !formIsValidArr.some((e)=>e===false)

    }


    inputChangeHandler = (id) => (e)=> {
        const value = e.target.value

        this.setState(prevState => {
   
            return({
            ...prevState, 
                orderForm: {...prevState.orderForm, 
                                [id] : {...prevState.orderForm[id], 
                                        validation : {...prevState.orderForm[id].validation, valid: this.checkValidity(value, prevState.orderForm[id].validation)},
                                        value}
                            },
            formIsValid : this.checkFormValidity(prevState.orderForm, value, id, prevState.orderForm[id].validation)
        })
        
        })

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
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: formData 
        }


            axios.post("/orders.json" , order)
            .then(resp=> {
                console.log(resp)
                this.setState(prevState=>({...prevState, loading:false, purchasing:false}))
                this.props.history.push({
                    pathname : "/"
                });
                console.log("gg")
            })
            //.catch(error => console.log("catched"))


    }

    componentDidMount(){
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
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>                
                </form>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return({
        totalPrice : state.totalPrice,
        ingredients: state.ingredients
    })
}


export default connect(mapStateToProps)(ContactData)