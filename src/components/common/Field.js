import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.Text`
  margin: 0 0 0 4px;
`;

const Input = styled.TextInput`
  height: 50px;
  padding: 0 5px;
  font-size: 18px;
`;

class Field extends Component {
  static propTypes = {
    blurOnSubmit: PropTypes.bool,
    getRef: PropTypes.func,
    keyboardType: PropTypes.oneOf(['numeric']),
    label: PropTypes.string.isRequired,
    nextField: PropTypes.node,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    blurOnSubmit: false,
    getRef: null,
    keyboardType: 'numeric',
    placeholder: '',
    nextField: null,
  };

  setInputRef = ref => {
    this.inputRef = ref;

    const { getRef } = this.props;

    if (getRef) {
      getRef(ref);
    }
  };

  render() {
    const {
      blurOnSubmit,
      keyboardType,
      label,
      nextField,
      placeholder,
    } = this.props;

    return (
      <View>
        <Label onPress={() => this.inputRef.focus()}>{label}</Label>
        <Input
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          onSubmitEditing={() => nextField && nextField.focus()}
          placeholder={placeholder}
          innerRef={this.setInputRef}
        />
      </View>
    );
  }
}

export default Field;
