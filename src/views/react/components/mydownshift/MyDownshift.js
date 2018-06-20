import React, {Component} from 'react';

import Downshift from 'downshift';

import _ from 'lodash';

import styled from 'styled-components';
import {Container, DownshiftBox, Input, I} from './styles/mydownshift.sc';

export default class MyDownshift extends Component {

    convert = {
        lower: value => { return _.toLower(value)}
    }

    render() {
        const { collection, selectionUpdate } = this.props;

        const killEvent = e => {
            e.preventDefault();
            e.stopPropagation();
        }

        const getMembers = collection => {
            return _.get(collection, 'members', []);
        }

        const updateInput = state => {
            console.log('name: ', state.selectedItem.name);
        }

        let items = [];

        return (
            <Container onClick={e => killEvent(e)}>
                <DownshiftBox>
                    <Downshift
                        onChange={selection => selectionUpdate(selection)}
                        itemToString={item => (item ? item.value : '')}
                    >
                        {({
                          getInputProps,
                          getItemProps,
                          isOpen,
                          inputValue,
                          highlightedIndex,
                          clearSelection
                        }) => (
                          <div>
                              <div className="inputBox">
                                <I className="fas fa-search"></I>
                                <Input {...getInputProps({
                                      onFocus: event => {
                                        items = [...getMembers(collection)]
                                      }
                                    })} />
                                <I className="fas fa-times" 
                                   onClick={() => clearSelection()}></I>
                              </div>
                              {isOpen ? (
                              <div className="menuBox">
                                {items
                                  .filter(item => {
                                        let value = this.convert.lower(inputValue);
                                        let name = this.convert.lower(item.name)
                                        return _.includes(name, value)
                                    })
                                  .map((item, index) => (
                                    <div
                                      {...getItemProps({
                                        key: item.name,
                                        index,
                                        item,
                                        style: {
                                          backgroundColor: highlightedIndex === index
                                            ? 'peachpuff'
                                            : 'white'
                                        }
                                      })}
                                    >
                                      {item.name}
                                    </div>
                                  ))}
                              </div>
                              ) : null}
                          </div>
                        )}
                    </Downshift>
                </DownshiftBox>
            </Container>
        );
    }
}
