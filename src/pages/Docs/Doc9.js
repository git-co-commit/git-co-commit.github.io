import React from 'react';

import Buttons from '../../Layout/Buttons/Buttons';

import classes from './Docs.module.css';

const Doc9 = () => {
    return (
        <>
            <Buttons prevLink="/references/dependencies-used" />
            <div className={classes.Content}>
                <h1 className={classes.Title}>Concept of git co commit</h1>
                <p className={classes.Para}>1. Commit message and co-authors username are getting from the user by using the <b>prompt-sync</b> package. If more than one co-authors, the username must be separated by comma.</p>
                <p className={classes.Para}>2. After fetching input from the user, emailId of co-authors are generated <span className={classes.SpecialText}>(username.users.noreply@github.com)</span>.</p>
                <p className={classes.Para}>3. By using the <b>os</b> package,  the type of operating system the program is running is fetched.</p>
                <p className={classes.Para}>4. Depends upon the operating system, the below git commit command is generated.</p>
                <code className={classes.Code}>
                    git commit -m "Refactor usability tests <br />
                    {'>'}<br />
                    {'>'}<br />
                    Co-authored-by: name {`<name@example.com>`}<br />
                    Co-authored-by: another-name {'<another-name@example.com>'}"
                </code>
                <p className={classes.Para}>5. By using the <b>child_process</b> package, the command is running in the bash or PowerShell based on the operating system.</p>
            </div>
            <Buttons prevLink="/references/dependencies-used" />
        </>
    )
}

export default Doc9;
