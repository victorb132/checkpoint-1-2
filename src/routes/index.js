import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome'

import Home from '../screens/Home';
import Details from '../screens/Details';
import CreateNote from '../screens/CreateNote';
import EditNote from '../screens/EditNote';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#12044a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} >
      <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
        title: 'Minhas Notas',
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('CreateNote')}>
              <Icon name="plus" size={20} color={'white'} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          )
        },
      })}
      />
      <Stack.Screen name="Details" component={Details} options={{
        title: 'Detalhes da Nota'
      }} />
      <Stack.Screen name="CreateNote" component={CreateNote} options={{
        title: 'Criação da Nota'
      }} />
      <Stack.Screen name="EditNote" component={EditNote} options={{
        title: 'Editar Nota'
      }} />
    </Stack.Navigator>
  );
}