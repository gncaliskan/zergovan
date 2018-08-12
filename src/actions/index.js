import { KULLANICI_ADI_DEGISTI, SIFRE_DEGISTI } from './types';


export const kullaniciAdiDegisti = (text) => {
  return {
    type: KULLANICI_ADI_DEGISTI,
    payload: text
  };
};

export const sifreDegisti = (text) => {
  return {
    type: SIFRE_DEGISTI,
    payload: text
  };
};
