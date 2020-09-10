import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Buttons.module.css';

const Buttons = (props) => {
    return (
        <div className={classes.Btns}>
            {
                props.prevLink ?
                    <Link className={classes.Link} to={props.prevLink}>{'< '}Previous</Link> :
                    <Link to='#'> </Link>
            }
            {props.nextLink && <Link className={classes.Link} to={props.nextLink}>Next{' >'}</Link>}
        </div>
    )
}

export default Buttons;
