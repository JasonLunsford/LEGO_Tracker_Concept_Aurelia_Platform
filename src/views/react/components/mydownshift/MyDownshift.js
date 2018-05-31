import React, {Component} from 'react';

import Downshift from 'downshift';

import styled from 'styled-components';
import {Container, DownshiftBox, Input} from './styles/mydownshift.sc';

export default class MyDownshift extends Component {

    render() {
        const { items } = this.props;

        const killEvent = e => {
            e.preventDefault()
            e.stopPropagation();
        }

        return (
            <Container onClick={e => killEvent(e)}>
                <DownshiftBox>
                    <Downshift
                        onChange={selection => alert(`You selected ${selection.value}`)}
                        itemToString={item => (item ? item.value : '')}
                    >
                        {({
                          getInputProps,
                          getItemProps,
                          isOpen,
                          inputValue,
                          highlightedIndex,
                          selectedItem,
                        }) => (
                          <div>
                            <Input {...getInputProps()} />
                            {isOpen ? (
                              <div>
                                {items
                                  .filter(item => !inputValue || item.value.includes(inputValue))
                                  .map((item, index) => (
                                    <div
                                      {...getItemProps({
                                        key: item.value,
                                        index,
                                        item,
                                        style: {
                                          backgroundColor:
                                            highlightedIndex === index ? 'lightgray' : 'white',
                                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                                        },
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
