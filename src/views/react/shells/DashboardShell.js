import React, {Component} from 'react';

import styled, {css} from 'styled-components';

export default class DashboardShell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pageTitle, greeting, date, categories } = this.props.model;

    let Button = styled.button`
      border-radius: 3px;
      padding: 0.25em 1em;
      margin: 0 1em;
      background: transparent;
      color: palevioletred;
      border: 2px solid palevioletred;

      ${props => props.primary && css`
        background: palevioletred;
        color: white;
      `}
    `;

    let PageTitle = contents => {
      return (
        <h1>{contents.pageTitle}</h1>
      );
    }

    let Banner = contents => {
      return (
        <div>
          <h3>{contents.greeting}</h3>
          <h3>{contents.date}</h3>
        </div>
      );
    }

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
          <PageTitle pageTitle={pageTitle} />
          <Banner greeting={greeting} date={date} />
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
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