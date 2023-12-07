import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Language from './screens/onboarding/Language';
import OnboardingSlides from './screens/onboarding/OnboardingSlides';


const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer 
        >
      <Stack.Navigator>
        <Stack.Screen 
            name="Languages" 
            component={Language}
            options={{ headerShown: true }}
 />
        <Stack.Screen 
            name="OnboardingSlides" 
            component={OnboardingSlides}
            options={{ headerShown: true }}
/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
