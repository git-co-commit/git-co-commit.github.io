import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <Link to='/get-started' className={classes.Head}>Getting started</Link>
            <Link to='/get-started' className={classes.Body}>What is pair programming?</Link>
            <Link to='/get-started' className={classes.Body}>Why we need pair programming?</Link>
            <Link to='/get-started' className={classes.Body}>What is git co commit?</Link>
            <Link to='/get-started' className={classes.Body}>Installing node js</Link>
            <Link to='/get-started' className={classes.Body}>Installing and using git co commit</Link>
            <Link to='/get-started' className={classes.Body}>Setup git co commit for node project</Link>
            <Link to='/get-started' className={classes.Head}>References</Link>
            <Link to='/get-started' className={classes.Body}>Co authored by in git commit</Link>
            <Link to='/get-started' className={classes.Body}>Dependencies used</Link>
            <Link to='/get-started' className={classes.Body}>Concept of git co commit</Link>
        </div>
    )
}

export default Sidebar;
