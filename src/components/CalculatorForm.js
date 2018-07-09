import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  margin: 10px;
`;

const Label = styled.Text`
  margin: 0 0 0 4px;
`;

const Input = styled.TextInput`
  height: 50px;
  padding: 0 5px;
  font-size: 18px;
`;

class CalculatorForm extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0984e3',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    title: 'Compounded',
  };

  render() {
    return (
      <Container>
        <Label>Initial Investment</Label>
        <Input keyboardType="numeric" placeholder="$1000" />
        <Label>Annual Interest Rate</Label>
        <Input keyboardType="numeric" placeholder="6.5%" />
        <Label>Investment Length</Label>
        <Input keyboardType="numeric" placeholder="30 years" />
        <Label>Contribution Frequency</Label>
        <Input keyboardType="numeric" placeholder="Monthly" />
        <Label>Contribution Amount</Label>
        <Input keyboardType="numeric" placeholder="$100" />
      </Container>
    );
  }
}

export default CalculatorForm;
