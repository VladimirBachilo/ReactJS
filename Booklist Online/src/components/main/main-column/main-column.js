import React, { Component } from 'react';

import './main-column.css';

import HomePage from './pages/home-page';
import OnlineExclusiveReviews from './pages/online-exclusive-reviews';
import BookAwards from './pages/book-awards';
import Newsletters from './pages/newsletters';
import Webinars from './pages/webinars';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';

import { Switch, Route } from 'react-router-dom';


export default class MainColumn extends Component {
    render() {
        return (
            <div className="main-column">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/online-exclusive-reviews" exact component={OnlineExclusiveReviews} />
                    <Route path="/book-awards" exact component={BookAwards} />
                    <Route path="/newsletters" exact component={Newsletters} />
                    <Route path="/webinars" exact component={Webinars} />
                    <Route path="/faq" exact component={Faq} />
                    <Route path="/contact-us" exact component={ContactUs} />
                </Switch>
            </div>
        );
    };
};