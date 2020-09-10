import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc5 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/installing-node-js" nextLink="/get-started/setup-git-co-commit-for-node-project" />
            <div className={classes.Content}>
                <h1>Installing and using git co commit</h1>
            </div>
            <Buttons prevLink="/get-started/installing-node-js" nextLink="/get-started/setup-git-co-commit-for-node-project" />
        </>
    )
}

export default Doc5;
