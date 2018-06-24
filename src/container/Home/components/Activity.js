import React, { Component } from 'react';

import './css/Activity.css'

class Activity extends Component {

    render() {
        return (
            <div className="activity">
                <div className="content-title activity-title">
                    Activity
                </div>
                <svg viewBox="0 0 500 100" className="chart">
                    <polyline
                        fill="none"
                        stroke="#0074d9"
                        strokeWidth="2"
                        points="
                       00,120
                       20,60
                       40,80
                       60,20
                       80,80
                       100,80
                       120,60
                       140,100
                       160,90
                       180,80
                       200, 110
                       220, 10
                       240, 70
                       260, 100
                       280, 100
                       300, 40
                       320, 0
                       340, 100
                       360, 100
                       380, 120
                       400, 60
                       420, 70
                       440, 80
                     "
                   />

                </svg>
            </div>
        );
    }
}

export default Activity;