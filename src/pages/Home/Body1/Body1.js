import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/gitcocommit.webp';
import classes from './Body1.module.css';

const Body1 = () => {
    return (
        <div className={classes.Body}>
            <div className={classes.Content}>
                <h1 className={classes.Heading}>Commit with multiple authors in fast & simple way</h1>
                <p className={classes.Para}>Install git-co-commit package to use just a single commit to add all the team members that worked in the project as co-authors.</p>
                <div className={classes.Btns}>
                    <Link to='/get-started' className={[classes.Btn, classes.Start].join(' ')}>Get started</Link>
                    <Link to='/get-started/installing-using-git-co-commit' className={[classes.Btn, classes.Download].join(' ')}>Download</Link>
                </div>
            </div>
            <div className={classes.Image}>
                <img src={Logo} className={classes.Logo} alt='Git co commit' />
            </div>
        </div>
    )
}

export default Body1;
