import React, {Component} from 'react';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import Modal from '../modal/Modal';

import styled from 'styled-components';
import {Table, Header, Body, Cell} from './styles/collections.sc';

@observer export default class ColorTable extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = _.debounce(this.handleScroll, 250);
    }

    state = {
        counter:       100,
        direction:     '',
        lastScrollTop: 0,
        show:          false
    }

    componentWillMount() {
        setMembers(this.props.members);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        let scrollTop = window.scrollY;

        if (scrollTop > this.state.lastScrollTop) {
            let start = this.state.counter;
            this.setState({
                counter: start + 100,
                lastScrollTop: scrollTop <= 0 ? 0 : scrollTop
            });
        }
    }

    handleSort(key) {
        const members = this.props.members;
        const direction = this.state.direction;

        this.props.sortMe(key, direction, members);

        if (_.isEmpty(direction) || direction === 'down') {
            this.setState({direction: 'up'});
        } else {
            this.setState({direction: 'down'});
        }
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        let members = getFilteredMembers(this.state.counter);

        return (
            <div>
                <Table>
                    <Header>
                        <Cell thickleft
                              sortable
                              onClick={() => this.handleSort('name')}>
                            <span>Name</span>
                        </Cell>
                        <Cell><span>RGB</span></Cell>
                        <Cell sortable
                              onClick={() => this.handleSort('is_trans')}>
                            <span>Is Transparent?</span>
                        </Cell>
                        <Cell thickright><span>Sample</span></Cell>
                    </Header>
                    <Body>
                    {members.map((member, index) => 
                        <div key={index}>
                            <Cell thickleft
                                  onClick={this.showModal}>
                                <span>{member.name}</span>
                            </Cell>
                            <Cell><span>{member.rgb}</span></Cell>
                            <Cell><span>{member.is_trans ? 'Yes' : 'No'}</span></Cell>
                            <Cell thickright sample={'#'+member.rgb}></Cell>
                        </div>
                    )}
                    </Body>
                </Table>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Awesome Modal Here</p>
                </Modal>
            </div>
        );
    }
}