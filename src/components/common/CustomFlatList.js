import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const CustomFlatList = ({ itemList }) => {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Black Order
        </Text>
          <FlatList
          data={itemList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
          }
          keyExtractor={item => item.name}
          />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  detail: {
    color: 'red'
  }

});

export { CustomFlatList };
