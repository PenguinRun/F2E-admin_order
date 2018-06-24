import React, { Component } from 'react';

import Card from './Card'
import Activity from './Activity'
import TransactionWebsite from './TransactionWebsite'
import LatestOrders from './LatestOrders'

class Content extends Component {
    render() {
        return (
            <div className="content-area">
                <div className="overview-area">
                    <div className="content-title">
                        OVERVIEW
                    </div>
                    <div className="overview-area-right">
                        <ul className="overview-ul">
                            <li className="overview-li">2018/6/6 <i className="fas fa-caret-right overview-icon"></i></li>
                            <li className="overview-li">2018/6/13</li>
                            <li className="">Weekly <i className="fas fa-caret-up overview-icon"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="card-area">
                    <ul className="card-ul">
                        <li className="card-li">
                            <Card
                                icon="fas fa-hand-holding-usd"
                                title="TOTAL REVENUE"
                                content="54,540"
                                contentColor="#7ED321"
                            /></li>
                        <li className="card-li card-middle">
                            <Card
                                icon="fas fa-boxes"
                                title="TOTAL COST"
                                content="12,660"
                                contentColor="#D0021B"
                            /></li>
                        <li className="card-li">
                            <Card
                                icon="fas fa-money-bill"
                                title="NET INCOME"
                                content="41,880"
                                contentColor="#4A90E2"
                            /></li>
                    </ul>
                </div>
                <Activity />
                <div className="down-content">
                    <div className="down-content-left">
                        <TransactionWebsite />
                    </div>
                    <div>
                        <LatestOrders />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;