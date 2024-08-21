


import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import Home from './Home';
import PaymentScreen from './Payment';
import Trips from './Trips';
import Profile from './Profile';
import AllRides from './allrides';
import Publish from './Publish';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={14}
            style={styles.BlurViewStyles}
          />
        ),
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'Home':
              label = 'Home';
              break;
            case 'Payment':
              label = 'Payment';
              break;
            case 'allrides':
              label = 'Rides';
              break;
            case 'Trips':
              label = 'Trips';
              break;
            case 'Profile':
              label = 'Profile';
              break;
            default:
              label = route.name;
          }

          return (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? '#01b25f' : 'black' },
              ]}
            >
              {label}
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../components/assets/app_images/home.png')}
              style={[
                styles.icon,
                {
                  tintColor: focused ? '#01b25f' : 'black',
                  width: focused ? 30 : 26,
                  height: focused ? 30 : 26,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../components/assets/app_images/income.png')}
              style={[
                styles.icon,
                {
                  tintColor: focused ? '#01b25f' : 'black',
                  width: focused ? 30 : 26,
                  height: focused ? 30 : 26,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Publish"
        component={Publish}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../components/assets/app_images/taxi.png')}
              style={[
                styles.icon,
                {
                  tintColor: focused ? '#01b25f' : 'black',
                  width: focused ? 30 : 26,
                  height: focused ? 30 : 26,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../components/assets/app_images/distance.png')}
              style={[
                styles.icon,
                {
                  tintColor: focused ? '#01b25f' : 'black',
                  width: focused ? 30 : 26,
                  height: focused ? 30 : 26,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../components/assets/app_images/avatar.png')}
              style={[
                styles.icon,
                {
                  tintColor: focused ? '#01b25f' : 'black',
                  width: focused ? 30 : 26,
                  height: focused ? 30 : 26,
                },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    color: '#01b25f',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabBarLabelStyle: {
    marginBottom: 8, // Move the label slightly upward
  },
  tabBarLabel: {
    fontFamily: 'Poppins-SemiBold', // Set the font family to Poppins
    fontSize: 12, // Adjust font size if needed
  },
});

export default TabNavigator;
