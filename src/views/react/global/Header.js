import React, {Component} from 'react';

import styled, {css} from 'styled-components';

export const PageTitle = ({pageTitle}) => {
  return (
    <h1>{pageTitle}</h1>
  );
}

export const Banner = ({greeting, date}) => {
  return (
    <div>
      <h3>{greeting}</h3>
      <h3>{date}</h3>
    </div>
  );
}

// export const StyledPageTitle = () => {
//     return styled(PageTitle)`
//       color: green;
//     `;
// }

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pageTitle, greeting, date } = this.props;

    let Header = contents => {
      return (
        <div>
          <PageTitle pageTitle={pageTitle} />
          <Banner greeting={greeting} date={date} />
        </div>
      );
    }

    return (
      <Header />
    );
  }
}