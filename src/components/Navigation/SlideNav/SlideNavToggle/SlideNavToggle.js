import React from 'react';
import classes from './SlideNavToggle.css'

const SlideNavToggle = (props) => {

return(
    <div onClick={props.showMenuHandler} className={classes.SlideNavToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
}

export default SlideNavToggle;