import firebase from 'firebase';
import {
  KULLANICI_ADI_DEGISTI,
  SIFRE_DEGISTI,
  GIRIS_BASARILI,
  KAYIT_BASARILI,
  GIRIS_HATASI,
  KAYIT_HATASI,
  KULLANICI_GIRISI,
  KULLANICI_KAYDI
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
    dispatch({ type: KULLANICI_GIRISI });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: GIRIS_BASARILI, payload: user });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GIRIS_HATASI });
    });
  };
};

export const kayitOl = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: KULLANICI_KAYDI });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: KAYIT_BASARILI, payload: user });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: KAYIT_HATASI });
    });
  };
};
