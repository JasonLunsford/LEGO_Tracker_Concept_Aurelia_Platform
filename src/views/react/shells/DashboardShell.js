import React, {Component} from 'react';

import Header from '../global/Header';

export default class DashboardShell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pageTitle, greeting, date, categories } = this.props.model;

    let List = contents => {
      return (
        <ul className={contents.className}>
            {contents.categories.map((category, index) => 
              <li key={index}>
                <span>{category.name}</span>
                <span>{category.count}</span>
                <span>{category.size}</span>
              </li>
            )}
        </ul>
      );
    }

    let Dashboard = contents => {
      return (
        <div className={contents.className}>
          <Header greeting={greeting} date={date} pageTitle={pageTitle} />
          <List className="list" categories={categories} />
        </div>
      );
    }

    return (
      <Dashboard className="dashboard" />
    );
  }
}

DashboardShell.defaultProps = { 
    pageTitle: 'Badge',
    greeting:  'Hello World',
    date:      'January 1, 2018'
};