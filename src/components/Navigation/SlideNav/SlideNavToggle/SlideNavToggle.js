import React from 'react';
import classes from './SlideNavToggle.css'

const SlideNavToggle = (props) => {

return(
    <div onClick={props.showMenuHandler} className={classes.SlideNavToggle}>
        MENU
    </div>
)
}

export default SlideNavToggle;