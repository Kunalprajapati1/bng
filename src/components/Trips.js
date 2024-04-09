import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const Trips = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        // Get the current user from Firebase Auth
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userEmail = currentUser.email;

          // Query the database for trips associated with the user's email
          const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
          const driverTripsData = driverTripsSnapshot.docs.map(doc => doc.data());

          const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
          const riderTripsData = riderTripsSnapshot.docs.map(doc => doc.data());

          const allTripsData = [...driverTripsData, ...riderTripsData];
          setUserTrips(allTripsData);
        } else {
          console.log('User not logged in.');
        }
      } catch (error) {
        console.error('Error fetching user trips:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserTrips();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>My Trips</Text>
          {userTrips.map((trip, index) => (
            <View key={index} style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Trip Details:</Text>
              <Text>Source: {trip.source}</Text>
              <Text>Destination: {trip.destination}</Text>
              <Text>Date: {trip.selectedDate}</Text>
              {/* Add more trip details as needed */}
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default Trips;
