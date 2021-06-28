import React from 'react';

import {ImageBackground ,StyleSheet ,View,Image ,Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require('../assets/background.jpg')}
        style={styles.background}
        >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/favicon.png')}/>
        <Text>Sell what you don't Need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background :{
        flex : 1,
        justifyContent : "flex-end",
        alignItems : "center",
    },
    loginButton:{
       width : "100%",
       height : 70,
       backgroundColor : "green" ,
       
    },
    registerButton:{
        width : "100%",
        height : 70,
        backgroundColor : "blue" ,
        
     },
     logo :{
         width :100,
         height : 100, 
         position : "absolute", 
         top : 80,
         
     },
     logoContainer :{
         position :"absolute",
         top : 70,
         alignItems :"center"

     }
    
})
export default WelcomeScreen;