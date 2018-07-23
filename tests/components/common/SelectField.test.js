import React from 'react';
import renderer from 'react-test-renderer';
import SelectField from '../../../src/components/common/SelectField';

describe('SelectField', () => {
  it('renders without crashing', () => {
    const rendered = renderer
      .create(
        <SelectField
          data={[]}
          label="Select something..."
          onValueChange={() => {}}
          selectedValue="This one"
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
