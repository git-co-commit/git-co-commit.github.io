import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc4 = () => {
    return (
        <>
            <Buttons prevLink="/get-started/what-is-git-co-commit" nextLink="/get-started/installing-using-git-co-commit" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Installing Node JS</h1>
                <p className={classes.Para}>1. Download Node js installer from the <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">official website</a> as per the operating system(OS).</p>
                <p className={classes.Para}>2. Run the downloaded Node js installer - including accepting license, selecting destination and authentication for installation.</p>
                <p className={classes.Para}>3. To ensure Node js has been installed successfully run the following command in cmd or bash</p>
                <code className={classes.Code}>node -v</code>
                <p className={classes.Para}>4. To ensure npm (Node Package Manager) has been added with node js successfully run the following command in cmd or bash</p>
                <code className={classes.Code}>npm -v</code>
            </div>
            <Buttons prevLink="/get-started/what-is-git-co-commit" nextLink="/get-started/installing-using-git-co-commit" />
        </>
    )
}

export default Doc4;
