import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { getSectionTitle, setFilteredMembers } from './mobx/appState'

import styled from 'styled-components';
import {Container,
        Title, Search} from './styles/section_title.sc';

@observer export default class SectionTitle extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = _.debounce(this.handleSearch, 500);
    }

    handleSearch() {
        let searchValue = _.toLower(this.search.value)
        setFilteredMembers(searchValue);
    }

    render() {
        let { view } = this.props;

        return (
            <Container>
                <Title>{getSectionTitle()}</Title>
                {view === 'collections' && <Search>
                    <input placeholder="Search..."
                           ref={input => this.search = input}
                           onChange={e => this.handleSearch()}
                    />
                </Search>}
            </Container>
        );
    }
}
