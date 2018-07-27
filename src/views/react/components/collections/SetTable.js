import React, {Component} from 'react';

import _ from 'lodash';

import { observer } from 'mobx-react';

import { setMembers, getFilteredMembers } from '../../global/mobx/appState';

import Modal from '../modal/Modal';

import SetName from './modals/SetName';
import SetNumber from './modals/SetNumber';
import SetPiece from './modals/SetPiece';

import styled from 'styled-components';
import {Table, Header, Body, 
        SmallCell, ViewIcon, Cell, Link} from './styles/collections.sc';

@observer export default class SetTable extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = _.debounce(this.handleScroll, 250);
    }

    state = {
        counter:       100,
        direction:     '',
        lastScrollTop: 0,
        member:        {},
        show:          false,
        type:          ''
    }

    componentWillMount() {
        _.map(this.props.members, member => {
            member.theme = this.props.getName(this.props.themes, member.theme_id);
            member.name = _.startCase(member.name);
            member.num_minifigs = this.props.getMinifigs(member.num_minifigs);
        });

        setMembers(this.props.members);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
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

    hideModal = () => {
        this.setState({ show: false });
    }

    showModal = (member, type) => {
        this.setState({ 
            member,
            show: true,
            type
        });
    }

    modals = () => {
        const { member, type } = this.state;
        const props = this.props;

        switch (type) {
            case 'name':
                return <SetName member={member} />
                break;
            case 'number':
                return <SetNumber member={member} />
                break;
            case 'piece':
                return <SetPiece member={member}
                                 colors={props.colors}
                                 pieces={props.pieces}
                                 elements={props.elements}
                                 getName={props.getName}
                                 getNumber={props.getNumber}
                                 getWeight={props.getWeight} />
                break;
        }
    }

    render() {
        const members = getFilteredMembers(this.state.counter);
        const memberLength = array => {
            return _.size(array);
        }

        return (
            <div>
                <Table> 
                    <Header>
                        <SmallCell thickleft
                                   sortable
                                   onClick={() => this.handleSort('name')}>
                            <Link>Name</Link>
                        </SmallCell>
                        <SmallCell><span>Set Number</span></SmallCell>
                        <SmallCell sortable
                                   onClick={() => this.handleSort('year')}>
                            <Link>Year</Link>
                        </SmallCell>
                        <SmallCell sortable
                                   onClick={() => this.handleSort('theme')}>
                            <Link>Theme</Link>
                        </SmallCell>
                        <SmallCell sortable
                                   onClick={() => this.handleSort('num_pieces')}>
                            <Link>Pieces</Link>
                        </SmallCell>
                        <SmallCell sortable
                                   onClick={() => this.handleSort('num_spares')}>
                            <Link>Spares</Link>
                        </SmallCell>
                        <SmallCell sortable
                                   onClick={() => this.handleSort('num_minifigs')}>
                            <Link>Minifigs</Link>
                        </SmallCell>
                        <SmallCell><span>Members</span></SmallCell>
                        <SmallCell sortable
                                   onClick={() => this.handleSort('has_gear')}>
                            <Link>Gear</Link>
                        </SmallCell>
                        <SmallCell><span>Builds</span></SmallCell>
                        <SmallCell thickright><span>View</span></SmallCell>
                    </Header>
                    <Body>
                    {members.map((member, index) => 
                        <div key={index}>
                            <SmallCell thickleft
                                       onClick={() => this.showModal(member, 'name')}>
                                <Link title={member.name}>{member.name}</Link>
                            </SmallCell>
                            <SmallCell onClick={() => this.showModal(member, 'number')}>
                                <Link>{member.set_num}</Link>
                            </SmallCell>
                            <SmallCell><span>{member.year}</span></SmallCell>
                            <SmallCell><span title={member.theme}>{member.theme}</span></SmallCell>
                            <SmallCell onClick={() => this.showModal(member, 'piece')}>
                                <Link>{member.num_pieces}</Link>
                            </SmallCell>
                            <SmallCell><span>{member.num_spares}</span></SmallCell>
                            <SmallCell><span>{member.num_minifigs}</span></SmallCell>
                            <SmallCell><span>{memberLength(member.members)}</span></SmallCell>
                            <SmallCell><span>{member.has_gear ? 'True' : 'False'}</span></SmallCell>
                            <SmallCell><span>{memberLength(member.build_urls)}</span></SmallCell>
                            <SmallCell thickright><ViewIcon className="fas fa-external-link-alt"></ViewIcon></SmallCell>
                        </div>
                    )}
                    </Body>
                </Table>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    {this.modals()}
                </Modal>
            </div>
        );
    }
}