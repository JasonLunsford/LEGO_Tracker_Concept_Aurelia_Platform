import React, {Component} from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';

import styled, {ThemeProvider} from 'styled-components';
import {Container, InjectBody} from './styles/shell.sc';
import {coreTheme} from './styles/themes.sc';

import Header from './Header';
import SectionTitle from './SectionTitle';
import Dashboard from '../components/dashboard/Dashboard';
import Collections from '../components/collections/Collections';
import Details from '../components/details/Details';

// Global style
// eslint-disable-next-line
InjectBody();

export default class Shell extends Component {

  prepareView() {
    let view = this.props.view;
    let router = this.props.router;

    // let type = get type from model, pass into Collections down in viewToggle
    let message = _.get(this.props.model.views[view], 'message');
    let collections = _.get(this.props.model, 'collections');
    let trialMessage = _.get(this.props.model.views[view], 'trialMessage');

    return {
      collections,
      view,
      message,
      trialMessage,
      router
    };
  }

  viewToggle({view, collections = [], trialMessage, router}) {
      switch (view) {
        case 'dashboard':
          return <Dashboard collections={collections}
                            router={router} />
          break;
        case 'collections':
          return <Collections router={router} />
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
    const { collections,
            view,
            message,
            trialMessage,
            router } = this.prepareView();

    return (
      <ThemeProvider theme={coreTheme}>
        <Container>
          <Header message={message} 
                  date={this.getDate.today()} 
                  view={view} 
                  router={router}/>
          <SectionTitle />
          {this.viewToggle({view, collections, trialMessage, router})}
        </Container>
      </ThemeProvider>
    );
  }
}

Shell.propTypes = {
  model:  PropTypes.shape({
            message: PropTypes.string,
            collections: PropTypes.array,
            trialMessage: PropTypes.string
          }),
  view:   PropTypes.string.isRequired,
  router: PropTypes.func.isRequired
};
