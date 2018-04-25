import React, {Component} from 'react';

import Header from './global/Header';
import Dashboard from './components/dashboard/Dashboard';

export default class Shell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { title,
          greeting,
          date,
          categories,
          sectionTitle,
          currentView } = this.props.model;

    return (
      <div>
        <Header greeting={greeting} date={date} title={title} />
        <h4>{sectionTitle}</h4>
        <Dashboard categories={categories} />
      </div>
    );
  }
}
