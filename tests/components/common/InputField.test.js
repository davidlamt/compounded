import React from 'react';
import renderer from 'react-test-renderer';
import InputField from '../../../src/components/common/InputField';

describe('InputField', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(<InputField label="Type something..." />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
