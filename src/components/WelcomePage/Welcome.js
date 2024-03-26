import React from 'react';
import { View, Text, Button } from 'react-native';

const Welcome = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Welcome to My App!</Text>
      <Button title="Go to Home" onPress={goToHome} />
    </View>
  );
};

export default Welcome;