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
  // const textColor = colorScheme === 'dark' ? '#000000' : '#ffffff';
  const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


  // const textColor = colorScheme === 'dark' ? 'white' : 'black';
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
      // Clear any async data if necessary (e.g., AsyncStorage.clear())
      await AsyncStorage.clear();

      await firebase.auth().signOut();
      navigation.navigate('Home'); // Navigate to the Home screen
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!userDetails) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailText}>{userDetails.email}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Name:</Text>
          <Text style={styles.detailText}>{userDetails.name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mobile Number:</Text>
          <Text style={styles.detailText}>{userDetails.mobileNumber}</Text>
        </View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
  },
  detailItem: {
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailText: {
    fontSize: 16,
    color: '#555',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
