import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc2 = () => {
    return (
        <>
            <Buttons prevLink='/get-started/what-is-pair-programming' nextLink='/get-started/what-is-git-co-commit' />
            <div className={classes.Content}>
                <h1>Why do we need pair programming?</h1>
            </div>
            <Buttons prevLink='/get-started/why-we-need-pair-programming' nextLink='/get-started/what-is-git-co-commit' />
        </>
    )
}

export default Doc2;
