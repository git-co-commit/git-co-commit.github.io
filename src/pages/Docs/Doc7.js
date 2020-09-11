import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc7 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/setup-git-co-commit-for-node-project" nextLink="/references/dependencies-used" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Co authered by in git commit</h1>
                <p className={classes.Para}>You can create a commit with more than one author by adding one or more Co-authored-by trailers to the commit's message. Co-authored commits are visible on GitHub and can be included in the profile contributions graph and the repository's statistics.</p>
                <h3 className={classes.SubTitle}>Creating co-authored commits on the command line</h3>
                <p className={classes.Para}>1. Collect the name and email address for each co-author.</p>
                <p className={classes.Para}>2. Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add two empty lines.</p>
                <code className={classes.Code}>
                    git commit -m "Refactor usability tests <br />
                    {'>'}<br />
                    {'>'}<br />
                </code>
                <p className={classes.Para}>3. On the next line of the commit message, type <span className={classes.SpecialText}>{`Co-authored-by: name <name@example.com>`}</span> with specific information for each co-author. After the co-author information, add a closing quotation mark. If you're adding multiple co-authors, give each co-author their own line and <span className={classes.SpecialText}>Co-authored-by:</span> commit trailer.</p>
                <code className={classes.Code}>
                    git commit -m "Refactor usability tests <br />
                    {'>'}<br />
                    {'>'}<br />
                    Co-authored-by: name {`<name@example.com>`}<br />
                    Co-authored-by: another-name {'<another-name@example.com>'}"
                </code>
            </div>
            <Buttons prevLink="/get-started/setup-git-co-commit-for-node-project" nextLink="/references/dependencies-used" />
        </>
    )
}

export default Doc7;
