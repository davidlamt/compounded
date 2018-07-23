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

class InputField extends Component {
  static propTypes = {
    blurOnSubmit: PropTypes.bool,
    getRef: PropTypes.func,
    keyboardType: PropTypes.oneOf(['numeric']),
    label: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    nextField: PropTypes.any,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    blurOnSubmit: false,
    getRef: null,
    keyboardType: 'numeric',
    onChangeText: null,
    placeholder: '',
    nextField: null,
    value: null,
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
      onChangeText,
      placeholder,
      value,
    } = this.props;

    return (
      <View>
        <Label onPress={() => this.inputRef.focus()}>{label}</Label>
        <Input
          blurOnSubmit={blurOnSubmit}
          innerRef={this.setInputRef}
          keyboardType={keyboardType}
          onChangeText={text => onChangeText && onChangeText(text)}
          onSubmitEditing={() => nextField && nextField.focus()}
          placeholder={placeholder}
          value={value}
        />
      </View>
    );
  }
}

export default InputField;
