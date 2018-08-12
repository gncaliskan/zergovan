import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { kullaniciAdiDegisti, sifreDegisti, girisYap, kayitOl } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class GirisYap extends Component {

  kullaniciAdiDegistir(text) {
    this.props.kullaniciAdiDegisti(text);
  }

  sifreDegistir(text) {
    this.props.sifreDegisti(text);
  }

  girisYapBasildi() {
    const { email, password } = this.props;
    this.props.girisYap({ email, password });
  }

  kayitOlBasildi() {
    const { email, password } = this.props;
    this.props.kayitOl({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
        </View>
      );
    }
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

          {this.renderError()}
          <CardSection>
            <Button onPress={this.girisYapBasildi.bind(this)}>
              Giriş Yap
            </Button>
            <Button onPress={this.kayitOlBasildi.bind(this)}>
              Kayıt Ol
            </Button>
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
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps,
  { kullaniciAdiDegisti, sifreDegisti, girisYap, kayitOl })(GirisYap);
