import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import styled from 'styled-components';
import { InputField, SelectField } from './common';

const Container = styled.View`
  margin: 10px;
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

  state = {
    annualInterestRateRef: null,
    contributionAmt: null,
    investmentLenRef: null,
  };

  render() {
    const {
      annualInterestRateRef,
      contributionAmt,
      investmentLenRef,
    } = this.state;

    const contributionFreqs = [
      { label: 'Monthly', value: 'Monthly' },
      { label: 'Quarterly', value: 'Quarterly' },
      { label: 'Semiannually', value: 'Semiannually' },
      { label: 'Annually', value: 'Annually' },
    ];

    return (
      <Container>
        <InputField
          label="Initial Investment"
          nextField={annualInterestRateRef}
          placeholder="$1000"
        />
        <InputField
          label="Annual Interest Rate"
          nextField={investmentLenRef}
          placeholder="6.5%"
          getRef={ref => this.setState({ annualInterestRateRef: ref })}
        />
        <InputField
          label="Investment Length"
          placeholder="30 years"
          nextField={contributionAmt}
          getRef={ref => this.setState({ investmentLenRef: ref })}
        />
        <SelectField
          data={contributionFreqs}
          label="Contribution Frequency"
          onValueChange={() => {}}
          selectedValue="Annually"
        />
        <InputField
          label="Contribution Amount"
          placeholder="$100"
          getRef={ref => this.setState({ contributionAmt: ref })}
        />
      </Container>
    );
  }
}

export default CalculatorForm;
