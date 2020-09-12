import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';
import Pairing from '../../img/git-co-commit-pairing.webp'

const Doc2 = () => {
    return (
        <>
            <Buttons prevLink='/get-started/what-is-pair-programming' nextLink='/get-started/what-is-git-co-commit' />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Why do we need pair programming?</h1>
                <p className={classes.Para}><b>Less bugs:</b> If the driver encounters a bug with the code, there will be two of them who’ll solve the problem. It will reduce the bugs in the overall product and will result in better code.</p>
                <p className={classes.Para}><b>Improve interpersonal skills:</b> Pair programming involves a collaborative way of working which will improve a lot of communication and teamwork. Pair programming not only improves programming skills, but can also help programmers develop their interpersonal skills.</p>
                <p className={classes.Para}><b>Better knowledge sharing:</b> While a pair of developers work on the same code, it helps them exchange their  knowledge and accept certain best practices. Different experiences and perspectives will lead to the consideration of more alternatives.</p>
                <img className={[classes.Image, classes.ImageBorder].join(' ')} src={Pairing} alt="Pairing benefits" />
                <p className={classes.Para}>In a pair, when one of them leaves the project or the company, it will not kill the project. The other in the pair can always take it up and finish it. It is good to switch pairs frequently, to keep everyone working on the project up to date.</p>
            </div>
            <Buttons prevLink='/get-started/why-we-need-pair-programming' nextLink='/get-started/what-is-git-co-commit' />
        </>
    )
}

export default Doc2;
