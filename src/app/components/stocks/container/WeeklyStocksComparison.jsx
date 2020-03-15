import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

import { getWeeklyStocksForComparison } from '../../../actions/stock-actions';

import getSeriesData from '../../../utilities/global-functions';

class WeeklyStocksComparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocksOf: ['AAPL', 'GOOGL', 'AMZN', 'NFLX', 'FB'],
    };
  }
  componentDidMount() {
    this.props.getWeeklyStocksForComparison(...this.state.stocksOf);
  }
  render() {
    let seriesOptions = [];
    for (let i = 0; i < this.props.weeklyStocks.length; i++) {
      const stock = this.props.weeklyStocks[i];
      seriesOptions[i] = {
        name: this.state.stocksOf[i],
        data: getSeriesData(stock['Weekly Time Series']),
      };
    }
    if (this.props.weeklyStocks.length > 0) {
      const options = {
        title: {
          text: `Weekly Stocks of - ${this.state.stocksOf}`,
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

WeeklyStocksComparison.propTypes = {
  weeklyStocks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  weeklyStocks: state.stockReducer.weeklyStocksSeries,
});

export default connect(mapStateToProps, { getWeeklyStocksForComparison })(
  WeeklyStocksComparison
);
