import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import BeforePairing from '../../img/git-co-commit-before-gitpair.png';
import AfterPairing from '../../img/git-co-commit-after-gitpair.png';

import classes from './Docs.module.css';

const Doc3 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/why-do-we-need-pair-programming" nextLink="/get-started/installing-node-js" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>What is git co commit?</h1>
                <p className={classes.Para}>When a pair or multiple developers work on git projects, there is a convention that allows us to document our co-authors in the commit message. However, adding the co-authorship information on every single commit is painful.</p>
                <p className={classes.Para}>Do a git commit as normal with  the pair members username, to make them get credit for the commit (if more than one member works on the same code, separate the username by comma). The author name(who writes code - Driver) on the commit added automatically.</p>
                <p className={classes.Para}>Each co-author will be added to the commit message, so that they are also credited in the github contributions view!</p>
                <h3 className={classes.SubTitle}>Before Pairing</h3>
                <img className={classes.LenImage} src={BeforePairing} alt="Before Pairing" />
                <h3 className={classes.SubTitle}>After Pairing</h3>
                <img className={classes.LenImage} style={{ width: "100%" }} src={AfterPairing} alt="After Pairing" />
            </div>
            <Buttons prevLink="/get-started/why-do-we-need-pair-programming" nextLink="/get-started/installing-node-js" />
        </>
    )
}

export default Doc3;
