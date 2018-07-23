import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../src/components/common/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(<Button label="Click me" onPress={() => {}} />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
