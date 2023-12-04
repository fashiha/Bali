import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Petalokasi from './Petalokasiobjek'
import Register from '../screens/Register';
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Petalokasi" component={Petalokasi} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default MyStack