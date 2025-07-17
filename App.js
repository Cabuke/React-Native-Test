import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './src/screens/initialScreen';
import LoginScreen from './src/screens/loginScreen';
import SignUpScreen from './src/screens/signUpScreen';
import WelcomeScreen from './src/screens/welcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerLeft: null, title: 'Voltar' }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerLeft: null, title: 'Bem-vindo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
