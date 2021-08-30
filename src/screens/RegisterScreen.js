import React, {useState, useLayoutEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import NavLink from '../components/NavLinks';
import globalStyles from '../style/globalStyles';
import { auth } from '../firebase/config';
import {userCred} from '../firebase/config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = () => {
  const [credentials, setcredentials] = useState({
    name: '',
    number: '',
    aadhaar:'',
    email: ''
  });

  //console.log("Aadhaar number is " +credentials.aadhaar);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let userId;

  console.log("id : "+userId);


  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        userId = authUser.user.uid;
        console.log("ID IS "+userId);
        authUser.user.updateProfile({
          displayName: credentials.name
        });
        //handleUserCreated(authUser.user.uid);
      })
      .catch((error) => alert(error.message));
  };
  console.log("Unique id is " +userId);
  
  return (
    <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled={true}
  >
    <SafeAreaView style={globalStyles.androidSafeArea}>
     
    <Image style={styles.img} source={require('../img/pinkpal.png')} />
      <Text h3 style={styles.txt}>
        Create a PinkPal account
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
          placeholder="Aadhaar Number"
          autoFocus
          keyboardType="number-pad"
          value={credentials.aadhaar}
          onChangeText={text => setcredentials({...credentials,aadhaar: text})}
        />
        <Input
          placeholder="Email"
          type="email"
          value={credentials.email}
          onChangeText={text => {
            setcredentials({...credentials,email: text});
            setEmail(text);
            }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={register}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Button
       raised
       containerStyle={styles.button}
       title="Register"
       onPress={() =>{ register();
        userCred(credentials);
        }}
      />

      <NavLink 
        text="Already have an account? Login instead!"
        routeName="Login"
      />
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

RegisterScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 140
},
  txt: {
    paddingTop: 20,
    marginBottom: 50,
    textAlign: 'center'
  },
  button: {
    width: 200,
    marginTop: 30,
    marginBottom:10
  },
  inputContainer: {
    width: 300,
  }
});

export default RegisterScreen
