import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneNumberVerificationScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirmation(confirmation);
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const confirmVerificationCode = async () => {
    try {
      await confirmation.confirm(verificationCode);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error confirming code:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send Code" onPress={signInWithPhoneNumber} />

      <TextInput
        placeholder="Enter verification code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <Button title="Verify Code" onPress={confirmVerificationCode} />
    </View>
  );
};

export default PhoneNumberVerificationScreen;