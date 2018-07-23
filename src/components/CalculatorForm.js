import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateField } from '../actions';
import { Button, InputField, SelectField } from './common';

const Container = styled.View`
  margin: 10px;
`;

export class CalculatorForm extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0984e3',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    title: 'Compounded',
  };

  static propTypes = {
    initInvestment: PropTypes.string,
    updateField: PropTypes.func.isRequired,
  };

  static defaultProps = {
    initInvestment: null,
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
    const { initInvestment, updateField } = this.props;

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
          onChangeText={value =>
            updateField({
              prop: 'initInvestment',
              value: parseInt(value, 10),
            })
          }
          placeholder="$1000"
          value={initInvestment}
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
        <Button label="Calculate" onPress={() => {}} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {
    annualInterestRate,
    contributionAmt,
    contributionFreq,
    initInvestment,
    investmentLen,
  } = state.fields;

  return {
    annualInterestRate,
    contributionAmt,
    contributionFreq,
    initInvestment: initInvestment && initInvestment.toString(),
    investmentLen,
  };
};

export default connect(
  mapStateToProps,
  { updateField }
)(CalculatorForm);
