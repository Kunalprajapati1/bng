
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, TouchableOpacity, searchText,ImageBackground,FlatList, Text, Modal, TextInput, Dimensions, ScrollView, Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import { useColorScheme } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
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
//   const textColor = colorScheme === 'dark' ? 'white' : 'black';
//   useEffect(() => {
//     const fetchData = async () => {
//       const driversSnapshot = await firestore().collection('Drivers').get();
//       const driversData = driversSnapshot.docs.map(doc => doc.data());
//       setDriverData(driversData);

//       const ridersSnapshot = await firestore().collection('Riders').get();
//       const ridersData = ridersSnapshot.docs.map(doc => doc.data());
//       setRiderData(ridersData);
//     };

//     if (!modalVisible) {
//       fetchData();
//     }
//   }, [modalVisible]);

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.source} - {item.destination}</Text>
//       <Text>Date: {item.selectedDate}</Text>
//       <Text>Email: {item.email}</Text>
//     </View>
//   );

//   const handleSearchPress = async () => {
//     try {
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
  
//       // Calculate distance between source and destination coordinates
//       let calculatedDistance = calculateDistance(sourceCoords, destinationCoords);


//       // calculatedDistance = Math.round(calculatedDistance);
//       // calculatedDistance = Math.ceil(calculatedDistance);
  
//       // Calculate price based on distance ($10 per km)
//       const price = (calculatedDistance * 10).toFixed(2); // Price in dollars, rounded to 2 decimal places
  
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
  
//   const handleContact = () => {
//     navigation.navigate('Contact');
//   };
//   const handlePrivacy = () => {
//     // navigation.navigate('Privacy');
//   };
//   const handleTerms = () => {
//     navigation.navigate('Terms');
//   };

//   const handleSafety = () => {
//     navigation.navigate('Safety');
//   };
//   const handleHowto = () => {
//     navigation.navigate('Howtoo');
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <View style={styles.menuButtonContainer}>
//           <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//             <Text style={styles.menuButtonText}>Menu</Text>
//           </TouchableOpacity>
//           {isMenuOpen && (
//               <View style={styles.menu}>
//                          <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//               <Text style={styles.menuItemText}>Find Trip</Text>
//                           </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                               <Text style={styles.menuItemText}>Post Trip</Text>
//                             </TouchableOpacity>
//                            <TouchableOpacity style={styles.menuItem} onPress={handleMyTrips}>
//                               <Text style={styles.menuItemText}>My Trips</Text>
//                              </TouchableOpacity>
//                            <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                               <Text style={styles.menuItemText}>Profile</Text>
//                          </TouchableOpacity>
//                           <TouchableOpacity style={styles.menuItem} onPress={handleContact}>
//                               <Text style={styles.menuItemText}>Contact Us</Text>
//                            </TouchableOpacity>
                        
//                           <TouchableOpacity style={styles.menuItem} onPress={handleSafety}>
//                             <Text style={styles.menuItemText}>Safety</Text>
//                           </TouchableOpacity>
//                           <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
//                               <Text style={styles.menuItemText}>Privacy Policy</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={handleTerms}>
//                               <Text style={styles.menuItemText}>Terms Of Use</Text>
//                        </TouchableOpacity>
//                            <TouchableOpacity style={styles.menuItem} onPress={handleHowto}>
//                               <Text style={styles.menuItemText}>How to ?</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
//                               <Text style={styles.menuItemText}>Logout</Text>
//                            </TouchableOpacity>
//                           </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//   animationType="slide"
//   transparent={true}
//   visible={modalVisible}
//   onRequestClose={() => setModalVisible(false)}
// >  



//   <View style={styles.modalContainer}>
    
   

// <View style={{ flex: 1 }}>
//   <View style={[styles.modalContent, { width }]}>
//     <Text>Source:</Text>
//     <GooglePlacesAutocomplete
//       placeholder="Enter source"
//       onPress={(data, details = null) => {
//         console.log("Source data:", data);
//         if (data && data.description) {
//           console.log("Source description:", data.description);
//           setSource(data.description);
//         }
//       }}
//       query={{
//         key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//         language: 'en',
//       }}
//       fetchDetails={true}
//       styles={{
//         textInput: styles.input,
//         container: { marginBottom: 70 },
//         description: {
//           fontFamily: 'Calibri',
//           color: 'black',
//           fontSize: 12,
//         },
//         listView: {
//           position: 'absolute',
//           marginTop: 44,
//           backgroundColor: 'white',
//           borderBottomEndRadius: 15,
//           elevation: 3,
//           zIndex: 5,
//         },
//       }}
//     />
//     <Text>Destination:</Text>
//     <GooglePlacesAutocomplete
//       placeholder="Enter Destination"
//       onPress={(data, details = null) => {
//         console.log("Destination data:", data);
//         if (data && data.description) {
//           console.log("Destination description:", data.description);
//           setDestination(data.description);
//         }
//       }}
//       query={{
//         key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//         language: 'en',
//       }}
//       fetchDetails={true}
//       styles={{
//         textInput: styles.input,
//         container: { marginBottom: 70 },
//         description: {
//           fontFamily: 'Calibri',
//           color: 'black',
//           fontSize: 12,
//         },
//         listView: {
//           position: 'absolute',
//           marginTop: 44,
//           backgroundColor: 'white',
//           borderBottomEndRadius: 15,
//           elevation: 3,
//           zIndex: 5,
//         },
//       }}
//     />
    

//             <View style={styles.calendarContainer}>
//               <Calendar
//                 current={selectedDate ? selectedDate : new Date().toISOString().split('T')[0]}
//                 onDayPress={(day) => {
//                   setSelectedDate(day.dateString);
//                 }}
//                 markedDates={{
//                   [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
//                 }}
//               />
//             </View>

//             {/* <Text>Choose Your Option:</Text> */}
//             <View style={styles.optionContainer}>
//               <TouchableOpacity
//                 style={[styles.optionButton, selectedOption === "driving" && styles.selectedOption]}
//                 onPress={() => handleOptionSelect("driving")}
//               >
//                 <Text style={styles.optionText}>I am driving</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.optionButton, selectedOption === "riding" && styles.selectedOption]}
//                 onPress={() => handleOptionSelect("riding")}
//               >
//                 <Text style={styles.optionText}>I am riding</Text>
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity style={styles.touchableButton} onPress={handleCloseModal}>
//               <Text style={styles.buttonText}>Search</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.touchableButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//             </View>
//         </View>
      
//   </View>
// {/* </ScrollView> */}

// </Modal>




//         <ScrollView style={styles.scrollView}>
//           {driverData.map((driver, index) => (
//             <View key={`driver-${index}`} style={styles.item}>
//               <Text style={styles.title}>{driver.source} {'->'}  {driver.destination}</Text>
//               <Text>Date: {driver.selectedDate}</Text>
//               <Text>Email: {driver.email}</Text>
//               <Text> {driver.option}</Text>
//               <Text> Distance : {driver.distance}</Text>
//               <Text> Price : {driver.price}</Text>


//             </View>
//           ))}

//           {riderData.map((rider, index) => (
//             <View key={`rider-${index}`} style={styles.item}>
//               <Text style={styles.title}>{rider.source} {'->'}  {rider.destination}</Text>
//               <Text>Date: {rider.selectedDate}</Text>
//               <Text>Email: {rider.email}</Text>
//               <Text> {rider.option}</Text>
//               <Text> Distance : {rider.distance}</Text>
//               <Text> Price : {rider.price}</Text>
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
//     color: '#ffffff',
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
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
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
//   scrollView2: {
//     marginTop: 20,
//     marginBottom: 50,
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
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 50,
//     borderColor: 'gray',
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
//     color: '#FFFFFF',
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
//   },
// });

// export default Home;





// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator,StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import { useColorScheme } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
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
//   // const textColor = colorScheme === 'dark' ? 'white' : 'black'; // Text color based on color scheme
//   // const textColor = colorScheme === 'dark' ? '#000000' : '#ffffff';
//   const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const driversSnapshot = await firestore().collection('Drivers').get();
//       const driversData = driversSnapshot.docs.map(doc => doc.data());
//       setDriverData(driversData);

//       const ridersSnapshot = await firestore().collection('Riders').get();
//       const ridersData = ridersSnapshot.docs.map(doc => doc.data());
//       setRiderData(ridersData);
//     };

//     if (!modalVisible) {
//       fetchData();
//     }
//   }, [modalVisible]);

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




//   // const handleSearchPress = async () => {
//   //   navigation.navigate('Anywhere');
//   // };








//   // const handleCloseModal = async () => {
//   //   try {
//   //     // Fetch coordinates for source and destination using Google Maps Geocoding API
//   //     const sourceResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
//   //     const sourceData = await sourceResponse.json();
//   //     if (sourceData.status !== 'OK') {
//   //       throw new Error(`Failed to geocode source address: ${sourceData.error_message}`);
//   //     }
//   //     const sourceCoords = sourceData.results[0]?.geometry?.location;
  
//   //     const destinationResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
//   //     const destinationData = await destinationResponse.json();
//   //     if (destinationData.status !== 'OK') {
//   //       throw new Error(`Failed to geocode destination address: ${destinationData.error_message}`);
//   //     }
//   //     const destinationCoords = destinationData.results[0]?.geometry?.location;
  
//   //     if (!sourceCoords || !destinationCoords) {
//   //       throw new Error('Failed to fetch coordinates for source or destination address.');
//   //     }
  
//   //     // Calculate distance between source and destination coordinates
//   //     let calculatedDistance = calculateDistance(sourceCoords, destinationCoords);
  
//   //     // Calculate price based on distance ($10 per km)
//   //     const price = (calculatedDistance * 10).toFixed(2); // Price in dollars, rounded to 2 decimal places
  
//   //     // Save trip details to Firestore with price
//   //     if (selectedOption === "driving") {
//   //       await firestore().collection('Drivers').add({
//   //         email,
//   //         source,
//   //         destination,
//   //         selectedDate,
//   //         option: selectedOption,
//   //         distance: `${calculatedDistance} KM`,
//   //         price: `$ ${price}`,
//   //       });
//   //     } else if (selectedOption === "riding") {
//   //       await firestore().collection('Riders').add({
//   //         email,
//   //         source,
//   //         destination,
//   //         selectedDate,
//   //         option: selectedOption,
//   //         distance: `${calculatedDistance} KM`,
//   //         price: `$ ${price}`,
//   //       });
//   //     } else {
//   //       throw new Error("Selected option is not valid.");
//   //     }
  
//   //     setModalVisible(false);
//   //   } catch (error) {
//   //     console.error('Error saving trip to Firestore:', error);
//   //     Alert.alert('Error', 'Failed to save trip. Please try again.');
//   //   }
//   // };
  


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
  
//       // Calculate distance between source and destination coordinates
//       let calculatedDistance = calculateDistance(sourceCoords, destinationCoords);
  
//       // calculatedDistance = Math.round(calculatedDistance);
//       // calculatedDistance = Math.ceil(calculatedDistance);
  
//       // Calculate price based on distance ($10 per km)
//       const price = (calculatedDistance * 10).toFixed(2); // Price in dollars, rounded to 2 decimal places
  
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
  
//   const handleContact = () => {
//     navigation.navigate('Contact');
//   };
//   const handlePayment = () => {
//     navigation.navigate('Payment');
//   };
//   const handlePrivacy = () => {
//     // navigation.navigate('Privacy');
//   };
//   const handleTerms = () => {
//     navigation.navigate('Terms');
//   };

//   const handleSafety = () => {
//     navigation.navigate('Safety');
//   };
//   const handleHowto = () => {
//     navigation.navigate('Howtoo');
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <View style={styles.menuButtonContainer}>
//           <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//             <Text style={[styles.menuButtonText]}>Menu</Text>
//           </TouchableOpacity>
//           {isMenuOpen && (
//             <View style={styles.menu}>
//               <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//                 <Text style={[styles.menuItemText, ]}>Find Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                 <Text style={[styles.menuItemText, ]}>Post Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleMyTrips}>
//                 <Text style={[styles.menuItemText, ]}>My Trips</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                 <Text style={[styles.menuItemText, ]}>Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleContact}>
//                 <Text style={[styles.menuItemText, ]}>Contact Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePayment}>
//                 <Text style={[styles.menuItemText, ]}>Payment</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleSafety}>
//                 <Text style={[styles.menuItemText, ]}>Safety</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
//                 <Text style={[styles.menuItemText, ]}>Privacy Policy</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleTerms}>
//                 <Text style={[styles.menuItemText, ]}>Terms Of Use</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleHowto}>
//                 <Text style={[styles.menuItemText, ]}>How to ?</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
//                 <Text style={[styles.menuItemText, ]}>Logout</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           {/* <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={[styles.searchText, { color: textColor }]}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity> */}
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
//                 placeholderTextColor="black"
                
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
//               <Text style={styles.title2} >Email: {driver.email}</Text>
//               <Text style={styles.title2} > {driver.option}</Text>
//               <Text style={styles.title2}> Distance : {driver.distance}</Text>
//               <Text style={styles.title2}> Price : {driver.price}</Text>
//             </View>
//           ))}
//           {riderData.map((rider, index) => (
//             <View key={`rider-${index}`} style={styles.item}>
//               <Text style={styles.title2}>{rider.source} {'->'}  {rider.destination}</Text>
//               <Text style={styles.title2}>Date: {rider.selectedDate}</Text>
//               <Text style={styles.title2}>Email: {rider.email}</Text>
//               <Text style={styles.title2}> {rider.option}</Text>
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
//     color: '#ffffff',
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
//     backgroundColor: '#FFFFFF',
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
//     backgroundColor: '#FFFFFF',
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
//     color: '#FFFFFF',
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





import React, { useState, useEffect } from 'react';
import { ActivityIndicator,StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const { width, height } = Dimensions.get('window');

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
  const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.source} - {item.destination}</Text>
      <Text>Date: {item.selectedDate}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

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
    }finally {
      setLoading(false); // Set loading state to false
    }
  };


  const handleCloseModal = async () => {
    try {
      
      // Fetch coordinates for source and destination using Google Maps Geocoding API
      const sourceResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
      const sourceData = await sourceResponse.json();
      if (sourceData.status !== 'OK') {
        throw new Error(`Failed to geocode source address: ${sourceData.error_message}`);
      }
      const sourceCoords = sourceData.results[0]?.geometry?.location;
  
      const destinationResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
      const destinationData = await destinationResponse.json();
      if (destinationData.status !== 'OK') {
        throw new Error(`Failed to geocode destination address: ${destinationData.error_message}`);
      }
      const destinationCoords = destinationData.results[0]?.geometry?.location;
  
      if (!sourceCoords || !destinationCoords) {
        throw new Error('Failed to fetch coordinates for source or destination address.');
      }
  
      let calculatedDistance = calculateDistance(sourceCoords, destinationCoords);
      calculatedDistance = Math.ceil(calculatedDistance);
      // Determine the price based on the distance range
      let price = 0;
      if (calculatedDistance >= 45 && calculatedDistance <= 100) {
        price = 34;
      } else if (calculatedDistance > 100 && calculatedDistance <= 200) {
        price = 40;
      } else if (calculatedDistance > 200 && calculatedDistance <= 300) {
        price = 45;
      } else if (calculatedDistance > 300 && calculatedDistance <= 400) {
        price = 57;
      } else if (calculatedDistance > 400 && calculatedDistance <= 500) {
        price = 70;
      } else if (calculatedDistance > 500 && calculatedDistance <= 600) {
        price = 80;
      } else if (calculatedDistance > 600 && calculatedDistance <= 700) {
        price = 91;
      } else {
        // For distances outside the defined ranges, calculate the price per kilometer
        price = calculatedDistance * 0.75;
      }
  
      // Save trip details to Firestore with price
      if (selectedOption === "driving") {
        await firestore().collection('Drivers').add({
          email,
          source,
          destination,
          selectedDate,
          option: selectedOption,
          distance: `${calculatedDistance} KM`,
          price: `$ ${price}`,
        });
      } else if (selectedOption === "riding") {
        await firestore().collection('Riders').add({
          email,
          source,
          destination,
          selectedDate,
          option: selectedOption,
          distance: `${calculatedDistance} KM`,
          price: `$ ${price}`,
        });
      } else {
        throw new Error("Selected option is not valid.");
      }
  
      setModalVisible(false);
  
      // Show alert
      Alert.alert(
        "Success",
        "Your ride is successfully posted! Someone will connect with you soon. Explore other rides!",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error saving trip to Firestore:', error);
      Alert.alert('Error', 'Failed to save trip. Please try again.');
    }
  };

  const calculateDistance = (sourceCoords, destinationCoords) => {
    const toRadians = (degrees) => {
      return degrees * Math.PI / 180;
    };
  
    const earthRadiusKm = 6371;
    const dLat = toRadians(destinationCoords.lat - sourceCoords.lat);
    const dLon = toRadians(destinationCoords.lng - sourceCoords.lng);
    const lat1 = toRadians(sourceCoords.lat);
    const lat2 = toRadians(destinationCoords.lat);
  
    // Correct calculation of the central angle
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = earthRadiusKm * c;
  
    return distance.toFixed(2); // Distance in kilometers, rounded to 2 decimal places
  };
  

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFindTrip = () => {
    setModalVisible(true);
  };

  const handlePostTrip = () => {
    setModalVisible(true);
  };

  const handleProfile = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.navigate('Profile');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking user login:', error);
    }
  };
  
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  const handleMyTrips = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        const userEmail = await AsyncStorage.getItem('userEmail');

        const driverTripsSnapshot = await firestore().collection('Drivers').where('email', '==', userEmail).get();
        const driverTripsData = driverTripsSnapshot.docs.map(doc => doc.data());

        const riderTripsSnapshot = await firestore().collection('Riders').where('email', '==', userEmail).get();
        const riderTripsData = riderTripsSnapshot.docs.map(doc => doc.data());

        const allTripsData = [...driverTripsData, ...riderTripsData];
        setMyTrips(allTripsData);

        navigation.navigate('Trips', { userTrips: allTripsData });
      } else {
        console.log('User token not found.');
      }
    } catch (error) {
      console.error('Error fetching user trips:', error);
    }
  };
  
  const handleContact = () => {
    navigation.navigate('Contact');
  };
  const handlePayment = () => {
    navigation.navigate('Payment');
  };
  const handlePrivacy = () => {
    // navigation.navigate('Privacy');
  };
  const handleTerms = () => {
    navigation.navigate('Terms');
  };

  const handleSafety = () => {
    navigation.navigate('Safety');
  };
  const handleHowto = () => {
    navigation.navigate('Howtoo');
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
        <View style={styles.menuButtonContainer}>
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <Text style={[styles.menuButtonText]}>Menu</Text>
          </TouchableOpacity>
          {isMenuOpen && (
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
                <Text style={[styles.menuItemText, ]}>Find Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
                <Text style={[styles.menuItemText, ]}>Post Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleMyTrips}>
                <Text style={[styles.menuItemText, ]}>My Trips</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
                <Text style={[styles.menuItemText, ]}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleContact}>
                <Text style={[styles.menuItemText, ]}>Contact Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handlePayment}>
                <Text style={[styles.menuItemText, ]}>Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleSafety}>
                <Text style={[styles.menuItemText, ]}>Safety</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
                <Text style={[styles.menuItemText, ]}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleTerms}>
                <Text style={[styles.menuItemText, ]}>Terms Of Use</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleHowto}>
                <Text style={[styles.menuItemText, ]}>How to ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <Text style={[styles.menuItemText, ]}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.searchBar}>
          {/* <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
            <Text style={[styles.searchText, { color: textColor }]}>Anywhere {'>'} Anywhere</Text>
          </TouchableOpacity> */}
          {loading ? (
  <ActivityIndicator size="small" color="#000000" />
) : (
  <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
    <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
  </TouchableOpacity>
)}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { width }]}>
              <Text style={styles.title2}>Source:</Text>
              <GooglePlacesAutocomplete
                placeholder="Enter source"
                placeholderTextColor="black"
                
                 onPress={(data, details = null) => {
                  console.log("Source data:", data);
                  if (data && data.description) {
                    console.log("Source description:", data.description);
                    setSource(data.description);
                  }
                }}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.input,
                  container: { marginBottom: 70 },
                  description: {
                    fontFamily: 'Calibri',
                    color: 'black',
                    fontSize: 12,
                  },
                  listView: {
                    position: 'absolute',
                    marginTop: 44,
                    backgroundColor: 'white',
                    borderBottomEndRadius: 15,
                    elevation: 3,
                    zIndex: 5,
                  },
                }}
              />
              <Text style={styles.title2}>Destination:</Text>
              <GooglePlacesAutocomplete
                placeholder="Enter Destination"
                placeholderTextColor="black"
                

                onPress={(data, details = null) => {
                  console.log("Destination data:", data);
                  if (data && data.description) {
                    console.log("Destination description:", data.description);
                    setDestination(data.description);
                  }
                }}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.input,
                  container: { marginBottom: 70 },
                  description: {
                    fontFamily: 'Calibri',
                    color: 'black',
                    fontSize: 12,
                  },
                  listView: {
                    position: 'absolute',
                    marginTop: 44,
                    backgroundColor: '#000000',
                    borderBottomEndRadius: 15,
                    elevation: 3,
                    zIndex: 5,
                  },
                }}
              />
              <View style={styles.calendarContainer}>
                <Calendar
                  current={selectedDate ? selectedDate : new Date().toISOString().split('T')[0]}
                  onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                  }}
                  markedDates={{
                    [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
                  }}
                />
              </View>
              <View style={styles.optionContainer}>
                <TouchableOpacity
                  style={[styles.optionButton, selectedOption === "driving" && styles.selectedOption]}
                  onPress={() => handleOptionSelect("driving")}
                >
                  <Text style={styles.optionText}>I am driving</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.optionButton, selectedOption === "riding" && styles.selectedOption]}
                  onPress={() => handleOptionSelect("riding")}
                >
                  <Text style={styles.optionText}>I am riding</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.touchableButton} onPress={handleCloseModal}>
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.scrollView}>
          {driverData.map((driver, index) => (
            <View key={`driver-${index}`} style={styles.item}>
              <Text style={styles.title2}>{driver.source} {'->'}  {driver.destination}</Text>
              <Text style={styles.title2} >Date: {driver.selectedDate}</Text>
              <Text style={styles.title2} >Email: {driver.email}</Text>
              <Text style={styles.title2} > {driver.option}</Text>
              <Text style={styles.title2}> Distance : {driver.distance}</Text>
              <Text style={styles.title2}> Price : {driver.price}</Text>
            </View>
          ))}
          {riderData.map((rider, index) => (
            <View key={`rider-${index}`} style={styles.item}>
              <Text style={styles.title2}>{rider.source} {'->'}  {rider.destination}</Text>
              <Text style={styles.title2}>Date: {rider.selectedDate}</Text>
              <Text style={styles.title2}>Email: {rider.email}</Text>
              <Text style={styles.title2}> {rider.option}</Text>
              <Text style={styles.title2}> Distance : {rider.distance}</Text>
              <Text style={styles.title2}> Price : {rider.price}</Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: '#ffffff',
  },
  menu: {
    position: 'absolute',
    top: 40,
    height: '1800%',
    width: 200,
    right: -10,
    backgroundColor: '#FFF',
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
    position: 'absolute',
    top: 90,
    width: '80%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchButton: {
    padding: 10,
    borderRadius: 20,
  },
  scrollView: {
    marginTop: 150,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop:50,
    width: '90%',
    height:'100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#cf0000',
    color:'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  calendarContainer: {
    marginTop: 70,
    alignItems: 'center',
    bottom:70,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  optionButton: {
    bottom:70,
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    color: '#333',
  },
  touchableButton: {
    bottom:70,
    backgroundColor: '#4c6b8d',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  item: {
    width: '90%',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    color:'black',
  }, 
  
  title2: {
    fontSize: 14,
    color:'#000000',

  },
});

export default Home;




