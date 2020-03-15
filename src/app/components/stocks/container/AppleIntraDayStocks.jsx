import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { getIntradayStocksTimeSeries } from '../../../actions/stock-actions';
import getSeriesData from '../../../utilities/global-functions';

class AppleIntraDayStocks extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getIntradayStocksTimeSeries('AAPL');
  }
  render() {
    if (this.props.intraDayStocks) {
      const stockSeriesData = getSeriesData(
        this.props.intraDayStocks['Time Series (5min)']
      );
      const options = {
        title: {
          text: 'Intraday Stocks of AAPL',
        },
        rangeSelector: {
          selected: 6,
        },
        series: [
          {
            name: 'AAPL',
            data: stockSeriesData,
            marker: {
              enabled: true,
              radius: 3,
            },
          },
        ],
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

const mapStateToProps = state => ({
  intraDayStocks: state.stockReducer.intraDayStocks,
});

export default connect(mapStateToProps, { getIntradayStocksTimeSeries })(
  AppleIntraDayStocks
);
