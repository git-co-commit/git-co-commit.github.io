import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc8 = () => {
    return (
        <>
            <Buttons prevLink="/references/co-authered-by-in-git-commit" nextLink="/references/concept-of-git-co-commit" />
            <div className={classes.Content}>
                <h1>Dependencies used</h1>
            </div>
            <Buttons prevLink="/references/co-authered-by-in-git-commit" nextLink="/references/concept-of-git-co-commit" />
        </>
    )
}

export default Doc8;
