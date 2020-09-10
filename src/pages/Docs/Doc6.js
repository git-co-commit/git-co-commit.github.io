import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc6 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/installing-using-git-co-commit" nextLink="/references/co-authered-by-in-git-commit" />
            <div className={classes.Content}>
                <h1>Setup git co commit for node project</h1>
            </div>
            <Buttons prevLink="/get-started/installing-using-git-co-commit" nextLink="/references/co-authered-by-in-git-commit" />
        </>
    )
}

export default Doc6;
