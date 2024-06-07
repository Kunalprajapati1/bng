

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import { useColorScheme } from 'react-native';

const Profile = () => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);
  const colorScheme = useColorScheme();

  const primaryColor = '#FFEB3B'; // Yellow
  const secondaryColor = '#FFFFFF'; // White
  const textColor = '#000000'; // Black

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
        if (userDoc.exists) {
          setUserDetails(userDoc.data());
        } else {
          setUserDetails({
            email: currentUser.email,
            name: currentUser.displayName,
            mobileNumber: currentUser.phoneNumber
          });
        }
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // Clear any async data if necessary
      await firebase.auth().signOut();
      navigation.navigate('Home'); // Navigate to the Home screen
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!userDetails) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: primaryColor }]}>
        <ActivityIndicator size="large" color={primaryColor} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: primaryColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Profile</Text>
      <View style={[styles.detailsContainer, { backgroundColor: secondaryColor }]}>
        <View style={styles.detailItem}>
          <Text style={[styles.detailLabel, { color: textColor }]}>Email:</Text>
          <Text style={[styles.detailText, { color: textColor }]}>{userDetails.email}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={[styles.detailLabel, { color: textColor }]}>Name:</Text>
          <Text style={[styles.detailText, { color: textColor }]}>{userDetails.name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={[styles.detailLabel, { color: textColor }]}>Mobile Number:</Text>
          <Text style={[styles.detailText, { color: textColor }]}>{userDetails.mobileNumber}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={[styles.detailLabel, { color: textColor }]}>Gender:</Text>
          <Text style={[styles.detailText2, { color: textColor }]}>{userDetails.gender}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={handleLogout}  />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  detailItem: {
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
  },
  detailText2: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default Profile;
