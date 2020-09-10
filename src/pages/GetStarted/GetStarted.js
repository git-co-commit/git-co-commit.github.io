import React from 'react';
import { Switch, Route } from 'react-router';

import classes from './GetStarted.module.css'

import Sidebar from '../../Layout/Sidebar/Sidebar';

// Importing Docs pages
import Doc1 from '../Docs/Doc1';
import Doc2 from '../Docs/Doc2';
import Doc3 from '../Docs/Doc3';
import Doc4 from '../Docs/Doc4';
import Doc5 from '../Docs/Doc5';
import Doc6 from '../Docs/Doc6';

const GetStarted = () => {
    return (
        <div className={classes.Docs}>
            <div className={classes.Sidebar}>
                <Sidebar />
            </div>
            <div className={classes.Content}>
                <Switch>
                    <Route exact path='/get-started/what-is-pair-programming' component={Doc1} />
                    <Route exact path='/get-started/why-we-need-pair-programming' component={Doc2} />
                    <Route exact path='/get-started/what-is-git-co-commit' component={Doc3} />
                    <Route exact path='/get-started/installing-node-js' component={Doc4} />
                    <Route exact path='/get-started/installing-using-git-co-commit' component={Doc5} />
                    <Route exact path='/get-started/setup-git-co-commit-for-node-project' component={Doc6} />
                    <Route path='/get-started' component={Doc1} />
                </Switch>
            </div>
        </div>
    )
}

export default GetStarted;
