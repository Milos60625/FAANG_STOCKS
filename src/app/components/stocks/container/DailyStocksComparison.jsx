import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

import { getDailyStocksForComparison } from '../../../actions/stock-actions';

import getSeriesData from '../../../utilities/global-functions';

class DailyStocksComparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocksOf: ['AAPL', 'GOOGL', 'AMZN', 'NFLX', 'FB'],
    };
  }
  componentDidMount() {
    this.props.getDailyStocksForComparison(...this.state.stocksOf);
  }
  render() {
    let seriesOptions = [];
    for (let i = 0; i < this.props.dailyStocks.length; i++) {
      const stock = this.props.dailyStocks[i];
      seriesOptions[i] = {
        name: this.state.stocksOf[i],
        data: getSeriesData(stock['Time Series (Daily)']),
      };
    }
    if (this.props.dailyStocks.length > 0) {
      const options = {
        title: {
          text: `Daily Stocks of - ${this.state.stocksOf}`,
        },
        rangeSelector: {
          selected: 6,
        },
        series: seriesOptions,
      };
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
          />
        </div>
      );
    } else {
      return <h5>Loading...</h5>;
    }
  }
}

DailyStocksComparison.propTypes = {
  dailyStocks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  dailyStocks: state.stockReducer.dailyStocksSeries,
});

export default connect(mapStateToProps, { getDailyStocksForComparison })(
  DailyStocksComparison
);
