import { FIELD_UPDATE } from '../actions';

const INITIAL_STATE = {
  annualInterestRate: null,
  contributionAmt: null,
  contributionFreq: 'Annually',
  initInvestment: null,
  investmentLen: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIELD_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
