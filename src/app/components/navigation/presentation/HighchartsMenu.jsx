import React from 'react';
import { NavLink } from 'react-router-dom';

const HighchartsMenu = () => {
  return (
    <div className="colorr">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <NavLink className="navbar-brand" to="/home">
          FAANG STOCKS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Combined Stocks
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/compare"
                >
                  Monthly Stocks Comparison
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/compareweekly"
                >
                  Weekly Stocks Comparison
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/comparedaily"
                >
                  Daily Stocks Comparison
                </NavLink>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Facebook
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Facebook/intraday"
                >
                  Intraday Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Facebook/daily"
                >
                  Daily Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Facebook/weekly"
                >
                  Weekly Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Facebook/monthly"
                >
                  Monthly Stocks
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Amazon
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Amazon/intraday"
                >
                  Intraday Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Amazon/daily"
                >
                  Daily Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Amazon/weekly"
                >
                  Weekly Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Amazon/monthly"
                >
                  Monthly Stocks
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Apple
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Apple/intraday"
                >
                  Intraday Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Apple/daily"
                >
                  Daily Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Apple/weekly"
                >
                  Weekly Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Apple/monthly"
                >
                  Monthly Stocks
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Netflix
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Apple/intraday"
                >
                  Intraday Stocks
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Netflix/daily"
                >
                  Daily Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Netflix/weekly"
                >
                  Weekly Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Netflix/monthly"
                >
                  Monthly Stocks
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Google
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Apple/intraday"
                >
                  Intraday Stocks
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Google/daily"
                >
                  Daily Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Google/weekly"
                >
                  Weekly Stocks
                </NavLink>
                <div className="dropdown-divider"></div>

                <NavLink
                  className="nav-link"
                  style={{ color: 'black' }}
                  to="/stocks/Google/monthly"
                >
                  Monthly Stocks
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HighchartsMenu;
