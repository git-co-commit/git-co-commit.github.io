import React from 'react';

import classes from './GetStarted.module.css'

import Sidebar from '../../Layout/Sidebar/Sidebar';

const GetStarted = () => {
    return (
        <div className={classes.Docs}>
            <div className={classes.Sidebar}>
                <Sidebar />
            </div>
            <div className={classes.Content}></div>
        </div>
    )
}

export default GetStarted;
