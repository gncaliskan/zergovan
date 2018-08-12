import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { kullaniciAdiDegisti, sifreDegisti } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class GirisYap extends Component {

  kullaniciAdiDegistir(text) {
    this.props.kullaniciAdiDegisti(text);
  }

  sifreDegistir(text) {
    this.props.sifreDegisti(text);
  }


  girisYap() {
    const { email, password } = this.props;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
      this.props.error = 'Giriş yapma başarısız.';
    });
  }

  kayitOl() {
    const { email, password } = this.props;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
      this.props.error = 'Kayıt olma başarısız.';
    });
  }


  renderGirisButton() {
      if (this.props.loading) {
        return <Spinner size="small" />;
      }

      return (
        <Button onPress={this.girisYap.bind(this)}>
          Giriş Yap
        </Button>
      );
    }

    renderKayitButton() {
        if (this.props.loading) {
          return <Spinner size="small" />;
        }

        return (
          <Button onPress={this.kayitOl.bind(this)}>
            Kayıt Ol
          </Button>
        );
      }
  render() {
      return (
        <Card>
          <CardSection>
                <Image
                  source={require('../assets/logo/logo_buyuk.png')}
                  style={styles.logoStyle} resizeMode='stretch'
                />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Kullanıcı Adı"
              value={this.props.email}
              autoCapitalize="none"
              onChangeText={this.kullaniciAdiDegistir.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="Şifre"
              autoCapitalize="none"
              value={this.props.password}
              onChangeText={this.sifreDegistir.bind(this)}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderGirisButton()}
            {this.renderKayitButton()}
          </CardSection>
        </Card>
      );
    }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },

  logoStyle: {
    height: 150,
    width: 60,
    alignSelf: 'center'

  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
};


const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { kullaniciAdiDegisti, sifreDegisti })(GirisYap);
