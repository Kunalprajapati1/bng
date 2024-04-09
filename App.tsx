// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Search from './src/components/Search';
import Menu from './src/components/Menu';
import Login from './src/components/Login';
import Sign from './src/components/Sign';
import Profile from './src/components/Profile';
import Contact from './src/components/Contact';
import Trips from './src/components/Trips';
import Server from './src/components/Server';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{
        headerShown: false, 
      }}
    
      
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Trips" component={Trips} />
        <Stack.Screen name="Server" component={Server} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
