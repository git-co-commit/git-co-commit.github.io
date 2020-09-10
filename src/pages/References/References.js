import React from 'react';
import { Switch, Route } from 'react-router';

import classes from '../GetStarted/GetStarted.module.css'

import Sidebar from '../../Layout/Sidebar/Sidebar';

// Importing Docs pages
import Doc7 from '../Docs/Doc7';
import Doc8 from '../Docs/Doc8';
import Doc9 from '../Docs/Doc9';

const GetStarted = () => {
    return (
        <div className={classes.Docs}>
            <div className={classes.Sidebar}>
                <Sidebar />
            </div>
            <div className={classes.Content}>
                <Switch>
                    <Route exact path='/references/co-authered-by-in-git-commit' component={Doc7} />
                    <Route exact path='/references/dependencies-used' component={Doc8} />
                    <Route exact path='/references/concept-of-git-co-commit' component={Doc9} />
                    <Route path='/references' component={Doc7} />
                </Switch>
            </div>
        </div>
    )
}

export default GetStarted;
