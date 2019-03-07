import React, { Component } from 'react';
import Order from "../../components/Order/Order"
import axios from "../../axios-order"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

class Orders extends Component{

state={orders:[], loading: true}

    componentDidMount(){
        axios.get("/orders.json")
        .then(res => {
            const fetchOrders = [];

            for (let key in res.data){
                fetchOrders.push( {...res.data[key], id:key} )
            }
            this.setState(prevState => ({...prevState, orders: fetchOrders, loading:false }))

        })
        .catch(err => console.log(err))
        
    }

render(){
    return(
        <div>
            {this.state.orders.map( item=>{
               return <Order key={item.id} {...item} />
            })}             
        </div>
    )
}

}

export default withErrorHandler(Orders, axios)