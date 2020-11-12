import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function AboutScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:'center',letterSpacing:2}}>The best place to sell your house. Just post about the good qualities of house and let other application users to contact you</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default AboutScreen;