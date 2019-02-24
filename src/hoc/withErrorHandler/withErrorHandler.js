import React from 'react';
import Aux from '../Aux2/Aux2'
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler = wrappedComponent=> {

return (props)=> {
    return(
        <Aux>
            <Modal testShow>error</Modal>
            <wrappedComponent {...props} />
        </Aux>
    )
    }


}

export default withErrorHandler;




