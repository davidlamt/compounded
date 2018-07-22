import React from 'react';
import { Picker, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.Text`
  margin: 0 0 0 4px;
`;

const SelectField = props => {
  const { data, label, onValueChange, selectedValue } = props;

  return (
    <View>
      <Label>{label}</Label>
      <Picker onValueChange={onValueChange} selectedValue={selectedValue}>
        {data.map(item => (
          <Picker.Item key={item.label} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

SelectField.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SelectField;
