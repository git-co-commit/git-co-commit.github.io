import React from 'react';

import classes from './Footer.module.css';

import GokulnathP from '../../img/gokulnathp.png';
import Github from '../../img/github.png';
import Npm from '../../img/npm.jpg';

const Footer = () => {
    return (
        <div className={classes.MainFooter}>
            <div className={classes.Footer}>
                <div className={classes.Company}>
                    <a href="http://gokulnathp.github.io/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                        <img src={GokulnathP} className={classes.GokulnathP} alt='GokulnathP' />
                    </a>
                </div>
                <ul className={classes.Docs}>
                    <li className={classes.Head}>Docs</li>
                    <li className={classes.Item}>User Guide</li>
                    <li className={classes.Item}>References</li>
                </ul>
                <ul className={classes.References}>
                    <li className={classes.Head}>Repositories</li>
                    <li className={classes.Item}>
                        <a href="https://github.com/GokulnathP/git-co-commit" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                            <img src={Github} className={classes.Github} alt="Github" /> <span>Github</span>
                        </a>
                    </li>
                    <li className={classes.Item}>
                        <a href="https://www.npmjs.com/package/git-co-commit" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                            <img src={Npm} className={classes.Npm} alt="Npm" /> <span>Npm</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={classes.MainCompany}>
                <a href="http://gokulnathp.github.io/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                    <img src={GokulnathP} className={classes.GokulnathP} alt='GokulnathP' />
                </a>
            </div>
        </div>
    )
}

export default Footer;
