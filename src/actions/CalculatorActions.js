export const FIELD_UPDATE = 'FIELD_UPDATE';

export const updateField = ({ prop, value }) => ({
  type: FIELD_UPDATE,
  payload: { prop, value },
});
