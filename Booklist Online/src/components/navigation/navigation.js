/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import downarrow from '../../assets/images/downarrow.png'

import './navigation.css';

const Navigation = () => {
    return (
        <Fragment>
            <ul className="navigation">
                <li>
                    <Link to="/home/">HOME</Link>
                </li>
                <li>
                    <Link to="/reviews/">ONLINE EXCLUSIVE REVIEWS</Link>
                </li>
                <li>
                    <Link to="/home/">BOOK AWARDS</Link>
                </li>
                <li>
                    <Link to="/reader/">BOOKLIST READER</Link>
                </li>
                <li>
                    <Link to="/newsletters/">NEWSLETTERS</Link>
                </li>
                <li>
                    <Link to="/webinars/">WEBINARS</Link>
                </li>
                <li className="width-84 pointer">
                    <a>
                        MY BOOKLIST
                        <img src={downarrow}/>
                    </a>
                    <ul className="submenu">
                        <li>
                            <Link to="/my-profile/">MY PROFILE</Link>
                        </li>
                        <li>
                            <Link to="/my-lists/">MY LISTS</Link>
                        </li>
                        <li>
                            <Link to="/my-alerts/">MY ALERTS</Link>
                        </li>
                    </ul>
                </li>
                <li className="width-100 pointer">
                    <a>
                        ABOUT US
                        <img src={downarrow}/>
                    </a>
                    <ul className="submenu">
                        <li>
                            <Link to="/faq/">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/help/">HELP</Link>
                        </li>
                        <li>
                            <Link to="/contact-us/">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/advertise/">ADVERTISE</Link>
                        </li>
                        <li>
                            <Link to="/get-reviewed/">GET REVIEWED</Link>
                        </li>
                        <li>
                            <Link to="/staff/">STAFF</Link>
                        </li>
                        <li>
                            <Link to="/reviewers/">REVIEWERS</Link>
                        </li>
                        <li>
                            <Link to="/write-for-us/">WRITE FOR US</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/subscribe-renew/">SUBSCRIBE/RENEW</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navigation;