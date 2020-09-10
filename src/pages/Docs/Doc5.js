import React from 'react';
import { Link } from 'react-router-dom';

import Buttons from '../../Layout/Buttons/Buttons';

import UseGitCoCommit from '../../img/git-co-commit-use.webp'

import classes from './Docs.module.css';

const Doc5 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/installing-node-js" nextLink="/get-started/setup-git-co-commit-for-node-project" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Installing and using git co commit</h1>
                <p className={classes.Para}>Before installing git co commit package ensure that, you have installed the Node js correctly. If not, Please read the <Link to="/get-started/installing-node-js">previous page</Link>.</p>
                <p className={classes.Para}>To install git co commit run the following command in the cmd or bash</p>
                <code className={classes.Code}>npm i -g git-co-commit</code>
                <p className={classes.Para}>It will install the git-co-commit package and add all the dependencies to the root level of your computer.</p>
                <h3 className={classes.SubTitle}>To use the installed git co commit package do the following:</h3>
                <p className={classes.Para}>1. Create a folder and then open the folder in cmd or bash</p>
                <p className={classes.Para}>2. Run git init</p>
                <p className={classes.Para}>3. Add index.html file</p>
                <p className={classes.Para}>4. Run git add index.html</p>
                <p className={classes.Para}>5. Run commit - it will ask for commit message after that it will ask pairs username separate by comma (Author name doesn’t need to be included).</p>
                <img className={classes.CmdImage} src={UseGitCoCommit} alt="Use git-co-commit" />
            </div>
            <Buttons prevLink="/get-started/installing-node-js" nextLink="/get-started/setup-git-co-commit-for-node-project" />
        </>
    )
}

export default Doc5;
