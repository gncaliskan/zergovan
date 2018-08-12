import {
  KULLANICI_ADI_DEGISTI,
  SIFRE_DEGISTI,
  GIRIS_BASARILI,
  KAYIT_BASARILI,
  GIRIS_HATASI,
  KAYIT_HATASI
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KULLANICI_ADI_DEGISTI:
      return Object.assign({}, state, { email: action.payload });
    case SIFRE_DEGISTI:
      return Object.assign({}, state, { password: action.payload });
    case GIRIS_BASARILI:
        return Object.assign({}, state, { user: action.payload });
    case KAYIT_BASARILI:
        return Object.assign({}, state, { user: action.payload });
    case GIRIS_HATASI:
        return Object.assign({}, state, { error: 'Giriş hatalı' });
    case KAYIT_HATASI:
        return Object.assign({}, state, { error: 'Kayıt hatalı' });
    default:
     return state;
  }
};
