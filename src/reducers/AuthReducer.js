import { KULLANICI_ADI_DEGISTI, SIFRE_DEGISTI } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KULLANICI_ADI_DEGISTI:
      return Object.assign({}, state, { email: action.payload });
    case SIFRE_DEGISTI:
      return Object.assign({}, state, { password: action.payload });
    default:
     return state;
  }
};
