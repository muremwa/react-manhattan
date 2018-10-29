import React, { Component } from 'react';
import BlogCard from "./Home";


export default class Layout extends Component {
    getHeadLines () {
        var c = [];
        for (let x = 0; x < 10; x++) {
            let y = <BlogCard key={x} words="kmklsmkl" title="mapped" />
            c.push(y);
        }
        return c;
    }

    render () {

        const blogCards = this.getHeadLines();

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout__header-scroll">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">React App</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <a href="" className="mdl-navigation__link">home</a>
                            <a href="" className="mdl-navigation__link">business</a>
                            <a href="" className="mdl-navigation__link">solutions</a>
                            <a href="" className="mdl-navigation__link">cars</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">muremwa's</span>
                    <nav className="mdl-navigation">
                        <a href="" className="mdl-navigation__link mdl-js-ripple-effect">notes-world</a>
                        <a href="" className="mdl-navigation__link mdl-js-ripple-effect">muremwa-blog</a>
                        <a href="" className="mdl-navigation__link mdl-js-ripple-effect">library</a>
                        <a href="" className="mdl-navigation__link mdl-js-ripple-effect">collection</a>
                        <a href="" className="mdl-navigation__link mdl-js-ripple-effect">news</a>
                        <a href="" className="mdl-navigation__link mdl-js-ripple-effect">tulip</a>
                    </nav>
                </div>
                <div className="mdl-layout__content">
                    <div className="col-md-8">
                        { blogCards }
                    </div>
                </div>
            </div>
        )
    }
}