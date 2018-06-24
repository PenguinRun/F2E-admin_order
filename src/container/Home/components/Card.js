import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/Card.css'

class Card extends Component {
    static propTypes = {
        icon: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        contentColor: PropTypes.string
    }

    render() {
        const { icon, title, content, contentColor } = this.props;
        return (
            <div className="card">
                <ul className="card-ul">
                    <li className="card-icon"><i className={icon} /></li>
                    <li className="card-title">{title}</li>
                </ul>
                <div className="card-content">
                    <font color={contentColor}>
                        {content}
                    </font>
                </div>
            </div>
        );
    }
}

export default Card;