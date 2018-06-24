import React, { Component } from 'react';

import './css/LatestOrders.css'

class LatestOrders extends Component {
    render() {
        return (
            <div className="latest-orders">
                <div className="content-title latest-orders-title">
                    Latest Orders
                </div>
                <table className="">
                    <tbody className="">
                        <tr className="latest-orders-line">
                            <td className="latest-orders-img"><img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2017/05/08/realtime/3491184.jpg&s=Y&x=576&y=0&sw=604&sh=604&sl=W&fw=360" alt="yui" width="100" height="100"/></td>
                            <td className="latest-orders-td-2">
                                <ul className="latest-orders-ul">
                                    <li className="latest-orders-li-title">Vintage T-shirt</li>
                                    <li className="latest-orders-li-monthly">2018/6/13  13:42</li>
                                    <li className="latest-orders-li-model">Belle Willis</li>
                                </ul>
                            </td>
                            <td className="latest-orders-td-3">
                                <ul className="latest-orders-ul">
                                    <li className="latest-orders-li-total">Total</li>
                                    <li className="latest-orders-li-value">3,200</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="latest-orders-line">
                            <td className="latest-orders-img"><img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2017/05/08/realtime/3491184.jpg&s=Y&x=576&y=0&sw=604&sh=604&sl=W&fw=360" alt="yui" width="100" height="100" /></td>
                            <td className="latest-orders-td-2">
                                <ul className="latest-orders-ul">
                                    <li className="latest-orders-li-title">Cowboy Jacket</li>
                                    <li className="latest-orders-li-monthly">2018/6/13  10:45</li>
                                    <li className="latest-orders-li-model">Adrian Cummings</li>
                                </ul>
                            </td>
                            <td className="latest-orders-td-3">
                                <ul className="latest-orders-ul">
                                    <li className="latest-orders-li-total">Total</li>
                                    <li className="latest-orders-li-value">2,800</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="latest-orders-img"><img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2017/05/08/realtime/3491184.jpg&s=Y&x=576&y=0&sw=604&sh=604&sl=W&fw=360" alt="yui" width="100" height="100" /></td>
                            <td className="latest-orders-td-2">
                                <ul className="latest-orders-ul">
                                    <li className="latest-orders-li-title">Coach Coat</li>
                                    <li className="latest-orders-li-monthly">2018/6/13  8:26</li>
                                    <li className="latest-orders-li-model">Lura Holland</li>
                                </ul>
                            </td>
                            <td className="latest-orders-td-3">
                                <ul className="latest-orders-ul">
                                    <li className="latest-orders-li-total">Total</li>
                                    <li className="latest-orders-li-value">1,600</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }
}

export default LatestOrders;