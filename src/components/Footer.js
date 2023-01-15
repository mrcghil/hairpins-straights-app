import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const Footer = () => {
    return(
        <View style={styles.container}>
            <Text>This is the footer!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    color: "#FFFFFF",
    backgroundColor: "#FF0000",
    padding: 20,
    marginVertical: 8,
    fontSize: 32,
  }
});

export default App;
