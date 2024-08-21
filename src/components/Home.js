// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator,StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, ScrollView, Alert,BackHandler } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import { useColorScheme } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Header from './Header';

// const { width, height } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [email, setEmail] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [driverData, setDriverData] = useState([]);
//   const [riderData, setRiderData] = useState([]);
//   const [myTrips, setMyTrips] = useState([]);
//   const [listViewDisplayed, setListViewDisplayed] = useState(true);
//   const colorScheme = useColorScheme();
//   const textColor = colorScheme === 'dark' ? '#000000' : '#000000';

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const driversSnapshot = await firestore().collection('Drivers').get();
//       const driversData = driversSnapshot.docs.map(doc => doc.data()); // Reverse the order
//       setDriverData(driversData);

//       const ridersSnapshot = await firestore().collection('Riders').get();
//       const ridersData = ridersSnapshot.docs.map(doc => doc.data()); // Reverse the order
//       setRiderData(ridersData);
//     };

//     if (!modalVisible) {
//       fetchData();
//     }
//   }, [modalVisible]);

//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       () => {
//         navigation.navigate('Home'); // Navigate to ButtonContainer screen when back button is pressed
//         return true; // Prevent default behavior (exit the app)
//       }
//     );

//     return () => backHandler.remove(); // Remove the event listener on component unmount
//   }, [navigation]);

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.source} - {item.destination}</Text>
//       <Text>Date: {item.selectedDate}</Text>
//       <Text>Email: {item.email}</Text>
//     </View>
//   );

//   const handleSearchPress = async () => {
//     try {
//       setLoading(true);
//       const userToken = await AsyncStorage.getItem('userToken');
//       if (userToken) {
//         const userEmail = await AsyncStorage.getItem('userEmail');
//         setEmail(userEmail);
//         setModalVisible(true);

//         setSelectedDate(null);
//         setSelectedOption('');
//         setSource('');
//         setDestination('');
//       } else {
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }finally {
//       setLoading(false); // Set loading state to false
//     }
//   };

//   const handleCloseModal = async () => {
//     try {

//       // Fetch coordinates for source and destination using Google Maps Geocoding API
//       const sourceResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
//       const sourceData = await sourceResponse.json();
//       if (sourceData.status !== 'OK') {
//         throw new Error(`Failed to geocode source address: ${sourceData.error_message}`);
//       }
//       const sourceCoords = sourceData.results[0]?.geometry?.location;

//       const destinationResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
//       const destinationData = await destinationResponse.json();
//       if (destinationData.status !== 'OK') {
//         throw new Error(`Failed to geocode destination address: ${destinationData.error_message}`);
//       }
//       const destinationCoords = destinationData.results[0]?.geometry?.location;

//       if (!sourceCoords || !destinationCoords) {
//         throw new Error('Failed to fetch coordinates for source or destination address.');
//       }

//       let calculatedDistance = calculateDistance(sourceCoords, destinationCoords);
//       calculatedDistance = Math.ceil(calculatedDistance);
//       // Determine the price based on the distance range
//       let price = 0;
//       if (calculatedDistance >= 50 && calculatedDistance <= 100) {
//         price = 34;
//       } else if (calculatedDistance > 101 && calculatedDistance <= 200) {
//         price = 40;
//       } else if (calculatedDistance > 201 && calculatedDistance <= 300) {
//         price = 45;
//       } else if (calculatedDistance > 301 && calculatedDistance <= 400) {
//         price = 57;
//       } else if (calculatedDistance > 401 && calculatedDistance <= 500) {
//         price = 70;
//       } else if (calculatedDistance > 501 && calculatedDistance <= 600) {
//         price = 80;
//       } else if (calculatedDistance > 601 && calculatedDistance <= 700) {
//         price = 91;
//       } else {
//         // For distances outside the defined ranges, calculate the price per kilometer
//         price = calculatedDistance * 0.75;
//       }

//       // Save trip details to Firestore with price
//       if (selectedOption === "driving") {
//         await firestore().collection('Drivers').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//           option: selectedOption,
//           distance: `${calculatedDistance} KM`,
//           price: `$ ${price}`,
//         });
//       } else if (selectedOption === "riding") {
//         await firestore().collection('Riders').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//           option: selectedOption,
//           distance: `${calculatedDistance} KM`,
//           price: `$ ${price}`,
//         });
//       } else {
//         throw new Error("Selected option is not valid.");
//       }

//       setModalVisible(false);

//       // Show alert
//       Alert.alert(
//         "Success",
//         "Your ride is successfully posted! Someone will connect with you soon. Explore other rides!",
//         [
//           {
//             text: "OK",
//             onPress: () => console.log("OK Pressed"),
//           },
//         ],
//         { cancelable: false }
//       );
//     } catch (error) {
//       console.error('Error saving trip to Firestore:', error);
//       Alert.alert('Error', 'Failed to save trip. Please try again.');
//     }
//   };

//   const calculateDistance = (sourceCoords, destinationCoords) => {
//     const toRadians = (degrees) => {
//       return degrees * Math.PI / 180;
//     };

//     const earthRadiusKm = 6371;
//     const dLat = toRadians(destinationCoords.lat - sourceCoords.lat);
//     const dLon = toRadians(destinationCoords.lng - sourceCoords.lng);
//     const lat1 = toRadians(sourceCoords.lat);
//     const lat2 = toRadians(destinationCoords.lat);

//     // Correct calculation of the central angle
//     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//               Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const distance = earthRadiusKm * c;

//     return distance.toFixed(2); // Distance in kilometers, rounded to 2 decimal places
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleMenuPress = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleFindTrip = () => {
//     setModalVisible(true);
//   };

//   const handlePostTrip = () => {
//     setModalVisible(true);
//   };

//   const handleProfile = async () => {
//     try {
//       const userToken = await AsyncStorage.getItem('userToken');
//       if (userToken) {
//         navigation.navigate('Profile');
//       } else {
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       navigation.navigate('Login');
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const handleMyTrips = async () => {
//     try {
//       const userToken = await AsyncStorage.getItem('userToken');
//       if (userToken) {
//         const userEmail = await AsyncStorage.getItem('userEmail');

//         const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
//         const driverTripsData = driverTripsSnapshot.docs.map(doc => doc.data());

//         const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
//         const riderTripsData = riderTripsSnapshot.docs.map(doc => doc.data());

//         const allTripsData = [...driverTripsData, ...riderTripsData];
//         setMyTrips(allTripsData);

//         navigation.navigate('Trips', { userTrips: allTripsData });
//       } else {
//         console.log('User token not found.');
//       }
//     } catch (error) {
//       console.error('Error fetching user trips:', error);
//     }
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <Header
//         isMenuOpen={isMenuOpen}
//         handleMenuPress={() => setIsMenuOpen(!isMenuOpen)}
//         handleFindTrip={() => setModalVisible(true)}
//         handlePostTrip={() => setModalVisible(true)}
//         handleMyTrips={() => navigation.navigate('Trips')}
//         handleProfile={() => navigation.navigate('Profile')}
//         handleContact={() => navigation.navigate('Contact')}
//         handlePayment={() => navigation.navigate('Payment')}
//         handleSafety={() => navigation.navigate('Safety')}
//         handlePrivacy={() => navigation.navigate('Privacy')}
//         handleTerms={() => navigation.navigate('Terms')}
//         handleHowto={() => navigation.navigate('Howto')}
//         handleLogout={() => {
//           AsyncStorage.removeItem('userToken');
//           navigation.navigate('Login');
//         }}
//       />
//         <View style={styles.searchBar}>

//           {loading ? (
//   <ActivityIndicator size="small" color="#000000" />
// ) : (
//   <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//     <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//   </TouchableOpacity>
// )}
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={[styles.modalContent, { width }]}>
//               <Text style={styles.title2}>Source:</Text>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter source"
//                 placeholderTextColor='black'

//                  onPress={(data, details = null) => {
//                   console.log("Source data:", data);
//                   if (data && data.description) {
//                     console.log("Source description:", data.description);
//                     setSource(data.description);
//                   }
//                 }}
//                 query={{
//                   key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: styles.input,
//                   container: { marginBottom: 70 },
//                   description: {
//                     fontFamily: 'Calibri',
//                     color: 'black',
//                     fontSize: 12,
//                   },
//                   listView: {
//                     position: 'absolute',
//                     marginTop: 44,
//                     backgroundColor: 'white',
//                     borderBottomEndRadius: 15,
//                     elevation: 3,
//                     zIndex: 5,
//                   },
//                 }}
//               />
//               <Text style={styles.title2}>Destination:</Text>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter Destination"
//                 placeholderTextColor="black"

//                 onPress={(data, details = null) => {
//                   console.log("Destination data:", data);
//                   if (data && data.description) {
//                     console.log("Destination description:", data.description);
//                     setDestination(data.description);
//                   }
//                 }}
//                 query={{
//                   key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: styles.input,
//                   container: { marginBottom: 70 },
//                   description: {
//                     fontFamily: 'Calibri',
//                     color: 'black',
//                     fontSize: 12,
//                   },
//                   listView: {
//                     position: 'absolute',
//                     marginTop: 44,
//                     backgroundColor: '#000000',
//                     borderBottomEndRadius: 15,
//                     elevation: 3,
//                     zIndex: 5,
//                   },
//                 }}
//               />
//               <View style={styles.calendarContainer}>
//                 <Calendar
//                   current={selectedDate ? selectedDate : new Date().toISOString().split('T')[0]}
//                   onDayPress={(day) => {
//                     setSelectedDate(day.dateString);
//                   }}
//                   markedDates={{
//                     [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
//                   }}
//                 />
//               </View>
//               <View style={styles.optionContainer}>
//                 <TouchableOpacity
//                   style={[styles.optionButton, selectedOption === "driving" && styles.selectedOption]}
//                   onPress={() => handleOptionSelect("driving")}
//                 >
//                   <Text style={styles.optionText}>I am driving</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.optionButton, selectedOption === "riding" && styles.selectedOption]}
//                   onPress={() => handleOptionSelect("riding")}
//                 >
//                   <Text style={styles.optionText}>I am riding</Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity style={styles.touchableButton} onPress={handleCloseModal}>
//                 <Text style={styles.buttonText}>Search</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.touchableButton} onPress={() => setModalVisible(false)}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//         <ScrollView style={styles.scrollView}>
//           {driverData.map((driver, index) => (
//             <View key={`driver-${index}`} style={styles.item}>
//               <Text style={styles.title2}>{driver.source} {'->'}  {driver.destination}</Text>
//               <Text style={styles.title2} >Date: {driver.selectedDate}</Text>
//               {/* <Text style={styles.title2} >Email: {driver.email}</Text> */}
//               <Text style={styles.title2} > Driving : {driver.option}</Text>
//               <Text style={styles.title2}> Distance : {driver.distance}</Text>
//               <Text style={styles.title2}> Price : {driver.price}</Text>
//             </View>
//           ))}
//           {riderData.map((rider, index) => (
//             <View key={`rider-${index}`} style={styles.item}>
//               <Text style={styles.title2}>{rider.source} {'->'}  {rider.destination}</Text>
//               <Text style={styles.title2}>Date: {rider.selectedDate}</Text>
//               {/* <Text style={styles.title2}>Email: {rider.email}</Text> */}
//               <Text style={styles.title2}> Need a Lift {rider.option}</Text>
//               <Text style={styles.title2}> Distance : {rider.distance}</Text>
//               <Text style={styles.title2}> Price : {rider.price}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   menuButtonContainer: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     zIndex: 1,
//   },
//   menuButton: {
//     padding: 10,
//   },
//   menuButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#e6f0eb',
//   },
//   menu: {
//     position: 'absolute',
//     top: 40,
//     height: '1800%',
//     width: 200,
//     right: -10,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 20,
//   },
//   menuItem: {
//     paddingVertical: 15,
//     alignSelf: 'center',
//     top: 30,
//   },
//   menuItemText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333',
//   },
//   searchBar: {
//     position: 'absolute',
//     top: 90,
//     width: '80%',
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'center', // Center the items horizontally
//     alignItems: 'center',
//     backgroundColor: '#e6f0eb',
//     borderRadius: 20,
//     paddingHorizontal: 10,
//   },
//   searchText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   searchButton: {
//     padding: 10,
//     borderRadius: 20,
//   },
//   scrollView: {
//     marginTop: 150,
//     width: '100%',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     marginTop:50,
//     width: '90%',
//     height:'100%',
//     backgroundColor: '#e6f0eb',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 50,
//     borderColor: '#cf0000',
//     color:'black',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendarContainer: {
//     marginTop: 70,
//     alignItems: 'center',
//     bottom:70,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionButton: {
//     bottom:70,
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#007AFF',
//   },
//   optionText: {
//     color: '#333',
//   },
//   touchableButton: {
//     bottom:70,
//     backgroundColor: '#4c6b8d',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#e6f0eb',
//     fontWeight: 'bold',
//   },
//   item: {
//     width: '90%',
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 10,
//     alignSelf: 'center',
//   },
//   title: {
//     fontSize: 14,
//     color:'black',
//   },

//   title2: {
//     fontSize: 14,
//     color:'#000000',

//   },
// });

// export default Home;

import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import TripModal from './TripModal';
import TripList from './TripList';
import {StatusBar} from 'react-native';
import Howto from './Howto';
import CardList from './Card';
import Postlookrides from './Postlookrides';
const {width, height} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [driverData, setDriverData] = useState([]);
  const [riderData, setRiderData] = useState([]);
  const [myTrips, setMyTrips] = useState([]);
  const [listViewDisplayed, setListViewDisplayed] = useState(true);
  const colorScheme = useColorScheme();
  const [userName, setUserName] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const driversSnapshot = await firestore().collection('Drivers').get();
      const driversData = driversSnapshot.docs.map(doc => doc.data()); // Reverse the order
      setDriverData(driversData);

      const ridersSnapshot = await firestore().collection('Riders').get();
      const ridersData = ridersSnapshot.docs.map(doc => doc.data()); // Reverse the order
      setRiderData(ridersData);
    };

    if (!modalVisible) {
      fetchData();
    }
  }, [modalVisible]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Home'); // Navigate to ButtonContainer screen when back button is pressed
        return true; // Prevent default behavior (exit the app)
      },
    );

    return () => backHandler.remove(); // Remove the event listener on component unmount
  }, [navigation]);

  useEffect(() => {
    const getUserName = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');

        const storedName = await AsyncStorage.getItem('userEmail'); // Fetch user name from AsyncStorage
        if (storedName) {
          setUserName(storedName);
        } else {
          console.log('No user name found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    getUserName();
  }, []);

  const handleSearchPress = async () => {
    try {
      setLoading(true);
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        const userEmail = await AsyncStorage.getItem('userEmail');
        setEmail(userEmail);
        setModalVisible(true);

        setSelectedDate(null);
        setSelectedOption('');
        setSource('');
        setDestination('');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking user login:', error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const handleCloseModal = async () => {
    try {
      // Fetch coordinates for source and destination using Google Maps Geocoding API
      const sourceResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`,
      );
      const sourceData = await sourceResponse.json();
      if (sourceData.status !== 'OK') {
        throw new Error(
          `Failed to geocode source address: ${sourceData.error_message}`,
        );
      }
      const sourceCoords = sourceData.results[0]?.geometry?.location;

      const destinationResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`,
      );
      const destinationData = await destinationResponse.json();
      if (destinationData.status !== 'OK') {
        throw new Error(
          `Failed to geocode destination address: ${destinationData.error_message}`,
        );
      }
      const destinationCoords = destinationData.results[0]?.geometry?.location;

      if (!sourceCoords || !destinationCoords) {
        throw new Error(
          'Failed to fetch coordinates for source or destination address.',
        );
      }

      // Fetch user details from the "users" collection
      const userDoc = await firestore()
        .collection('users')
        .where('email', '==', email)
        .get();
      let mobileNumber = '';
      let name = '';
      userDoc.forEach(doc => {
        name = doc.data().name;

        mobileNumber = doc.data().mobileNumber;
      });

      // Calculate distance
      let calculatedDistance = calculateDistance(
        sourceCoords,
        destinationCoords,
      );
      calculatedDistance = Math.ceil(calculatedDistance);

      let price = 0;
      if (calculatedDistance >= 50 && calculatedDistance <= 100) {
        price = 34;
      } else if (calculatedDistance > 101 && calculatedDistance <= 200) {
        price = 40;
      } else if (calculatedDistance > 201 && calculatedDistance <= 300) {
        price = 45;
      } else if (calculatedDistance > 301 && calculatedDistance <= 400) {
        price = 57;
      } else if (calculatedDistance > 401 && calculatedDistance <= 500) {
        price = 70;
      } else if (calculatedDistance > 501 && calculatedDistance <= 600) {
        price = 80;
      } else if (calculatedDistance > 601 && calculatedDistance <= 700) {
        price = 91;
      } else {
        // For distances outside the defined ranges, calculate the price per kilometer
        price = calculatedDistance * 0.75;
      }

      // Save trip details to Firestore with price and mobile number
      if (selectedOption === 'driving') {
        await firestore()
          .collection('Drivers')
          .add({
            email,
            mobileNumber,
            name,
            source,
            destination,
            selectedDate,
            option: selectedOption,
            distance: `${calculatedDistance} KM`,
            price: `$ ${price}`,
          });
      } else if (selectedOption === 'riding') {
        await firestore()
          .collection('Riders')
          .add({
            email,
            mobileNumber,
            name,
            source,
            destination,
            selectedDate,
            option: selectedOption,
            distance: `${calculatedDistance} KM`,
            price: `$ ${price}`,
          });
      } else {
        throw new Error('Selected option is not valid.');
      }

      setModalVisible(false);

      // Show alert
      Alert.alert(
        'Success',
        'Your ride is successfully posted! Someone will connect with you soon. Explore other rides!',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.error('Error saving trip to Firestore:', error);
      Alert.alert('Error', 'Failed to save trip. Please try again.');
    }
  };

  const calculateDistance = (sourceCoords, destinationCoords) => {
    const toRadians = degrees => {
      return (degrees * Math.PI) / 180;
    };

    const earthRadiusKm = 6371;
    const dLat = toRadians(destinationCoords.lat - sourceCoords.lat);
    const dLon = toRadians(destinationCoords.lng - sourceCoords.lng);
    const lat1 = toRadians(sourceCoords.lat);
    const lat2 = toRadians(destinationCoords.lat);

    // Correct calculation of the central angle
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadiusKm * c;

    return distance.toFixed(2); // Distance in kilometers, rounded to 2 decimal places
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content" // Text aur icons ko white karega
        backgroundColor="#14ac68" // Status bar ka background black karega
      />
      {/* <ScrollView> */}
        {/* <Image
        source={{ uri: 'https://i.pinimg.com/736x/5f/47/f6/5f47f6e5b748b2afd36a9345b697b7dd.jpg' }}
        style={styles.Image4}
      /> */}
        <View style={styles.container2}>
          <View
            style={{
              marginTop: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <View style={styles.logo}>
              <Image
                source={require('../components/assets/wrr.png')}
                style={styles.logoImage} // Apply the style here
              />
            </View>
            <Header
              isMenuOpen={isMenuOpen}
              handleMenuPress={() => setIsMenuOpen(!isMenuOpen)}
              handleFindTrip={() => setModalVisible(true)}
              handlePostTrip={() => setModalVisible(true)}
              handleMyTrips={() => navigation.navigate('Trips')}
              handleProfile={() => navigation.navigate('Profile')}
              handleContact={() => navigation.navigate('Contact')}
              handlePayment={() => navigation.navigate('Payment')}
              handleSafety={() => navigation.navigate('Safety')}
              handlePrivacy={() => navigation.navigate('Privacy')}
              handleTerms={() => navigation.navigate('Terms')}
              handleHowto={() => navigation.navigate('Howto')}
              handleLogout={() => {
                AsyncStorage.removeItem('userToken');
                navigation.navigate('Login');
              }}
            />
          </View>
          <View>
            <Text style={styles.user}>Welcome </Text>
            <Text style={styles.user1}>{userName} !</Text>
          </View>
          {/* <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../components/assets/ne.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View> */}
        </View>

        <Text style={styles.heading}>Find Your Personalized Destination </Text>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearchPress}>
          <View style={styles.searchBar}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.searchText}>Search your ride</Text>
            )}
          </View>
        </TouchableOpacity>
        {/* <CardList /> */}
        <View
          style={[
            styles.container,
            {width, height, backgroundColor: '#00000000'},
          ]}>
          <View>
            <View>
              {/* <Text style={styles.small}>Find Your Personalized Destination </Text> */}
              {/* <TouchableOpacity onPress={() => navigation.navigate('allrides')}>
              <Image
                source={require('../components/assets/resize.png')}
                style={styles.full}
              />
            </TouchableOpacity> */}
            </View>
          </View>
          {/* <ImageBackground source={require('../../src/components/assets/bg3.jpeg')} style={styles.backgroundImage}>  */}
          {/* <View style={styles.lack}> */}
          {/* <Header
        isMenuOpen={isMenuOpen}
        handleMenuPress={() => setIsMenuOpen(!isMenuOpen)}
        handleFindTrip={() => setModalVisible(true)}
        handlePostTrip={() => setModalVisible(true)}
        handleMyTrips={() => navigation.navigate('Trips')}
        handleProfile={() => navigation.navigate('Profile')}
        handleContact={() => navigation.navigate('Contact')}
        handlePayment={() => navigation.navigate('Payment')}
        handleSafety={() => navigation.navigate('Safety')}
        handlePrivacy={() => navigation.navigate('Privacy')}
        handleTerms={() => navigation.navigate('Terms')}
        handleHowto={() => navigation.navigate('Howto')}
        handleLogout={() => {
          AsyncStorage.removeItem('userToken');
          navigation.navigate('Login');
        }}
      />
       <View>
        <Text style={styles.user}>
Welcome
        </Text>
      </View> */}

          {/* <View style={styles.searchBar}>

          {loading ? (
  <ActivityIndicator size="small" color="#000000" />
) : (
  <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
    <Text style={styles.searchText}>Search your ride</Text>
  </TouchableOpacity>
)}
        </View>    */}

          {/* 

main part of code


*/}
          <TripModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
            setSelectedOption={setSelectedOption}
            source={source}
            setSource={setSource}
            destination={destination}
            setDestination={setDestination}
            handleCloseModal={handleCloseModal}
          />

           <ScrollView style={styles.scrollView}>
          <TripList data={driverData} />
          <TripList data={riderData} />
        </ScrollView>  

          {/* </View> */}
          {/* </ImageBackground> */}
        </View>
        {/* <Postlookrides/> */}
      {/* <Howto/> */}
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  small: {},
  logo: {
    // backgroundColor:'yellow',
    position: 'absolute',
    // marginTop:10,
    // top: 3, // Adjust as needed
    left: 10, // Adjust as needed
    zIndex: 1, // Ensures the logo is above other elements
  },
  logoImage: {
    marginTop: 100,
    width: 140, // Adjust the size as needed
    height: 140, // Adjust the size as needed
  },
  imageContainer: {
    // backgroundColor:'blue',
    width: '100%',
    height: '10%',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 40,
    // marginBottom:180,
    tintColor: 'white',
  },
  full: {
    width: 20,
    height: 20,
    // position: 'absolute',
    // bottom: 0,
    bottom: 10,
    // top:0,
    left: 160,
    tintColor: '#070707',
  },
  container2: {
    width: '100%',
    height: 230, // Adjusted height
    backgroundColor: '#2db977',
    // borderBottomLeftRadius: 20,
    borderBottomRightRadius: 120,
    // Shadow properties for iOS
    shadowColor: '#000000', // Shadow color
    shadowOffset: {width: 0, height: 4}, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 2, // Shadow blur radius
    // Shadow properties for Android
    elevation: 50, // Elevation for Android shadow
  },
  imageReplacement: {},
  user: {
    color: '#040404',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 30,
    marginTop: 100,
    fontSize: 28,
  },
  heading: {
    color: '#040404',

    textAlign: 'left',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 30,
    marginTop: 20,
    fontSize: 24,
  },
  user1: {
    color: '#393a3a',
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: 30,
    // marginTop:40,
    fontSize: 18,
  },
  container: {
    flex: 1,

    backgroundColor: '#e6f0eb',

    justifyContent: 'center',
    alignItems: 'center',
  },
  lack: {
    backgroundColor: '#e6f0eb',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e6f0eb',
  },
  menu: {
    position: 'absolute',
    top: 40,
    height: '1800%',
    width: 200,
    right: -10,
    backgroundColor: '#e6f0eb',
    borderRadius: 10,
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    alignSelf: 'center',
    top: 30,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  searchBar: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 20,
    left: 20, // Align to the right side
    width: '90%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'center',
    backgroundColor: '#0c0c0c64',
    borderRadius: 30,
    borderColor: '#8b8888', // Optional border color
    borderWidth: 1, // Optional border width
    // paddingHorizontal: 10,
    // Optional padding to adjust the placement
    paddingRight: 20, // Adjust if necessary
  },

  searchText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    // textAlign:'center',
    // fontWeight: 'bold',
    color: '#fafafa',
  },
  searchButton: {
    padding: 10,
    borderRadius: 170,
  },
  scrollView: {
    // backgroundColor:'yellow',
    top: 0,
    width: '100%',
  },
  Image4: {
    width: '100%', // Set appropriate width
    height: '30%', // Set appropriate height
    borderRadius: 10, // Optional: Add border radius if needed
  },
  item: {
    width: '90%',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },

  title2: {
    fontSize: 14,
    color: '#000000',
  },
});

export default Home;
