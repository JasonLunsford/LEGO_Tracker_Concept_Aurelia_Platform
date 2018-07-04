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

    const members = _.chain(collections)
                     .find(item => item.name === type)
                     .get('members')
                     .value();

    const themes = _.chain(collections)
                    .find(item => item.name === 'themes')
                    .get('members')
                    .map(member => {
                      return {
                        name: member.name,
                        id: member._id
                      }
                    })
                    .value();

    return {
      collections,
      view,
      message,
      trialMessage,
      router,
      members,
      type,
      themes
    };
  }

  viewToggle({view, collections = [], trialMessage, router, members, type, themes}) {
      switch (view) {
        case 'dashboard':
          return <Dashboard collections={collections}
                            router={router} />
          break;
        case 'collections':
          return <Collections router={router}
                              members={members}
                              type={type}
                              themes={themes}/>
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
            themes } = this.prepareView();

    return (
      <ThemeProvider theme={coreTheme}>
        <Container>
          <Header message={message} 
                  date={this.getDate.today()} 
                  view={view} 
                  router={router}/>
          <SectionTitle view={view} />
          {this.viewToggle({view, collections, trialMessage, router, members, type, themes})}
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
