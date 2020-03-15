import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { getIntradayStocksTimeSeries } from '../../../actions/stock-actions';
import getSeriesData from '../../../utilities/global-functions';

class GoogleIntraDayStocks extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getIntradayStocksTimeSeries('GOOGL');
  }
  render() {
    if (this.props.intraDayStocks) {
      const stockSeriesData = getSeriesData(
        this.props.intraDayStocks['Time Series (5min)']
      );
      const options = {
        title: {
          text: 'Intraday Stocks of GOOGL',
        },
        rangeSelector: {
          selected: 6,
        },
        series: [
          {
            name: 'GOOGL',
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
  GoogleIntraDayStocks
);
