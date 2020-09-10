import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc3 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/why-do-we-need-pair-programming" nextLink="/get-started/installing-node-js" />
            <div className={classes.Content}>
                <h1>What is git co commit?</h1>
            </div>
            <Buttons prevLink="/get-started/why-do-we-need-pair-programming" nextLink="/get-started/installing-node-js" />
        </>
    )
}

export default Doc3;
