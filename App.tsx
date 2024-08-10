// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './src/components/Home';
// import Search from './src/components/Search';
// import Menu from './src/components/Menu';
// import Login from './src/components/Login';
// import Sign from './src/components/Sign';
// import Profile from './src/components/Profile';
// import Contact from './src/components/Contact';
// import Trips from './src/components/Trips';

// import Safety from './src/components/Safety';

// import Terms from './src/components/Terms';
// import Howto from './src/components/Howto';
// import Payment from './src/components/Payment';
// import Anywhere from './src/components/Anywhere';
// import Getstarted from './src/components/Getstarted';
// import Second from './src/components/Second';
// import Third from './src/components/Third';
// import Fourth from './src/components/Fourth';
// import Privacy from './src/components/Privacy';
// import Header from './src/components/Header';
// import SearchBar from './src/components/SearchBar';
// import TripModal from './src/components/TripModal';
// import TripList from './src/components/TripList';
// import TripItem from './src/components/TripItem';


// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
      
//       screenOptions={{
//         headerShown: false, 
//       }}
    
      
//       >
//         <Stack.Screen name="Getstarted" component={Getstarted} />
//         <Stack.Screen name="Second" component={Second} />
//         <Stack.Screen name="Third" component={Third} />
//         <Stack.Screen name="Fourth" component={Fourth} />

//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Search" component={Search} />
//         <Stack.Screen name="Menu" component={Menu} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Sign" component={Sign} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Contact" component={Contact} />
//         <Stack.Screen name="Trips" component={Trips} />
       
//         <Stack.Screen name="Safety" component={Safety} />
       
//         <Stack.Screen name="Terms" component={Terms} />
//         <Stack.Screen name="Howto" component={Howto} />
//         <Stack.Screen name="Payment" component={Payment} />
//         <Stack.Screen name="Anywhere" component={Anywhere} />
//         <Stack.Screen name="Privacy" component={Privacy} />
//         <Stack.Screen name="Header" component={Header} />
//         <Stack.Screen name="SearchBar" component={SearchBar} />
//         <Stack.Screen name="TripModal" component={TripModal} />
//         <Stack.Screen name="TripList" component={TripList} />
//         <Stack.Screen name="TripItem" component={TripItem} />
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
import React from 'react';
import { StatusBar } from 'react-native'; // StatusBar import karein
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
import Safety from './src/components/Safety';
import Terms from './src/components/Terms';
import Howto from './src/components/Howto';
import Payment from './src/components/Payment';
import Anywhere from './src/components/Anywhere';
import Getstarted from './src/components/Getstarted';
import Second from './src/components/Second';
import Third from './src/components/Third';
import Fourth from './src/components/Fourth';
import Privacy from './src/components/Privacy';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import TripModal from './src/components/TripModal';
import TripList from './src/components/TripList';
import TripItem from './src/components/TripItem';
import Splash from './src/components/Splash'; //
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* StatusBar component use kar rahe hain */}
      <StatusBar 
        barStyle="light-content" // Text aur icons ko white karega
        backgroundColor="#01b05f" // Status bar ka background black karega
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >  
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Getstarted" component={Getstarted} />
        {/* <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Trips" component={Trips} />
        <Stack.Screen name="Safety" component={Safety} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Howto" component={Howto} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Anywhere" component={Anywhere} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="TripModal" component={TripModal} />
        <Stack.Screen name="TripList" component={TripList} />
        <Stack.Screen name="TripItem" component={TripItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
