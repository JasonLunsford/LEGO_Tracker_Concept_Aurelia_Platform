import React, {Component} from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import styled, {injectGlobal} from 'styled-components';
import {Container} from './styles/shell.sc';

import Header from './Header';
import SectionTitle from './SectionTitle';
import Dashboard from '../components/dashboard/Dashboard';
import Collections from '../components/collections/Collections';
import Details from '../components/details/Details';

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

  prepareView() {
    let currentView = this.props.currentView;
    let router = this.props.router;

    let message = _.get(this.props.model[currentView], 'message');
    let sectionTitle = _.get(this.props.model[currentView], 'sectionTitle');
    let categories = _.get(this.props.model[currentView], 'categories');
    let trialMessage = _.get(this.props.model[currentView], 'trialMessage');

    return {
      categories,
      currentView,
      message,
      sectionTitle,
      trialMessage,
      router
    };
  }

  viewToggle({currentView, categories = [], trialMessage, router}) {
      switch (currentView) {
        case 'dashboard':
          return <Dashboard categories={categories} router={router} />
          break;
        case 'collections':
          return <Collections trialMessage={trialMessage} />
          break;
        case 'details':
          return <Details trialMessage={trialMessage} />
          break;
      }
  }

  getDate = {
      today: () => { return moment().format('MMMM Do YYYY'); }
  }

  render() {
    let { categories,
          currentView,
          message,
          sectionTitle,
          trialMessage,
          router } = this.prepareView();

    return (
      <Container>
        <Header message={message} date={this.getDate.today()} />
        <SectionTitle title={sectionTitle} />
        {this.viewToggle({currentView, categories, trialMessage, router})}
      </Container>
    );
  }
}

Shell.propTypes = {
  model: PropTypes.shape({
           message: PropTypes.string,
           categories: PropTypes.array,
           sectionTitle: PropTypes.string.isRequired,
           trialMessage: PropTypes.string
         }),
  currentView: PropTypes.string.isRequired
};
