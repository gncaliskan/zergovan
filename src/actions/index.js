import firebase from 'firebase';
import {
  KULLANICI_ADI_DEGISTI,
  SIFRE_DEGISTI,
  GIRIS_BASARILI,
  KAYIT_BASARILI,
  GIRIS_HATASI,
  KAYIT_HATASI
 } from './types';


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

export const girisYap = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: GIRIS_BASARILI, payload: user });
    })
    .catch(() => {
      dispatch({ type: GIRIS_HATASI });
    });
  };
};

export const kayitOl = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: KAYIT_BASARILI, payload: user });
    })
    .catch(() => {
      dispatch({ type: KAYIT_HATASI });
    });
  };
}
