import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc4 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/what-is-git-co-commit" nextLink="/get-started/installing-using-git-co-commit" />
            <div className={classes.Content}>
                <h1>Installing Node JS</h1>
            </div>
            <Buttons prevLink="/get-started/what-is-git-co-commit" nextLink="/get-started/installing-using-git-co-commit" />
        </>
    )
}

export default Doc4;
