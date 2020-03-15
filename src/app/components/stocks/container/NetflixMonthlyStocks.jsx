import React, { Component } from 'react';
import { connect } from "react-redux";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

import { getMonthlyStocksTimeSeries } from "../../../actions/stock-actions";

import getSeriesData from "../../../utilities/global-functions";

class NetflixMonthlyStocks extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getMonthlyStocksTimeSeries("NFLX");
    }
    render() {
        if (this.props.monthlyStocks) {
            const stockSeriesData = getSeriesData(this.props.monthlyStocks["Monthly Time Series"]);
            const options = {
                title: {
                    text: "Monthly Stocks of NFLX"
                },
                rangeSelector: {
                    selected: 6
                },
                series: [
                    {
                        name: "NFLX",
                        data: stockSeriesData,
                        marker: {
                          enabled: true,
                          radius: 3
                        },
                    }
                ]
            }
            return (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"stockChart"}
                        options={options}
                    />
                </div>
            )
        }
        else {
            return <h5>Loading...</h5>
        }
    }
}

NetflixMonthlyStocks.propTypes = {
    monthlyStocks: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    monthlyStocks: state.stockReducer.monthlyStocks
});

export default connect(mapStateToProps, { getMonthlyStocksTimeSeries })(NetflixMonthlyStocks);
