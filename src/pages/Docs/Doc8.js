import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc8 = () => {
    return (
        <>
            <Buttons prevLink="/references/co-authered-by-in-git-commit" nextLink="/references/concept-of-git-co-commit" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Dependencies used</h1>
                <p className={classes.Para}>Git co commit need two npm package and one external npm package which are,</p>
                <p className={classes.List}>1. child_process</p>
                <p className={classes.List}>2. os</p>
                <p className={classes.List}>3. prompt-sync</p>
                <p className={classes.Para}><b>child_process:</b> Used to execute the command on different terminals by using JavaScript programming. </p>
                <p className={classes.Para}><b>os:</b> Used to fetch the operating system the program is running.</p>
                <p className={classes.Para}><b>prompt-sync:</b>  Used to get the input from the user. It is the external npm package we need to install separately. </p>
            </div>
            <Buttons prevLink="/references/co-authered-by-in-git-commit" nextLink="/references/concept-of-git-co-commit" />
        </>
    )
}

export default Doc8;
