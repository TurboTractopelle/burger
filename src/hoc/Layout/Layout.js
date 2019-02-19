import React, {Component} from 'react';
import Aux from '../Aux2/Aux2';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css';
import SlideNav from '../../components/Navigation/SlideNav/SlideNav'

class Layout extends Component{

    state={
        showMenu:false
    }

    closeModalHandler= ()=> this.setState({showMenu:false})

    showMenuHandler= ()=> this.setState({showMenu:true})

    render(){
    return(
        <Aux>
            <Toolbar showMenuHandler={this.showMenuHandler}/>
            <SlideNav showBackdrop={this.state.showMenu} closeModal={this.closeModalHandler} showMenu={this.state.showMenu} />
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
    )
}}

export default Layout;