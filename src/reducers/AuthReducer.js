import {
  KULLANICI_ADI_DEGISTI,
  SIFRE_DEGISTI,
  GIRIS_BASARILI,
  KAYIT_BASARILI,
  GIRIS_HATASI,
  KAYIT_HATASI,
  KULLANICI_GIRISI,
  SIFRE_2_DEGISTI,
  KULLANICI_KAYDI
} from '../actions/types';

const INITIAL_STATE =
{
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  authenticated: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KULLANICI_ADI_DEGISTI:
      return Object.assign({}, state, { email: action.payload });
    case SIFRE_DEGISTI:
      return Object.assign({}, state, { password: action.payload });
    case SIFRE_2_DEGISTI:
        return Object.assign({}, state, { password2: action.payload });
    case GIRIS_BASARILI:
        return Object.assign({}, state,
          {
            user: action.payload,
            error: '',
            loading: false,
            authenticated: true
          });
    case KAYIT_BASARILI:
        return Object.assign({}, state,
          {
          user: action.payload,
          error: '',
          loading: false,
          authenticated: true
        });
    case GIRIS_HATASI:
        return Object.assign({}, state,
        {
          error: 'Giriş hatalı',
          loading: false,
          authenticated: false
        });
    case KAYIT_HATASI:
        return Object.assign({}, state,
          {
           error: 'Kayıt hatalı',
           loading: false,
           authenticated: false
         });
    case KULLANICI_GIRISI:
        return Object.assign({}, state, { loading: true, error: '' });
    case KULLANICI_KAYDI:
            return Object.assign({}, state, { loading: true, error: '' });
    default:
     return state;
  }
};
