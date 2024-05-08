// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import auth from '@react-native-firebase/auth'; // Import Firebase Auth
// import { useColorScheme } from 'react-native';
// const Trips = () => {
//   const [userTrips, setUserTrips] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const colorScheme = useColorScheme();
//   // const textColor = colorScheme === 'dark' ? 'white' : 'black';
//   // const textColor = colorScheme === 'dark' ? '#000000' : '#ffffff';
//   const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


//   useEffect(() => {
//     const fetchUserTrips = async () => {
//       try {
//         // Get the current user from Firebase Auth
//         const currentUser = auth().currentUser;
//         if (currentUser) {
//           const userEmail = currentUser.email;

//           // Query the database for trips associated with the user's email
//           const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
//           const driverTripsData = driverTripsSnapshot.docs.map(doc => doc.data());

//           const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
//           const riderTripsData = riderTripsSnapshot.docs.map(doc => doc.data());

//           const allTripsData = [...driverTripsData, ...riderTripsData];
//           setUserTrips(allTripsData);
//         } else {
//           console.log('User not logged in.');
//         }
//       } catch (error) {
//         console.error('Error fetching user trips:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserTrips();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {isLoading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           <Text style={{ fontSize: 20, marginBottom: 10 }}>My Trips</Text>
//           {userTrips.map((trip, index) => (
//             <View key={index} style={{ marginBottom: 20 }}>
//               <Text style={{ fontWeight: 'bold' }}>Trip Details:</Text>
//               <Text>Source: {trip.source}</Text>
//               <Text>Destination: {trip.destination}</Text>
//               <Text>Date: {trip.selectedDate}</Text>
//               <Text>Distance: {trip.distance}</Text>
//               <Text>Price: {trip.price}</Text>

          
//             </View>
//           ))}
//         </>
//       )}
//     </View>
//   );
// };

// export default Trips;

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Trips = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userEmail = currentUser.email;

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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <>
            <Text style={[styles.heading, { color: colors.text }]}>My Trips</Text>
            {userTrips.map((trip, index) => (
              <View key={index} style={styles.tripContainer}>
                <Text style={[styles.tripText, { color: colors.text }]}>Trip Details:</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Source: {trip.source}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Destination: {trip.destination}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Date: {trip.selectedDate}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Distance: {trip.distance}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Price: {trip.price}</Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tripContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#706a6a',
    borderRadius: 10,
    width: '100%',
  },
  tripText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Trips;
