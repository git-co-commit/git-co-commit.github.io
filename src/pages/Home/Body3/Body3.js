import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Body3.module.css';

const Body3 = () => {
    return (
        <div className={classes.Body}>
            <h1 className={classes.Title}>Install Git Co Commit Today</h1>
            <h2 className={classes.SubTitle}>It's free and open source</h2>
            <Link className={classes.Button} to='/get-started'>Get started</Link>
        </div>
    );
}

export default Body3;
