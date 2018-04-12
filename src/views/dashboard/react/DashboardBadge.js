import React from 'react';

export default class DashboardBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pageTitle, greeting, date, categories } = this.props.model;

    return (
      <div className="dashboard">
        <h1>{pageTitle}</h1>
        <h3>{greeting}</h3>
        <h3>{date}</h3>
        <ul className="list">
            {categories.map(category => 
              <li>
                <span>{category.name}</span>
                <span>{category.count}</span>
                <span>{category.size}</span>
              </li>
            )}
        </ul>
      </div>
    );
  }
}

DashboardBadge.defaultProps = { 
    pageTitle: 'Badge',
    greeting:  'Hello World',
    date:      'January 1, 2018'
};