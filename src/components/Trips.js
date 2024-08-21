
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

// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Alert,Image } from 'react-native';
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
//     <View style={styles.container1}>
//       <View style={styles.imageContainer}>
//         <Image 
//           source={{ uri: 'https://i.pinimg.com/564x/cb/e3/8d/cbe38d855106d006061de795e541bd9f.jpg' }} 
//           style={styles.image}
//         />
//         <View style={styles.overlay}>
//           <Text style={styles.overlayText}>My Trips</Text>
//         </View>
//       </View>
//     </View>

//             {/* <Text style={[styles.heading, { color: colors.text }]}>My Trips</Text> */}
//             <View style={{ marginTop:20, }} >
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
//                 ) : (
//                   <Text style={styles.cannotDeleteText}>You can delete only upcoming trips</Text>
//                 )}
//               </View>
//             ))}</View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: 340, // Adjust as needed
//     height: 250, // Adjust as needed
//     borderBottomRightRadius: 150,
//     borderTopRightRadius: 150,
//     right:30
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     // left: 0,
//     width: 340, // Adjust as needed
//     height: 250, 
//     right:30,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.171)', // Semi-transparent background
//     borderBottomRightRadius: 150,
//     borderTopRightRadius: 150,
//     // right:30
//   },
//   overlayText: {
//     color: '#fff',
//     fontSize: 24,
//     fontFamily: 'Poppins-SemiBold',
//   },
//   container: {
//     flex: 1,
//     // padding: 20,
//     backgroundColor:'#e6f0eb',
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
//   image2: {
//     width: '100%',
//     height: 200,
//     marginBottom: 20,
//     top:0,
//   },
//   tripContainer: {
//     paddingHorizontal:10,
//     marginBottom: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#706a6a',
//     borderRadius: 10,
//     width: '100%',
//   },
//   tripText: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   deleteButton: {
//     backgroundColor: '#01b25f',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   deleteButtonText: {
//     color: '#000000',
//     fontWeight: 'bold',
//   },
//   cannotDeleteText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#000000',
//     textAlign: 'center',
//   },
// });

// export default Trips;
















import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

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
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {isLoading ? (
          <ActivityIndicator size="large" color='white' />
        ) : (
          <>
            <View style={styles.container1}>
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: 'https://i.pinimg.com/564x/22/69/13/226913b15bd799765b7def4e567d9863.jpg' }} 
                  style={styles.image}
                />
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.3)', 'rgba(24, 30, 29, 0.452)']} // Gradient colors
                  style={styles.overlay}
                >
                  <Text style={styles.overlayText}>My Trips</Text>
                </LinearGradient>
              </View>
            </View>

            <View style={{ marginTop: 20, paddingBottom:70 }}>
              {userTrips.map((trip, index) => (
                <View key={index} style={styles.tripContainer}>
                  <Text style={[styles.tripText]}>Trip Details:</Text>
                  <Text style={[styles.tripText]}>Source: {trip.source}</Text>
                  <Text style={[styles.tripText]}>Destination: {trip.destination}</Text>
                  <Text style={[styles.tripText]}>Date: {trip.selectedDate} {trip.date}</Text>
                  <Text style={[styles.tripText]}>Distance: {trip.distance}</Text>
                  <Text style={[styles.tripText]}>Price: {trip.price}</Text>
                  {moment(trip.selectedDate, 'YYYY-MM-DD').startOf('day').isAfter(moment().startOf('day')) ? (
                    <TouchableOpacity onPress={() => deleteTrip(trip.id, trip.isDriver, trip.selectedDate)} style={styles.deleteButton}>
                      {deletingTripId === trip.id ? (
                        <ActivityIndicator color="white" />
                      ) : (
                        <Text style={styles.deleteButtonText}>Delete</Text>
                      )}
                    </TouchableOpacity>
                  ) : (
                    <View   style={styles.deleteButton}>
                      <Text style={styles.cannotDeleteText}>You can delete only upcoming trips</Text>

                      </View>
                  )}
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 370, // Adjust as needed
    height: 250, // Adjust as needed
    borderBottomRightRadius: 150,
    borderTopRightRadius: 150,
    right: 30,
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: 380, // Adjust as needed
    height: 250, 
    right:35,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 150,
    borderTopRightRadius: 150,
  },
  overlayText: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
  },
  container: {
    flex: 1,
    backgroundColor: '#b7e1cf',
  },
  scrollView: {
    flexGrow: 1,
    padding:10,

    // justifyContent: 'center',
    // alignItems: 'center',
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
    top: 0,
  },
  tripContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    padding: 10,
    borderWidth: 5,
    borderColor: '#706a6a00',
    backgroundColor: '#e7f3f1',
    borderRadius: 20,
    width: '100%',
  },
  tripText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginBottom: 2,
    color: '#000000',
  },
  deleteButton: {
    backgroundColor: '#026f3c',
    padding: 10,
    borderRadius: 35,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
  },
  cannotDeleteText: {
    // marginTop: ,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',

    fontFamily: 'Poppins-Bold',
  },
});

export default Trips;
