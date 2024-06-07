
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// // import { useTheme } from '@react-navigation/native';
// // import firestore from '@react-native-firebase/firestore';
// // import auth from '@react-native-firebase/auth';

// // const Trips = () => {
// //   const [userTrips, setUserTrips] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const { colors } = useTheme();

// //   useEffect(() => {
// //     const fetchUserTrips = async () => {
// //       try {
// //         const currentUser = auth().currentUser;
// //         if (currentUser) {
// //           const userEmail = currentUser.email;

// //           const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
// //           const driverTripsData = driverTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: true }));

// //           const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
// //           const riderTripsData = riderTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: false }));

// //           const allTripsData = [...driverTripsData, ...riderTripsData];
// //           setUserTrips(allTripsData);
// //         } else {
// //           console.log('User not logged in.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching user trips:', error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchUserTrips();
// //   }, []);

// //   const deleteTrip = async (tripId, isDriver) => {
// //     try {
// //       const tripRef = isDriver
// //         ? firestore().collection('Drivers').doc(tripId)
// //         : firestore().collection('Riders').doc(tripId);
  
// //       const tripSnapshot = await tripRef.get();
// //       const tripData = tripSnapshot.data();
  
// //       Alert.alert(
// //         'Delete Trip',
// //         'Are you sure you want to delete this trip?',
// //         [
// //           {
// //             text: 'Cancel',
// //             style: 'cancel',
// //           },
// //           {
// //             text: 'Delete',
// //             onPress: async () => {
// //               await tripRef.delete();
  
// //               await firestore().collection('DeletedTrips').add({
// //                 ...tripData,
// //                 deletedAt: firestore.FieldValue.serverTimestamp(),
// //               });
  
// //               setUserTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripId));
  
// //               console.log('Trip deleted successfully.');
// //             },
// //           },
// //         ],
// //         { cancelable: false }
// //       );
// //     } catch (error) {
// //       console.error('Error deleting trip:', error);
// //       Alert.alert('Error', 'Failed to delete trip. Please try again later.');
// //     }
// //   };
// //   return (
// //     <View style={[styles.container, { backgroundColor: colors.background }]}>
// //       <ScrollView contentContainerStyle={styles.scrollView}>
// //         {isLoading ? (
// //           <ActivityIndicator size="large" color={colors.primary} />
// //         ) : (
// //           <>
// //             <Text style={[styles.heading, { color: colors.text }]}>My Trips</Text>
// //             {userTrips.map((trip, index) => (
// //               <View key={index} style={styles.tripContainer}>
// //                 <Text style={[styles.tripText, { color: colors.text }]}>Trip Details:</Text>
// //                 <Text style={[styles.tripText, { color: colors.text }]}>Source: {trip.source}</Text>
// //                 <Text style={[styles.tripText, { color: colors.text }]}>Destination: {trip.destination}</Text>
// //                 <Text style={[styles.tripText, { color: colors.text }]}>Date: {trip.selectedDate}</Text>
// //                 <Text style={[styles.tripText, { color: colors.text }]}>Distance: {trip.distance}</Text>
// //                 <Text style={[styles.tripText, { color: colors.text }]}>Price: {trip.price}</Text>
// //                 <TouchableOpacity onPress={() => deleteTrip(trip.id, trip.isDriver)} style={styles.deleteButton}>
// //                   <Text style={styles.deleteButtonText}>Delete</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             ))}
// //           </>
// //         )}
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   scrollView: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   tripContainer: {
// //     marginBottom: 20,
// //     padding: 10,
// //     borderWidth: 1,
// //     borderColor: '#706a6a',
// //     borderRadius: 10,
// //     width: '100%',
// //   },
// //   tripText: {
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   deleteButton: {
// //     backgroundColor: 'red',
// //     padding: 10,
// //     borderRadius: 5,
// //     marginTop: 10,
// //     alignItems: 'center',
// //   },
// //   deleteButtonText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default Trips;


// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import moment from 'moment';

// const Trips = () => {
//   const [userTrips, setUserTrips] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [deletingTripId, setDeletingTripId] = useState(null); // New state variable to track deleting trip ID
//   const { colors } = useTheme();

//   useEffect(() => {
//     const fetchUserTrips = async () => {
//       try {
//         const currentUser = auth().currentUser;
//         if (currentUser) {
//           const userEmail = currentUser.email;

//           const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
//           const driverTripsData = driverTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: true }));

//           const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
//           const riderTripsData = riderTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: false }));

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

//   const deleteTrip = async (tripId, isDriver, tripDate) => {
//     const currentDate = moment().startOf('day');
//     const tripDateObj = moment(tripDate, 'YYYY-MM-DD').startOf('day');

//     if (tripDateObj.isBefore(currentDate)) {
//       Alert.alert('Error', 'You can only delete trips with future dates.');
//       return;
//     }

//     try {
//       setDeletingTripId(tripId); // Set deletingTripId to track which trip is being deleted

//       const tripRef = isDriver
//         ? firestore().collection('Drivers').doc(tripId)
//         : firestore().collection('Riders').doc(tripId);

//       const tripSnapshot = await tripRef.get();
//       const tripData = tripSnapshot.data();

//       Alert.alert(
//         'Delete Trip',
//         'Are you sure you want to delete this trip?',
//         [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//             onPress: () => setDeletingTripId(null), // Reset deletingTripId if user cancels
//           },
//           {
//             text: 'Delete',
//             onPress: async () => {
//               await tripRef.delete();

//               await firestore().collection('DeletedTrips').add({
//                 ...tripData,
//                 deletedAt: firestore.FieldValue.serverTimestamp(),
//               });

//               setUserTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripId));

//               console.log('Trip deleted successfully.');
//               setDeletingTripId(null); // Reset deletingTripId after successful deletion
//             },
//           },
//         ],
//         { cancelable: false }
//       );
//     } catch (error) {
//       console.error('Error deleting trip:', error);
//       Alert.alert('Error', 'Failed to delete trip. Please try again later.');
//       setDeletingTripId(null); // Reset deletingTripId if there's an error
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {isLoading ? (
//           <ActivityIndicator size="large" color={colors.primary} />
//         ) : (
//           <>
//             <Text style={[styles.heading, { color: colors.text }]}>My Trips</Text>
//             {userTrips.map((trip, index) => (
//               <View key={index} style={styles.tripContainer}>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Trip Details:</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Source: {trip.source}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Destination: {trip.destination}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Date: {trip.selectedDate}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Distance: {trip.distance}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Price: {trip.price}</Text>
//                 <TouchableOpacity onPress={() => deleteTrip(trip.id, trip.isDriver, trip.selectedDate)} style={styles.deleteButton}>
//                   {deletingTripId === trip.id ? (
//                     <ActivityIndicator color="white" />
//                   ) : (
//                     <Text style={styles.deleteButtonText}>Delete</Text>
//                   )}
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   tripContainer: {
//     marginBottom: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#706a6a',
//     borderRadius: 10,
//     width: '100%',
//   },
//   tripText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   deleteButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default Trips;












// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import moment from 'moment';

// const Trips = () => {
//   const [userTrips, setUserTrips] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [deletingTripId, setDeletingTripId] = useState(null); // New state variable to track deleting trip ID
//   const { colors } = useTheme();

//   useEffect(() => {
//     const fetchUserTrips = async () => {
//       try {
//         const currentUser = auth().currentUser;
//         if (currentUser) {
//           const userEmail = currentUser.email;

//           const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
//           const driverTripsData = driverTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: true }));

//           const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
//           const riderTripsData = riderTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: false }));

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

//   const deleteTrip = async (tripId, isDriver, tripDate) => {
//     const currentDate = moment().startOf('day');
//     const tripDateObj = moment(tripDate, 'YYYY-MM-DD').startOf('day');

//     if (tripDateObj.isBefore(currentDate)) {
//       Alert.alert('Error', 'You can only delete trips with future dates.');
//       return;
//     }

//     try {
//       setDeletingTripId(tripId); // Set deletingTripId to track which trip is being deleted

//       const tripRef = isDriver
//         ? firestore().collection('Drivers').doc(tripId)
//         : firestore().collection('Riders').doc(tripId);

//       const tripSnapshot = await tripRef.get();
//       const tripData = tripSnapshot.data();

//       Alert.alert(
//         'Delete Trip',
//         'Are you sure you want to delete this trip?',
//         [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//             onPress: () => setDeletingTripId(null), // Reset deletingTripId if user cancels
//           },
//           {
//             text: 'Delete',
//             onPress: async () => {
//               await tripRef.delete();

//               await firestore().collection('DeletedTrips').add({
//                 ...tripData,
//                 deletedAt: firestore.FieldValue.serverTimestamp(),
//               });

//               setUserTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripId));

//               console.log('Trip deleted successfully.');
//               setDeletingTripId(null); // Reset deletingTripId after successful deletion
//             },
//           },
//         ],
//         { cancelable: false }
//       );
//     } catch (error) {
//       console.error('Error deleting trip:', error);
//       Alert.alert('Error', 'Failed to delete trip. Please try again later.');
//       setDeletingTripId(null); // Reset deletingTripId if there's an error
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {isLoading ? (
//           <ActivityIndicator size="large" color={colors.primary} />
//         ) : (
//           <>
//             <Text style={[styles.heading, { color: colors.text }]}>My Trips</Text>
//             {userTrips.map((trip, index) => (
//               <View key={index} style={styles.tripContainer}>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Trip Details:</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Source: {trip.source}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Destination: {trip.destination}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Date: {trip.selectedDate}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Distance: {trip.distance}</Text>
//                 <Text style={[styles.tripText, { color: colors.text }]}>Price: {trip.price}</Text>
//                 {moment(trip.selectedDate, 'YYYY-MM-DD').startOf('day').isAfter(moment().startOf('day')) ? (
//                   <TouchableOpacity onPress={() => deleteTrip(trip.id, trip.isDriver, trip.selectedDate)} style={styles.deleteButton}>
//                     {deletingTripId === trip.id ? (
//                       <ActivityIndicator color="white" />
//                     ) : (
//                       <Text style={styles.deleteButtonText}>Delete</Text>
//                     )}
//                   </TouchableOpacity>
//                 ) : null}
//               </View>
//             ))}
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Alert,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';

const Trips = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingTripId, setDeletingTripId] = useState(null); // New state variable to track deleting trip ID
  const { colors } = useTheme();

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userEmail = currentUser.email;

          const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
          const driverTripsData = driverTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: true }));

          const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
          const riderTripsData = riderTripsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), isDriver: false }));

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

  const deleteTrip = async (tripId, isDriver, tripDate) => {
    const currentDate = moment().startOf('day');
    const tripDateObj = moment(tripDate, 'YYYY-MM-DD').startOf('day');

    if (tripDateObj.isBefore(currentDate)) {
      Alert.alert('Error', 'You can only delete trips with future dates.');
      return;
    }

    try {
      setDeletingTripId(tripId); // Set deletingTripId to track which trip is being deleted

      const tripRef = isDriver
        ? firestore().collection('Drivers').doc(tripId)
        : firestore().collection('Riders').doc(tripId);

      const tripSnapshot = await tripRef.get();
      const tripData = tripSnapshot.data();

      Alert.alert(
        'Delete Trip',
        'Are you sure you want to delete this trip?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => setDeletingTripId(null), // Reset deletingTripId if user cancels
          },
          {
            text: 'Delete',
            onPress: async () => {
              await tripRef.delete();

              await firestore().collection('DeletedTrips').add({
                ...tripData,
                deletedAt: firestore.FieldValue.serverTimestamp(),
              });

              setUserTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripId));

              console.log('Trip deleted successfully.');
              setDeletingTripId(null); // Reset deletingTripId after successful deletion
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error deleting trip:', error);
      Alert.alert('Error', 'Failed to delete trip. Please try again later.');
      setDeletingTripId(null); // Reset deletingTripId if there's an error
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <>
      <Image source={require('../components/assets/trippage.jpg')} style={styles.image2} />

            <Text style={[styles.heading, { color: colors.text }]}>My Trips</Text>
            {userTrips.map((trip, index) => (
              <View key={index} style={styles.tripContainer}>
                <Text style={[styles.tripText, { color: colors.text }]}>Trip Details:</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Source: {trip.source}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Destination: {trip.destination}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Date: {trip.selectedDate}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Distance: {trip.distance}</Text>
                <Text style={[styles.tripText, { color: colors.text }]}>Price: {trip.price}</Text>
                {moment(trip.selectedDate, 'YYYY-MM-DD').startOf('day').isAfter(moment().startOf('day')) ? (
                  <TouchableOpacity onPress={() => deleteTrip(trip.id, trip.isDriver, trip.selectedDate)} style={styles.deleteButton}>
                    {deletingTripId === trip.id ? (
                      <ActivityIndicator color="white" />
                    ) : (
                      <Text style={styles.deleteButtonText}>Delete</Text>
                    )}
                  </TouchableOpacity>
                ) : (
                  <Text style={styles.cannotDeleteText}>You can delete only upcoming trips</Text>
                )}
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
    // padding: 20,
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
  image2: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  tripContainer: {
    paddingHorizontal:10,
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
  deleteButton: {
    backgroundColor: '#ffde38cf',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  cannotDeleteText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
});

export default Trips;
















