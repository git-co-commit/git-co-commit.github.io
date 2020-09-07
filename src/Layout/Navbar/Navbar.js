import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

import Logo from '../../img/gitcocommit.png';
import Github from '../../img/github.png';
import Npm from '../../img/npm.jpg'

import SidebarLogo from '../SidebarLogo/SidebarLogo';

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <ul className={[classes.Nav, classes.NavLeft].join(' ')}>
                <li className={[classes.NavItem, classes.Sidebar].join(' ')}>
                    <SidebarLogo />
                </li>
                <li className={classes.NavItem}>
                    <Link to='/' className={classes.NavLink}>
                        <img src={Logo} className={classes.Logo} alt="Git co commit" />
                    </Link>
                </li>
                <li className={classes.NavItem}>
                    <Link to='/' className={[classes.NavLink, classes.Brand].join(' ')}>Git Co Commit</Link>
                </li>
            </ul>
            <ul className={[classes.Nav, classes.NavRight].join(' ')}>
                <li className={classes.NavItem}>
                    <a href='https://www.npmjs.com/package/git-co-commit' rel="noopener noreferrer" target='_blank' className={classes.NavLink}>
                        <img src={Npm} className={classes.Npm} alt='Npm' />
                    </a>
                </li>
                <li className={classes.NavItem}>
                    <a href='https://github.com/GokulnathP/git-co-commit' rel="noopener noreferrer" target="_blank" className={classes.NavLink}>
                        <img src={Github} className={classes.Github} alt='Github' />
                    </a>
                </li>
                <li className={[classes.NavItem, classes.Btn_cta].join(' ')}>
                    <Link to='/' className={classes.NavLink}>Get started</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
