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
    const collections = _.get(this.props.model, 'collections');
    const type = _.get(this.props.model.views[view], 'type');

    const members = _.chain(collections)
                     .find(item => item.name === type)
                     .get('members')
                     .value();

    return {
      categories: this.getCustomCollection(collections, 'piece_categories'),
      collections,
      colors: this.getCustomCollection(collections, 'colors'),
      members,
      message: _.get(this.props.model.views[view], 'message'),
      pieces: this.getCustomCollection(collections, 'pieces'),
      router: this.props.router,
      themes: this.getCustomCollection(collections, 'themes'),
      trialMessage: _.get(this.props.model.views[view], 'trialMessage'),
      type,
      view
    };
  }

  getCustomCollection(collections, name) {
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

  viewToggle(viewObj) {
      switch (viewObj.view) {
        case 'dashboard':
          return <Dashboard collections={viewObj.collections}
                            router={viewObj.router} />
          break;
        case 'collections':
          return <Collections router={viewObj.router}
                              members={viewObj.members}
                              type={viewObj.type}
                              themes={viewObj.themes}
                              categories={viewObj.categories}
                              pieces={viewObj.pieces}
                              colors={viewObj.colors} />
          break;
        case 'details':
          return <Details trialMessage={viewObj.trialMessage} />
          break;
      }
  }

  getDate = {
      today: () => { return moment().format('MMMM Do YYYY'); }
  }

  render() {
    const viewObj = this.prepareView();

    return (
      <ThemeProvider theme={coreTheme}>
        <Container>
          <Header message={viewObj.message} 
                  date={this.getDate.today()} 
                  view={viewObj.view} 
                  router={viewObj.router}/>
          <SectionTitle view={viewObj.view} />
          {this.viewToggle(viewObj)}
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
