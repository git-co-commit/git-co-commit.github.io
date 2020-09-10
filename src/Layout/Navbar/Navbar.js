import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

import Logo from '../../img/gitcocommit.webp';
import Github from '../../img/github.webp';
import Npm from '../../img/npm.webp'

import Sidebar from '../Sidebar/Sidebar';
import SidebarLogo from '../SidebarLogo/SidebarLogo';

const Navbar = () => {

    const [sidebarCss, setSidebarCss] = useState({
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        overflowY: "scroll",
        zIndex: "5",
        backgroundColor: "#ebeaea"
    });

    const [modelCss, setModelCss] = useState({
        display: "none",
        zIndex: "4",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh"
    });

    const onClickSidebar = () => {
        setModelCss({
            ...modelCss,
            display: "block"
        });
        setSidebarCss({
            ...sidebarCss,
            display: "block"
        });
    }

    const onClickModel = () => {
        setModelCss({
            ...modelCss,
            display: "none"
        });
        setSidebarCss({
            ...sidebarCss,
            display: "none"
        });
    }

    return (
        <>
            <nav className={classes.Navbar}>
                <ul className={[classes.Nav, classes.NavLeft].join(' ')}>
                    <li className={[classes.NavItem, classes.Sidebar].join(' ')} onClick={onClickSidebar}>
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
                        <Link to='/get-started' className={classes.NavLink}>Get started</Link>
                    </li>
                </ul>
            </nav>
            <div style={modelCss} onClick={onClickModel}></div>
            <div style={sidebarCss}>
                <Sidebar />
            </div>
        </>
    )
}

export default Navbar;
