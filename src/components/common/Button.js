import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.TouchableOpacity`
  align-self: center;
  width: 200px;
  margin: 5px 0;
  border: 1px solid #007aff;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  align-self: center;
  padding: 10px 0;
  color: #007aff;
  font-size: 16px;
  font-weight: 400;
`;

const Button = props => {
  const { label, onPress } = props;

  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
