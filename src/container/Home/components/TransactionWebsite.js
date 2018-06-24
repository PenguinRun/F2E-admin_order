import React, { Component } from 'react';

import './css/TransactionWebsite.css'

class TransactionWebsite extends Component {
    render() {
        return (
            <div className="transaction-website">
                <div className="content-title transaction-website-title">
                    Transaction Website
                </div>
                <table>
                    <tbody className="">
                        <tr className="transaction-website-line">
                            <td className="transaction-website-logo"><i className="fab fa-facebook"></i></td>
                            <td className="transaction-website-url">Facebook.com</td>
                            <td className="transaction-website-value">45,836</td>
                            <td className="transaction-website-rate up-rate"><i className="fas fa-arrow-up"></i> 20%</td>
                        </tr>
                        <tr className="transaction-website-line">
                            <td className="transaction-website-logo"><i className="fab fa-google"></i></td>
                            <td className="transaction-website-url">google.com</td>
                            <td className="transaction-website-value">23,582</td>
                            <td className="transaction-website-rate up-rate"><i className="fas fa-arrow-up"></i> 12%</td>
                        </tr>
                        <tr className="transaction-website-line">
                            <td className="transaction-website-logo"><i className="fas fa-shopping-bag"></i></td>
                            <td className="transaction-website-url">Shopify.com</td>
                            <td className="transaction-website-value">2,489</td>
                            <td className="transaction-website-rate down-rate"><i className="fas fa-arrow-down"></i> 15%</td>
                        </tr>
                        <tr>
                            <td className="transaction-website-logo"><i className="fab fa-wordpress-simple"></i></td>
                            <td className="transaction-website-url">Wordpress.com</td>
                            <td className="transaction-website-value">1,057</td>
                            <td className="transaction-website-rate down-rate"><i className="fas fa-arrow-down"></i> 30%</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }
}

export default TransactionWebsite;