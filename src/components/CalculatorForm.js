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
    annualInterestRate: PropTypes.string,
    initInvestment: PropTypes.string,
    investmentLen: PropTypes.string,
    updateField: PropTypes.func.isRequired,
  };

  static defaultProps = {
    annualInterestRate: null,
    initInvestment: null,
    investmentLen: null,
  };

  state = {
    annualInterestRateRef: null,
    contributionAmtRef: null,
    investmentLenRef: null,
  };

  render() {
    const {
      annualInterestRateRef,
      contributionAmtRef,
      investmentLenRef,
    } = this.state;
    const {
      annualInterestRate,
      contributionAmt,
      initInvestment,
      investmentLen,
      updateField,
    } = this.props;

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
              value: parseInt(value, 10) || null,
            })
          }
          placeholder="$1000"
          value={initInvestment}
        />
        <InputField
          getRef={ref => this.setState({ annualInterestRateRef: ref })}
          label="Annual Interest Rate"
          nextField={investmentLenRef}
          onChangeText={value =>
            updateField({
              prop: 'annualInterestRate',
              value: parseInt(value, 10) || null,
            })
          }
          placeholder="6.5%"
          value={annualInterestRate}
        />
        <InputField
          getRef={ref => this.setState({ investmentLenRef: ref })}
          label="Investment Length"
          onChangeText={value =>
            updateField({
              prop: 'investmentLen',
              value: parseInt(value, 10) || null,
            })
          }
          placeholder="30 years"
          nextField={contributionAmtRef}
          value={investmentLen}
        />
        <SelectField
          data={contributionFreqs}
          label="Contribution Frequency"
          onValueChange={() => {}}
          selectedValue="Annually"
        />
        <InputField
          getRef={ref => this.setState({ contributionAmtRef: ref })}
          label="Contribution Amount"
          onChangeText={value =>
            updateField({
              prop: 'contributionAmt',
              value: parseInt(value, 10) || null,
            })
          }
          placeholder="$100"
          value={contributionAmt}
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
    annualInterestRate: annualInterestRate && annualInterestRate.toString(),
    contributionAmt: contributionAmt && contributionAmt.toString(),
    contributionFreq,
    initInvestment: initInvestment && initInvestment.toString(),
    investmentLen: investmentLen && investmentLen.toString(),
  };
};

export default connect(
  mapStateToProps,
  { updateField }
)(CalculatorForm);
