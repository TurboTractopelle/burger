import React, {Component} from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux2/Aux2'

class modal extends Component {

shouldComponentUpdate(nextProps, nextState){
    return (nextProps.testShow !== this.props.testShow) || (nextProps.children !== this.props.children)
}

    render(){
return (
        <Aux>
        <Backdrop testShow={this.props.testShow} closeModal={this.props.closeModal} />
        <div className={classes.Modal}
            style={{transform: this.props.testShow ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: this.props.testShow ? '1' : '0'
            }}
        >
            {this.props.children}
        </div>
        </Aux>
    );
}
}

export default modal;