import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styled, {injectGlobal} from 'styled-components';
import {Container} from './styles/shell.sc';

import Header from './Header';
import SectionTitle from './SectionTitle';
import Dashboard from '../components/dashboard/Dashboard';

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    font-family: "Verdana", sans-serif;
    margin:      0;
    padding:     0px 10px;
  }
`

export default class Shell extends Component {

  constructor(props) {
    super(props);
  }

  viewToggle({currentView, categories = []}) {
      switch (currentView) {
        case 'Dashboard':
          return <Dashboard categories={categories} />
          break;
      }
  }

  render() {
    let { message,
          date,
          categories,
          sectionTitle,
          currentView } = this.props.model;

    return (
      <Container>
        <Header message={message} date={date} />
        <SectionTitle title={sectionTitle} />
        {this.viewToggle({currentView, categories})}
      </Container>
    );
  }
}

Shell.propTypes = {
  model: PropTypes.shape({
           message: PropTypes.string,
           date: PropTypes.string.isRequired,
           categories: PropTypes.array,
           sectionTitle: PropTypes.string.isRequired,
           currentView: PropTypes.string.isRequired
         })
};