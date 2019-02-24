import React, {Component} from 'react';
import Aux from '../Aux2/Aux2'
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler = (WrappedComponent, axios) => {

return class extends Component {

    state = {error :false}

    componentDidMount(){

        axios.interceptors.request.use(res => res,
            error => {
                this.setState(error)
                return error
            })
            
    }

    closeModalHandler = () => {
        this.setState({error:false})
    }

    render(){
    return(
        <Aux>
            {this.state.error ? 
            <Modal testShow  closeModal={this.props.closeModalHandler}>error</Modal> 
            : null
            }
            <WrappedComponent {...this.props} />
        </Aux>
    )
    }
}

}

export default withErrorHandler;




