import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc9 = () => {
    return (
        <>
            <Buttons prevLink="/references/dependencies-used" />
            <div className={classes.Content}>
                <h1>Concept of git co commit</h1>
            </div>
            <Buttons prevLink="/references/dependencies-used" />
        </>
    )
}

export default Doc9;
