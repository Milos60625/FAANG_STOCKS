import { STOCK_TIME_SERIES_DAILY, STOCK_TIME_SERIES_WEEKLY, STOCK_TIME_SERIES_MONTHLY, MULTIPLE_STOCKS_SERIES_MONTHLY, MULTIPLE_STOCKS_SERIES_WEEKLY, MULTIPLE_STOCKS_SERIES_DAILY, STOCK_TIME_SERIES_INTRADAY } from "./highcharts-action-types";

export const getDailyStocksTimeSeries = symbol => dispatch => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=6D019O3XG6UDZCRO`).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        stocksData => dispatch({
            type: STOCK_TIME_SERIES_DAILY,
            payload: stocksData
        }),
        reason => dispatch({
            type: STOCK_TIME_SERIES_DAILY,
            payload: reason
        })
    )
}

export const getWeeklyStocksTimeSeries = symbol => dispatch => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=6D019O3XG6UDZCRO`).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        stocksData => dispatch({
            type: STOCK_TIME_SERIES_WEEKLY,
            payload: stocksData
        }),
        reason => dispatch({
            type: STOCK_TIME_SERIES_WEEKLY,
            payload: reason
        })
    )
}

export const getMonthlyStocksTimeSeries = symbol => dispatch => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=6D019O3XG6UDZCRO`).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        stocksData => dispatch({
            type: STOCK_TIME_SERIES_MONTHLY,
            payload: stocksData
        }),
        reason => dispatch({
            type: STOCK_TIME_SERIES_MONTHLY,
            payload: reason
        })
    )
}

export const getMonthlyStocksForComparison = (...symbols) => dispatch => {
    Promise.all(symbols.map(symbol =>
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=6D019O3XG6UDZCRO&datatype=json`).then(
            response => response.json(),
            reason => Promise.reject(reason)
        ).then(
            stockData => stockData,
            reason => dispatch({
                type: MULTIPLE_STOCKS_SERIES_MONTHLY,
                payload: reason
            })
        )
    ))
        .then(stocks => {
            dispatch({
                type: MULTIPLE_STOCKS_SERIES_MONTHLY,
                payload: stocks
            });
        })
}

export const getWeeklyStocksForComparison = (...symbols) => dispatch => {
  Promise.all(symbols.map(symbol =>
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=6D019O3XG6UDZCRO&datatype=json`).then(
          response => response.json(),
          reason => Promise.reject(reason)
      ).then(
          stockData => stockData,
          reason => dispatch({
              type: MULTIPLE_STOCKS_SERIES_WEEKLY,
              payload: reason
          })
      )
  ))
      .then(stocks => {
          dispatch({
              type: MULTIPLE_STOCKS_SERIES_WEEKLY,
              payload: stocks
          });
      })
}

export const getDailyStocksForComparison = (...symbols) => dispatch => {
  Promise.all(symbols.map(symbol =>
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=6D019O3XG6UDZCRO&datatype=json`).then(
          response => response.json(),
          reason => Promise.reject(reason)
      ).then(
          stockData => stockData,
          reason => dispatch({
              type: MULTIPLE_STOCKS_SERIES_DAILY,
              payload: reason
          })
      )
  ))
      .then(stocks => {
          dispatch({
              type: MULTIPLE_STOCKS_SERIES_DAILY,
              payload: stocks
          });
      })
}

export const getIntradayStocksTimeSeries = symbol => dispatch => {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=6D019O3XG6UDZCRO`).then(
      response => response.json(),
      reason => Promise.reject(reason)
  ).then(
      stocksData => dispatch({
          type: STOCK_TIME_SERIES_INTRADAY,
          payload: stocksData
      }),
      reason => dispatch({
          type: STOCK_TIME_SERIES_INTRADAY,
          payload: reason
      })
  )
}
