import React, { Component } from 'react';


class CardTop extends Component {
    render () {
        const title = this.props.title;
        const inlineStyle = {"background": "#f0f0f0"}

        return (
            <div style={inlineStyle} className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">{ title }</h2>
            </div>
        );
    };
};

class CardContent extends Component {
    render () {
        const content = this.props.content

        return (
            <div className="mdl-card__supporting-text">{content}</div>
        );
    };
};

class CardBottom extends Component {
    render () {
        const action = this.props.actionName;

        return (
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">{action}</a>
            </div>
        );
    };
};

export default class BlogCard extends Component {
    render () {
        const words = this.props.words;
        const title = this.props.title;
        return (
            <div className="blog-card mdl-card mdl-shadow--2dp">
                <CardTop title={title} />
                <CardContent content={words} />
                <CardBottom actionName="read" />
            </div>
        );
    };
};
