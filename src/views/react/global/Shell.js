import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styled, {injectGlobal} from 'styled-components';
import {Container} from './styles/shell';

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

  render() {
    let { greeting,
          date,
          categories,
          sectionTitle,
          currentView } = this.props.model;

    return (
      <Container>
        <Header greeting={greeting} date={date} />
        <SectionTitle title={sectionTitle} />
        <Dashboard categories={categories} />
      </Container>
    );
  }
}

Shell.propTypes = {
  model: PropTypes.object
};