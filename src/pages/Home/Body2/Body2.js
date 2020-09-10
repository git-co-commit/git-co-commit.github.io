import React from 'react';
import { Link } from 'react-router-dom';

import Github from '../../../img/github.png';
import class1 from '../Body1/Body1.module.css';
import class2 from './Body2.module.css';

let classes = {
    ...class1,
    ...class2
}

const Body2 = () => {
    return (
        <div className={classes.Body}>
            <div className={classes.Content}>
                <h1 className={classes.Heading}>Collabrate</h1>
                <p className={classes.Para}>Want to collabrate with code and improve the package, complete documentation of of code is available. Click below buttons to view documentation or start improving</p>
                <div className={classes.Btns}>
                    <Link to='/references' className={[classes.Btn, classes.Start].join(' ')} >References</Link>
                    <a href="https://github.com/git-co-commit/git-co-commit" target="_blank" rel="noopener noreferrer" className={[classes.Btn, classes.Download].join(' ')} >
                        <img src={Github} alt="Github" className={classes.Github} /> <span className={classes.View}>View Code</span>
                    </a>
                </div>
            </div>
            <div className={classes.Content}>
                <h1 className={classes.Heading}>Installation</h1>
                <p className={classes.Para}>Install git co commit package using node package manager</p>
                <code className={classes.Code}>
                    <span># Via npm </span>
                    <span>npm i -g git-co-commit</span>
                </code>
            </div>
        </div>
    )
}

export default Body2;
