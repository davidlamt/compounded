import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorForm from '../../src/components/CalculatorForm';

describe('CalculatorForm', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CalculatorForm />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
