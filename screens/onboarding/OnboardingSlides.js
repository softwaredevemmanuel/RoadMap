import React from 'react';
import { View, Text, Button } from 'react-native';

const OnboardingSlides = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('OnboardingSlides')}
      />
    </View>
  );
};

export default OnboardingSlides;
