import FieldReducer from '../../src/reducers/FieldReducer';
import { updateField } from '../../src/actions';

describe('FieldReducer', () => {
  it('should handle FIELD_UPDATE', () => {
    expect(
      FieldReducer({}, updateField({ prop: 'field', value: 'value' }))
    ).toEqual({
      field: 'value',
    });
  });

  it('should handle an unknown action type', () => {
    expect(FieldReducer({}, { type: 'UNKNOWN' })).toEqual({});
  });
});
