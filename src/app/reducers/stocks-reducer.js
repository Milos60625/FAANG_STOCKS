import {
  STOCK_TIME_SERIES_DAILY,
  STOCK_TIME_SERIES_WEEKLY,
  STOCK_TIME_SERIES_MONTHLY,
  STOCK_TIME_SERIES_INTRADAY,
  MULTIPLE_STOCKS_SERIES_MONTHLY,
  MULTIPLE_STOCKS_SERIES_WEEKLY,
  MULTIPLE_STOCKS_SERIES_DAILY,
} from '../actions/highcharts-action-types';

const initialState = {
  dailyStocks: {},
  weeklyStocks: {},
  monthlyStocks: {},
  intraDayStocks: {},
  monthlyStocksSeries: [],
  weeklyStocksSeries: [],
  dailyStocksSeries: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STOCK_TIME_SERIES_DAILY:
      state = {
        ...state,
        dailyStocks: action.payload,
      };
      break;
    case STOCK_TIME_SERIES_WEEKLY:
      state = {
        ...state,
        weeklyStocks: action.payload,
      };
    case STOCK_TIME_SERIES_INTRADAY:
      state = {
        ...state,
        intraDayStocks: action.payload,
      };
      break;
    case STOCK_TIME_SERIES_MONTHLY:
      state = {
        ...state,
        monthlyStocks: action.payload,
      };
      break;
    case MULTIPLE_STOCKS_SERIES_MONTHLY:
      state = {
        ...state,
        monthlyStocksSeries: action.payload,
      };
      break;
    case MULTIPLE_STOCKS_SERIES_WEEKLY:
      state = {
        ...state,
        weeklyStocksSeries: action.payload,
      };
      break;
    case MULTIPLE_STOCKS_SERIES_DAILY:
      state = {
        ...state,
        dailyStocksSeries: action.payload,
      };
      break;
  }
  return state;
}
