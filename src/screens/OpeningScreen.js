import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';

// This is the opening view when the app is loading
// Shows a selected logo-brand image
export default function OpeningScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={""} style={styles.brandImage}>
            </Image>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    brandImage: {
        backgroundColor: "#000000"
    }
});

