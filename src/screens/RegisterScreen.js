import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import NavLink from '../components/NavLinks';
import {set} from 'react-native-reanimated';
import {userCred} from '../firebase/config';

const RegisterScreen = () => {
  const [credentials, setcredentials] = useState({
    name: '',
    number: '',
    email: ''
  });

  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Text h3 style={styles.txt}>
        {text-align: center}
        Create a PinkPal-Volunteer account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={credentials.name}
          onChangeText={text => setcredentials({...credentials,name: text})}
        />
        <Input
          placeholder="Mobile Number"
          autoFocus
          keyboardType="number-pad"
          value={credentials.number}
          onChangeText={text => setcredentials({...credentials,number: text})}
        />
        <Input
          placeholder="Email"
          type="email"
          value={credentials.email}
          onChangeText={text => setcredentials({...credentials,email: text})}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Button containerStyle={styles.button} title="Register" onPress={() =>userCred(credentials)}/>

      <NavLink 
        text="Don't have an account? Login instead"
        routeName="Login"
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
  txt: {
    marginBottom: 50,
    margintop: 30,
  },
  button: {
    width: 200,
    marginTop: 30,
  },
  inputContainer: {
    width: 300,
  },
});

export default RegisterScreen
