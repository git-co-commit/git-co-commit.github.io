import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';
import PairRole from '../../img/git-co-commit-pairing-role.webp';

const Doc1 = () => {
    return (
        <>
            <Buttons nextLink='/get-started/why-do-we-need-pair-programming' />
            <div className={classes.Content}>
                <h1 className={classes.Title}>What is pair programming?</h1>
                <p className={classes.Para}>Pair programming involves two developers writing code together by sharing the single system. A pair of developers not only write the code but also plan and discuss their work.</p>
                <p className={classes.Para}>In a pair of developers, one can be a driver and other can be a navigator. A driver is the person who types the code. He should always talk through what he is doing while doing it. A navigator is a person who observes the code. He reviews the code, gives direction and shares thoughts while the driver writes the code.</p>
                <img src={PairRole} className={classes.Image} alt='Roles in Pairing' />
                <p className={classes.Para}>The idea of the pair division is to have two different perspectives on the code. The driver should always focus on completing the code. The navigator should always focus on bugs and larger issues. Both of the developers have the big picture in mind at the end.</p>
            </div>
            <Buttons nextLink='/get-started/why-do-we-need-pair-programming' />
        </>
    )
}

export default Doc1;
