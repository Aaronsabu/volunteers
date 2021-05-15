import React, {useState} from 'react';
import { StatusBar, View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {Input, Button} from 'react-native-elements';
import NavLink from '../components/NavLinks';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../img/pinkpal.png')}
        style={{width: 300, height: 150}}
      />
      <View style={styles.inputContainer}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChangeText={text => { setEmail(text) }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={password => { setPassword(password) }}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Button containerStyle={styles.button} title="Login" />

      <NavLink 
        text="Don't have an account? Sign up instead"
        routeName="Register"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 30,
  },
  inputContainer: {
    width: 300,
  },
});

export default LoginScreen;