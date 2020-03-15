import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import HighchartsMenu from './components/navigation/presentation/HighchartsMenu';

const DailyStocks = lazy(() =>
  import('./components/stocks/container/DailyStocks')
);
const WeeklyStocks = lazy(() =>
  import('./components/stocks/container/WeeklyStocks')
);
const MonthlyStocks = lazy(() =>
  import('./components/stocks/container/MonthlyStocks')
);

const MonthlyStocksComparison = lazy(() =>
  import('./components/stocks/container/MonthlyStocksComparison')
);
const WeeklyStocksComparison = lazy(() =>
  import('./components/stocks/container/WeeklyStocksComparison')
);
const DailyStocksComparison = lazy(() =>
  import('./components/stocks/container/DailyStocksComparison')
);
const GoogleIntraDayStocks = lazy(() =>
  import('./components/stocks/container/GoogleIntraDayStocks')
);
const GoogleDailyStocks = lazy(() =>
  import('./components/stocks/container/GoogleDailyStocks')
);
const GoogleWeeklyStocks = lazy(() =>
  import('./components/stocks/container/GoogleWeeklyStocks')
);
const GoogleMonthlyStocks = lazy(() =>
  import('./components/stocks/container/GoogleMonthlyStocks')
);
const AmazonIntraDayStocks = lazy(() =>
  import('./components/stocks/container/AmazonIntraDayStocks')
);

const AmazonDailyStocks = lazy(() =>
  import('./components/stocks/container/AmazonDailyStocks')
);
const AmazonWeeklyStocks = lazy(() =>
  import('./components/stocks/container/AmazonWeeklyStocks')
);

const AmazonMonthlyStocks = lazy(() =>
  import('./components/stocks/container/AmazonMonthlyStocks')
);
const AppleIntraDayStocks = lazy(() =>
  import('./components/stocks/container/AppleIntraDayStocks')
);
const AppleDailyStocks = lazy(() =>
  import('./components/stocks/container/AppleDailyStocks')
);
const AppleWeeklyStocks = lazy(() =>
  import('./components/stocks/container/AppleWeeklyStocks')
);
const AppleMonthlyStocks = lazy(() =>
  import('./components/stocks/container/AppleMonthlyStocks')

);

const NetflixIntraDayStocks = lazy(() =>
  import('./components/stocks/container/NetflixIntraDayStocks')
);
const NetflixDailyStocks = lazy(() =>
  import('./components/stocks/container/NetflixDailyStocks')
);

const NetflixWeeklyStocks = lazy(() =>
  import('./components/stocks/container/NetflixWeeklyStocks')
);
const NetflixMonthlyStocks = lazy(() =>
  import('./components/stocks/container/NetflixMonthlyStocks')
);
const FacebookDailyStocks = lazy(() =>
  import('./components/stocks/container/FacebookDailyStocks')
);
const FacebookWeeklyStocks = lazy(() =>
  import('./components/stocks/container/FacebookWeeklyStocks')
);
const FacebookMonthlyStocks = lazy(() =>
  import('./components/stocks/container/FacebookMonthlyStocks')
);
const FacebookIntraDayStocks = lazy(() =>
  import('./components/stocks/container/FacebookIntraDayStocks')
);


const IntraDayStocks = lazy(() =>
  import('./components/stocks/container/IntraDayStocks')
);
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let loading = '';
    return (
      <div>
        <HighchartsMenu />
        <main>
          <Suspense
            fallback={
              <div style={{ textAlign: 'center', marginTop: '10%' }}>
                <h5>loading...</h5>
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={MonthlyStocksComparison} />
              <Route
                exact
                path="/home"
                render={props => <MonthlyStocksComparison {...props} />}
              />
              <Route
                path="/stocks/daily"
                render={props => <DailyStocks {...props} />}
              />
              <Route
                path="/stocks/weekly"
                render={props => <WeeklyStocks {...props} />}
              />
              <Route
                path="/stocks/monthly"
                render={props => <MonthlyStocks {...props} />}
              />
              <Route
                exact
                path="/stocks/compare"
                render={props => <MonthlyStocksComparison {...props} />}
              />
              <Route
                exact
                path="/stocks/compareweekly"
                render={props => <WeeklyStocksComparison {...props} />}
              />
              <Route
                exact
                path="/stocks/comparedaily"
                render={props => <DailyStocksComparison {...props} />}
              />
                   <Route
                  exact
                path="/stocks/Google/intraday"
                render={props => <GoogleIntraDayStocks {...props} />}
              />

              <Route
                path="/stocks/Google/daily"
                render={props => <GoogleDailyStocks {...props} />}
              />
              <Route
                path="/stocks/Google/weekly"
                render={props => <GoogleWeeklyStocks {...props} />}
              />
              <Route
                path="/stocks/Google/monthly"
                render={props => <GoogleMonthlyStocks {...props} />}
              />
                  <Route
                  exact
                path="/stocks/Amazon/intraday"
                render={props => <AmazonIntraDayStocks {...props} />}
              />

              <Route
                path="/stocks/Amazon/daily"
                render={props => <AmazonDailyStocks {...props} />}
              />
              <Route
                path="/stocks/Amazon/weekly"
                render={props => <AmazonWeeklyStocks {...props} />}
              />

              <Route
                path="/stocks/Amazon/intraday"
                render={props => <AmazonIntraDayStocks {...props} />}
              />
                 <Route
                path="/stocks/Amazon/monthly"
                render={props => <AmazonMonthlyStocks {...props} />}
              />
                 <Route
                  exact
                path="/stocks/Apple/intraday"
                render={props => <AppleIntraDayStocks {...props} />}
              />
                <Route
                path="/stocks/Apple/daily"
                render={props => <AppleDailyStocks {...props} />}
              />
                <Route
                path="/stocks/Apple/weekly"
                render={props => <AppleWeeklyStocks {...props} />}
              />
               <Route
                path="/stocks/Apple/monthly"
                render={props => <AppleMonthlyStocks {...props} />}
              />
                   <Route
                  exact
                path="/stocks/Netflix/intraday"
                render={props => <NetflixIntraDayStocks {...props} />}
              />
                   <Route
                path="/stocks/Netflix/daily"
                render={props => <NetflixDailyStocks {...props} />}
              />
                 <Route
                path="/stocks/Netflix/weekly"
                render={props => <NetflixWeeklyStocks {...props} />}
              />
                <Route
                path="/stocks/Netflix/monthly"
                render={props => <NetflixMonthlyStocks {...props} />}
              />
                    <Route
                path="/stocks/Facebook/daily"
                render={props => <FacebookDailyStocks {...props} />}
              />
                <Route
                path="/stocks/Facebook/weekly"
                render={props => <FacebookWeeklyStocks {...props} />}
              />
                <Route
                path="/stocks/Facebook/monthly"
                render={props => <FacebookMonthlyStocks {...props} />}
              />
                 <Route
                path="/stocks/Facebook/intraday"
                render={props => <FacebookIntraDayStocks {...props} />}
              />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}
