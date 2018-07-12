import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Field } from './common';

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
    contributionFreq: null,
    investmentLenRef: null,
  };

  render() {
    const {
      annualInterestRateRef,
      contributionAmt,
      contributionFreq,
      investmentLenRef,
    } = this.state;

    return (
      <Container>
        <Field
          label="Initial Investment"
          nextField={annualInterestRateRef}
          placeholder="$1000"
        />
        <Field
          label="Annual Interest Rate"
          nextField={investmentLenRef}
          placeholder="6.5%"
          getRef={ref => this.setState({ annualInterestRateRef: ref })}
        />
        <Field
          label="Investment Length"
          placeholder="30 years"
          nextField={contributionFreq}
          getRef={ref => this.setState({ investmentLenRef: ref })}
        />
        <Field
          label="Contribution Frequency"
          placeholder="Monthly"
          nextField={contributionAmt}
          getRef={ref => this.setState({ contributionFreq: ref })}
        />
        <Field
          label="ContributionAmount"
          placeholder="$100"
          getRef={ref => this.setState({ contributionAmt: ref })}
        />
      </Container>
    );
  }
}

export default CalculatorForm;
