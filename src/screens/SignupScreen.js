import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
      />
      {state.errorMessage && (
        <Text style={styles.error}>{state.errorMessage}</Text>
      )}
      <Spacer>
        <Button title='Sign Up' onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.signIn}>
          Already have an account? Sign in instead
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 200,
  },
  error: {
    color: 'red',
    marginLeft: 15,
    fontSize: 16,
    marginTop: -15,
  },
  signIn: {
    color: 'blue',
    alignSelf: 'center',
  },
});

export default SignupScreen;
