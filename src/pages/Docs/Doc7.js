import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc7 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/setup-git-co-commit-for-node-project" nextLink="/references/dependencies-used" />
            <div className={classes.Content}>
                <h1>Co authered by in git commit</h1>
            </div>
            <Buttons prevLink="/get-started/setup-git-co-commit-for-node-project" nextLink="/references/dependencies-used" />
        </>
    )
}

export default Doc7;
