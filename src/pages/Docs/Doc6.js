import React from 'react';
import { Link } from 'react-router-dom';

import Buttons from '../../Layout/Buttons/Buttons';

import NodeSetup from '../../img/git-co-commit-node-setup.webp';
import PackageJson from '../../img/git-co-commit-package-json.webp';
import NpmGit from '../../img/git-co-commit-npm-git.webp';

import classes from './Docs.module.css';

const Doc6 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/installing-using-git-co-commit" nextLink="/references/co-authered-by-in-git-commit" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Setup git co commit for node project</h1>
                <p className={classes.Para}>Before installing git co commit package ensure that, you have installed the Node js correctly. If not, Please read the <Link to="/get-started/installing-node-js">previous page</Link>.</p>
                <h3 className={classes.SubTitle}>To setup do the following steps</h3>
                <p className={classes.Para}>1. Create a folder and then open the folder in cmd or bash</p>
                <p className={classes.Para}>2. Run npm init -y</p>
                <p className={classes.Para}>3. Run npm i git-co-commit</p>
                <img className={classes.CmdImage} src={NodeSetup} alt="Setup node project" />
                <p className={classes.Para}>4. Add the following in package.json file under scripts</p>
                <code className={classes.Code}>
                    {`"scripts": {
                        "commit": "commit"
                    }`}
                </code>
                <img className={classes.CmdImage} src={PackageJson} alt="Package.json" />
                <p className={classes.Para}>5. Run git init</p>
                <p className={classes.Para}>6. Add index.html file</p>
                <p className={classes.Para}>7. Run git add index.html</p>
                <p className={classes.Para}>8. Run npm run commit - it will ask for commit message after that it will ask pairs username separate by comma (Author name doesn’t need to be included).</p>
                <img className={classes.CmdImage} src={NpmGit} alt="Npm run commit" />
            </div>
            <Buttons prevLink="/get-started/installing-using-git-co-commit" nextLink="/references/co-authered-by-in-git-commit" />
        </>
    )
}

export default Doc6;
