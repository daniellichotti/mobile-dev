import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { OrderScreen } from './src/screens/OrderScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarIconStyle: { fontSize: 24 },
          tabBarStyle: {
            backgroundColor: 'blue',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Detalhes') {
              iconName = 'settings'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Detalhes' component={DetailsScreen} />
        <Tab.Screen
          name='Pedidos'
          component={OrderScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='reorder-four-outline' size={size}
                color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

