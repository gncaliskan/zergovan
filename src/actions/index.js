import firebase from 'firebase';

require('firebase/firestore');

import {
  KULLANICI_ADI_DEGISTI,
  SIFRE_DEGISTI,
  GIRIS_BASARILI,
  KAYIT_BASARILI,
  GIRIS_HATASI,
  KAYIT_HATASI,
  KULLANICI_GIRISI,
  KULLANICI_KAYDI,
  SIFRE_2_DEGISTI,
  GETTING_STORIES,
  LIST_STORIES
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

export const sifre2Degisti = (text) => {
  return {
    type: SIFRE_2_DEGISTI,
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

export const kayitOl = ({ email, password, password2 }) => {
  return (dispatch) => {
    dispatch({ type: KULLANICI_KAYDI });
    if (password === password2) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => {
         dispatch({ type: KAYIT_BASARILI, payload: user });
       })
       .catch((error) => {
         console.log(error);
         dispatch({ type: KAYIT_HATASI });
       });
    } else {
        dispatch({ type: KAYIT_HATASI });
    }
  };
};

export const getStories = () => {
  const stories = { name: '', detail: null };
  return (dispatch) => {
    dispatch({ type: GETTING_STORIES });
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const collection = firestore.collection('Story');
    collection.get().then(snapshot => {
      snapshot.forEach(doc => {
        stories.name = doc.data().storyName;
        stories.detail = doc.data().updatedDate;
        console.log(doc.data().storyName);
        console.log(doc.data().updatedDate);
        dispatch({ type: LIST_STORIES, payload: stories });
      });
    });
  };
};
