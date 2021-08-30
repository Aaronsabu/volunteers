import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import {Input, Button} from 'react-native-elements';
import { auth } from '../firebase/config';
import NavLink from '../components/NavLinks';
import { navigate } from '../navigationRef';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigate("Default");
        console.log("Success");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };
  

  return (
    <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled={false}
     >
    <View style={styles.container}>
      <Image
        source={require('../img/pinkpal.png')}
        style={{width: 300, height: 150}}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={text => { setEmail(text) }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={password => { setPassword(password) }}
          onSubmitEditing={signIn}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Button containerStyle={styles.button} title="Login" onPress={signIn} />

      <NavLink 
        text="Don't have an account? Sign up instead!"
        routeName="Register"
      />
    </View>
    </KeyboardAwareScrollView>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  button: {
    width: 200,
    marginTop: 30,
    marginBottom:10
  },
  inputContainer: {
    width: 300,
  },
});

export default LoginScreen;
