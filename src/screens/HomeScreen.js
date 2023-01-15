import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TextInput} from 'react-native';
import Header from '../components/Header';

export default function HomeScreen(){
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image}
        />
      </View>
      <TextInput style={styles.text} defaultValue="You can type in me"/>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    text: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    image: {
        width: 200,
        height: 200,
    }
});