import React, { Component } from 'react';
import Order from "../../components/Order/Order"
import axios from "../../axios-order"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import {connect} from "react-redux"
import * as actions from "../../store/actions/order"

class Orders extends Component{

state={orders:[], loading: true}

    componentDidMount(){
        this.props.fetchOrders(this.props.token)       
    }

render(){

    return(
        <div>
            {this.props.error && <p>{this.props.error}</p>}
            {this.props.loading && <p>LOADING...</p>}
            {this.props.orders.length >1 && this.props.orders.map( item=>{
               return <Order key={item.id} {...item} />
            })}             
        </div>
    )
}

}

const mapStateToProps = state => {
    return({
        loading: state.order.loading,
        orders: state.order.orders,
        error: state.order.error,
        token: state.auth.token
    })
}

const dispatchToProps = dispatch => {
    return({
        fetchOrders : (token)=> dispatch(actions.fetchOrders(token))
    })
}



export default connect(mapStateToProps, dispatchToProps)(withErrorHandler(Orders, axios))