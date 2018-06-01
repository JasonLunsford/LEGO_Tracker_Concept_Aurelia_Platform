import React, {Component} from 'react';

import Downshift from 'downshift';

import styled from 'styled-components';
import {Container, DownshiftBox, Input, Row} from './styles/mydownshift.sc';

export default class MyDownshift extends Component {

    componentWillMount() {
        console.log('props: ', this.props);
    }

    render() {
        const { items, selectionUpdate } = this.props;

        const killEvent = e => {
            e.preventDefault()
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
                          inputValue
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
                                    <Row
                                      {...getItemProps({
                                        key: item.value,
                                        index,
                                        item
                                      })}
                                    >
                                      {item.value}
                                    </Row>
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
