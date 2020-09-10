import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc1 = () => {
    return (
        <>
            <Buttons nextLink='/get-started/why-we-need-pair-programming' />
            <div className={classes.Content}>
                <h1>What is pair programming?</h1>
            </div>
            <Buttons nextLink='/get-started/why-we-need-pair-programming' />
        </>
    )
}

export default Doc1;
