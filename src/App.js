import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import Orders from "./containers/Orders/Orders"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Auth from "./containers/Auth/Auth"
import Logout from "./containers/Auth/Logout/Logout"
import {connect} from "react-redux"
import * as actions from "./store/actions/auth"

class App extends Component {


  componentDidMount(){
    this.props.authCheckState()
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />            
            <Route path="/auth" component={Auth} />              
            <Route path="/logout" component={Logout} />              
          </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}


const dispatchToProps = dispatch => {
  return({
    authCheckState : ()=> dispatch(actions.authCheckState())
  })
}

export default connect(null,dispatchToProps)(App);
