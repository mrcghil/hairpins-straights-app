import React from "react";
import {
  // SafeAreaView,
  View,
  Button,
  StyleSheet,
  Text,
  // StatusBar,
} from "react-native";

const EpisodeItem = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Title</Text>
      <Button style={styles.button}>Listen</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    color: "#000000",
    backgroundColor: "#ffffff",
    fontSize: 20,
  },
});

export default EpisodeItem;
