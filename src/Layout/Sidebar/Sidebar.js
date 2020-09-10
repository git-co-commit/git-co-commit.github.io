import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <Link to='/get-started' className={classes.Head}>Getting started</Link>
            <Link to='/get-started/what-is-pair-programming' className={classes.Body}>What is pair programming?</Link>
            <Link to='/get-started/why-do-we-need-pair-programming' className={classes.Body}>Why do we need pair programming?</Link>
            <Link to='/get-started/what-is-git-co-commit' className={classes.Body}>What is git co commit?</Link>
            <Link to='/get-started/installing-node-js' className={classes.Body}>Installing node js</Link>
            <Link to='/get-started/installing-using-git-co-commit' className={classes.Body}>Installing and using git co commit</Link>
            <Link to='/get-started/setup-git-co-commit-for-node-project' className={classes.Body}>Setup git co commit for node project</Link>
            <Link to='/references' className={classes.Head}>References</Link>
            <Link to='/references/co-authered-by-in-git-commit' className={classes.Body}>Co authored by in git commit</Link>
            <Link to='/references/dependencies-used' className={classes.Body}>Dependencies used</Link>
            <Link to='/references/concept-of-git-co-commit' className={classes.Body}>Concept of git co commit</Link>
        </div>
    )
}

export default Sidebar;
