import React, { Component } from 'react';
import { Image, Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { kullaniciAdiDegisti, sifreDegisti, girisYap, kayitOl } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { STATUS_BAR_HEIGHT } from '../constants'

class GirisYap extends Component {
  static navigationOptions = () => ({
    title: 'Giriş Yap',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: <View />
  })

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
  renderGirisButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <Button onPress={this.girisYapBasildi.bind(this)}>
        Giriş Yap
      </Button>
    )
  }

  renderKayitButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <Button onPress={this.kayitOlBasildi.bind(this)}>
        Kayıt Ol
      </Button>
    )
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


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps,
  { kullaniciAdiDegisti, sifreDegisti, girisYap, kayitOl })(GirisYap);
