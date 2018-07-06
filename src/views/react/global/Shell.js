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
    const view = this.props.view;
    const router = this.props.router;

    const type = _.get(this.props.model.views[view], 'type');
    const message = _.get(this.props.model.views[view], 'message');
    const collections = _.get(this.props.model, 'collections');
    const trialMessage = _.get(this.props.model.views[view], 'trialMessage');

    const members = this.getCustomCollection(collections);

    const themes = this.getCustomCollection(collections, 'themes');
    const categories = this.getCustomCollection(collections, 'piece_categories');
    const pieces = this.getCustomCollection(collections, 'pieces');
    const colors = this.getCustomCollection(collections, 'colors');

    return {
      collections,
      view,
      message,
      trialMessage,
      router,
      members,
      type,
      themes,
      categories,
      pieces,
      colors
    };
  }

  getCustomCollection(collections, name = '') {
      if (_.isEmpty(name)) {
        return _.chain(collections)
                .find(item => item.name === name)
                .get('members')
                .value();        
      }

      return _.chain(collections)
              .find(item => item.name === name)
              .get('members')
              .map(member => {
                return {
                  name: member.name,
                  id: member._id
                }
              })
              .value();
  }

  viewToggle({view, collections = [], trialMessage, router, members, type, themes, categories, pieces, colors}) {
      switch (view) {
        case 'dashboard':
          return <Dashboard collections={collections}
                            router={router} />
          break;
        case 'collections':
          return <Collections router={router}
                              members={members}
                              type={type}
                              themes={themes}
                              categories={categories}
                              pieces={pieces}
                              colors={colors} />
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
            router,
            members,
            type,
            themes,
            categories,
            pieces,
            colors } = this.prepareView();

    return (
      <ThemeProvider theme={coreTheme}>
        <Container>
          <Header message={message} 
                  date={this.getDate.today()} 
                  view={view} 
                  router={router}/>
          <SectionTitle view={view} />
          {this.viewToggle({view, collections, trialMessage, router, members, type, themes, categories, pieces, colors})}
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
