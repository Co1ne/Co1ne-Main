import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainContent from "../components/home/MainContent";
import ResponsiveContainer from "../components/ResponsiveContainer";
import Android from "./Android";
import Python from "./Python";


class HomePage extends Component {
    static childContextTypes = {
        contentPage: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            contentPage: 'home'
        }
    }

    getChildContext() {
        return {
            contentPage: this.state.contentPage
        }
    }

    render() {
        let content = <MainContent/>;
        if (this.state.contentPage === 'home') {
            content = <MainContent/>
        } else if (this.state.contentPage === 'android') {
            content = <Android/>
        } else if (this.state.contentPage === 'python') {
            content = <Python/>
        } else if (this.state.contentPage === 'about') {

        }
        return (
            <ResponsiveContainer>
                {content}
            </ResponsiveContainer>

        );
    }
}

export default HomePage;
