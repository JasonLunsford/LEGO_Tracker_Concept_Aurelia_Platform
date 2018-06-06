import React, {Component} from 'react';

import Downshift from 'downshift';

import styled from 'styled-components';
import {Container, DownshiftBox, Input} from './styles/mydownshift.sc';

export default class MyDownshift extends Component {

    render() {
        const { items, selectionUpdate } = this.props;

        const killEvent = e => {
            e.preventDefault();
            e.stopPropagation();
        }

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
                          highlightedIndex
                        }) => (
                          <div>
                              <div className="inputBox">
                                <Input {...getInputProps()} />
                              </div>
                              {isOpen ? (
                              <div className="menuBox">
                                {items
                                  .filter(item => !inputValue || item.value.includes(inputValue))
                                  .map((item, index) => (
                                    <div
                                      {...getItemProps({
                                        key: item.value,
                                        index,
                                        item,
                                        style: {
                                          backgroundColor: highlightedIndex === index
                                            ? 'peachpuff'
                                            : 'white'
                                        }
                                      })}
                                    >
                                      {item.value}
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
