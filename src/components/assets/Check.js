


// import React, { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Step 1

// const { width, height } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [month, setMonth] = useState(new Date().getMonth() + 1);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSearchPress = async () => {
//     try {
//       const userToken = await AsyncStorage.getItem('userToken'); // Step 3: Check if user is logged in
//       if (userToken) {
//         setModalVisible(true);
//       } else {
//         navigation.navigate('Login'); // Navigate to login if user is not logged in
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };

//   const handleDateConfirm = (date) => {
//     setSelectedDate(date);
//     setDatePickerVisibility(false);
//   };

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
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

//   const handleProfile = () => {
//     navigation.navigate('Sign');
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <View style={styles.menuButtonContainer}>
//           <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//             <Text style={styles.menuButtonText}>Menu</Text>
//           </TouchableOpacity>
//           {isMenuOpen && (
//             <View style={styles.menu}>
//               <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//                 <Text style={styles.menuItemText}>Find Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                 <Text style={styles.menuItemText}>Post Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("My Trips")}>
//                 <Text style={styles.menuItemText}>My Trips</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                 <Text style={styles.menuItemText}>Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Contact Us")}>
//                 <Text style={styles.menuItemText}>Contact Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout")}>
//                 <Text style={styles.menuItemText}>Logout</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
//                 <Text style={styles.menuItemText}>Safety</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
//                 <Text style={styles.menuItemText}>Privacy Policy</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={handleCloseModal}
//         >
//           <View style={[styles.modalContainer, { width }]}>
//             <View style={styles.modalContent}>
//               <Text>Source:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter source"
//                 onChangeText={text => setSource(text)}
//                 value={source}
//               />
//               <Text>Destination:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter destination"
//                 onChangeText={text => setDestination(text)}
//                 value={destination}
//               />
//               <View style={styles.calendarContainer}>
//                 <Calendar
//                   current={`${year}-${month.toString().padStart(2, '0')}-01`}
//                   onDayPress={(day) => {
//                     setSelectedDate(day.dateString);
//                     setDatePickerVisibility(false);
//                   }}
//                   markedDates={{
//                     [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
//                   }}
//                 />
//               </View>
//               <Text>Choose Your Option:</Text>
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
//               <TouchableOpacity style={styles.touchableButton} onPress={handleCloseModal}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
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
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   datePickerButton: {
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionButton: {
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
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendarContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   monthYearText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   touchableButton: {
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
// });

// export default Home;


// import React, { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width, height } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSearchPress = async () => {
//     try {
//       // Check if user is logged in
//       const userToken = await AsyncStorage.getItem('userToken');
//       if (userToken) {
//         setModalVisible(true);
//       } else {
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }
//   };

//   const handleCloseModal = async () => {
//     try {
//       // Conditionally save data to Firestore based on selected option
//       if (selectedOption === "driving") {
//         await firestore().collection('Drivers').add({
//           source,
//           destination,
//           selectedDate,
//         });
//       } else if (selectedOption === "riding") {
//         await firestore().collection('Riders').add({
//           source,
//           destination,
//           selectedDate,
//         });
//       } else {
//         throw new Error("Selected option is not valid.");
//       }

//       // Close modal
//       setModalVisible(false);
//     } catch (error) {
//       console.error('Error saving trip to Firestore:', error);
//       Alert.alert('Error', 'Failed to save trip. Please try again.');
//     }
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

//   const handleProfile = () => {
//     navigation.navigate('Sign');
//   };



//   const handleMyTrips = () => {
//     // Handle My Trips option
//     console.log("My Trips");
//   };


//   const handleContactUs = () => {
//     // Handle Contact Us option
//     console.log("Contact Us");
//   };

//   const handleLogout = () => {
//     // Handle Logout option
//     console.log("Logout");
//   };

//   const handleSafety = () => {
//     // Handle Safety option
//     console.log("Safety");
//   };

//   const handlePrivacyPolicy = () => {
//     // Handle Privacy Policy option
//     console.log("Privacy Policy");
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//       <View style={styles.menuButtonContainer}>
//            <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//              <Text style={styles.menuButtonText}>Menu</Text>
//           </TouchableOpacity>
//          {isMenuOpen && (
//             <View style={styles.menu}>
//               <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//                 <Text style={styles.menuItemText}>Find Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                 <Text style={styles.menuItemText}>Post Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("My Trips")}>
//                 <Text style={styles.menuItemText}>My Trips</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                 <Text style={styles.menuItemText}>Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Contact Us")}>
//                 <Text style={styles.menuItemText}>Contact Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout")}>
//                 <Text style={styles.menuItemText}>Logout</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
//                 <Text style={styles.menuItemText}>Safety</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
//                 <Text style={styles.menuItemText}>Privacy Policy</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={[styles.modalContainer, { width }]}>
//             <View style={styles.modalContent}>
//               <Text>Source:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter source"
//                 onChangeText={text => setSource(text)}
//                 value={source}
//               />
//               <Text>Destination:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter destination"
//                 onChangeText={text => setDestination(text)}
//                 value={destination}
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
//               <Text>Choose Your Option:</Text>
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
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendarContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionButton: {
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
// });

// export default Home;

// import React, { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width, height } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [email, setEmail] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSearchPress = async () => {
//     try {
//       // Check if user is logged in
//       const userToken = await AsyncStorage.getItem('userToken');
//       if (userToken) {
//         const userEmail = await AsyncStorage.getItem('userEmail');
//         setEmail(userEmail);
//         setModalVisible(true);
//       } else {
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }
//   };

//   const handleCloseModal = async () => {
//     try {
//       // Save data to Firestore based on selected option
//       if (selectedOption === "driving") {
//         await firestore().collection('Drivers').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//         });
//       } else if (selectedOption === "riding") {
//         await firestore().collection('Riders').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//         });
//       } else {
//         throw new Error("Selected option is not valid.");
//       }

//       // Close modal
//       setModalVisible(false);
//     } catch (error) {
//       console.error('Error saving trip to Firestore:', error);
//       Alert.alert('Error', 'Failed to save trip. Please try again.');
//     }
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

//   const handleProfile = () => {
//     navigation.navigate('Sign');
//   };

//   const handleMyTrips = () => {
//     // Handle My Trips option
//     console.log("My Trips");
//   };

//   const handleContactUs = () => {
//     // Handle Contact Us option
//     console.log("Contact Us");
//   };

//   const handleLogout = () => {
//     // Handle Logout option
//     console.log("Logout");
//   };

//   const handleSafety = () => {
//     // Handle Safety option
//     console.log("Safety");
//   };

//   const handlePrivacyPolicy = () => {
//     // Handle Privacy Policy option
//     console.log("Privacy Policy");
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <View style={styles.menuButtonContainer}>
//           <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//             <Text style={styles.menuButtonText}>Menu</Text>
//           </TouchableOpacity>
//           {isMenuOpen && (
//             <View style={styles.menu}>
//               <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//                 <Text style={styles.menuItemText}>Find Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                 <Text style={styles.menuItemText}>Post Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("My Trips")}>
//                 <Text style={styles.menuItemText}>My Trips</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                 <Text style={styles.menuItemText}>Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Contact Us")}>
//                 <Text style={styles.menuItemText}>Contact Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout")}>
//                 <Text style={styles.menuItemText}>Logout</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
//                 <Text style={styles.menuItemText}>Safety</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
//                 <Text style={styles.menuItemText}>Privacy Policy</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={[styles.modalContainer, { width }]}>
//             <View style={styles.modalContent}>
//               <Text>Source:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter source"
//                 onChangeText={text => setSource(text)}
//                 value={source}
//               />
//               <Text>Destination:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter destination"
//                 onChangeText={text => setDestination(text)}
//                 value={destination}
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
//               <Text>Choose Your Option:</Text>
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
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendarContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionButton: {
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
// });

// export default Home;



// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, Alert, FlatList } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width, height } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [email, setEmail] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [driverData, setDriverData] = useState([]);
//   const [riderData, setRiderData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const driversSnapshot = await firestore().collection('Drivers').get();
//       const driversData = driversSnapshot.docs.map(doc => doc.data());
//       setDriverData(driversData);

//       const ridersSnapshot = await firestore().collection('Riders').get();
//       const ridersData = ridersSnapshot.docs.map(doc => doc.data());
//       setRiderData(ridersData);
//     };

//     fetchData();
//   }, []);

//   // Render item for FlatList
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
//       } else {
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }
//   };

//   const handleCloseModal = async () => {
//     try {
//       if (selectedOption === "driving") {
//         await firestore().collection('Drivers').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//         });
//       } else if (selectedOption === "riding") {
//         await firestore().collection('Riders').add({
//           email,
//           source,
//           destination,
//           selectedDate,
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

//   const handleProfile = () => {
//     navigation.navigate('Sign');
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <View style={styles.menuButtonContainer}>
//           <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//             <Text style={styles.menuButtonText}>Menu</Text>
//           </TouchableOpacity>
//           {isMenuOpen && (
//             <View style={styles.menu}>
//               <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//                 <Text style={styles.menuItemText}>Find Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                 <Text style={styles.menuItemText}>Post Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("My Trips")}>
//                 <Text style={styles.menuItemText}>My Trips</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                 <Text style={styles.menuItemText}>Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Contact Us")}>
//                 <Text style={styles.menuItemText}>Contact Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout")}>
//                 <Text style={styles.menuItemText}>Logout</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
//                 <Text style={styles.menuItemText}>Safety</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
//                 <Text style={styles.menuItemText}>Privacy Policy</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={[styles.modalContainer, { width }]}>
//             <View style={styles.modalContent}>
//               <Text>Source:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter source"
//                 onChangeText={text => setSource(text)}
//                 value={source}
//               />
//               <Text>Destination:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter destination"
//                 onChangeText={text => setDestination(text)}
//                 value={destination}
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
//               <Text>Choose Your Option:</Text>
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

//         {/* Display driverData */}
//         <FlatList
//           data={driverData}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />

//         {/* Display riderData */}
//         <FlatList
//           data={riderData}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />

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
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendarContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionButton: {
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

//   // FlatList item styles
//   item: {
//     top:20,
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 16,
//   },
// });

// export default Home;



// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width, height } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [email, setEmail] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [driverData, setDriverData] = useState([]);
//   const [riderData, setRiderData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const driversSnapshot = await firestore().collection('Drivers').get();
//       const driversData = driversSnapshot.docs.map(doc => doc.data());
//       setDriverData(driversData);

//       const ridersSnapshot = await firestore().collection('Riders').get();
//       const ridersData = ridersSnapshot.docs.map(doc => doc.data());
//       setRiderData(ridersData);
//     };

//     fetchData();
//   }, []);

//   // Render item for FlatList
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
//       } else {
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       console.error('Error checking user login:', error);
//     }
//   };

//   const handleCloseModal = async () => {
//     try {
//       if (selectedOption === "driving") {
//         await firestore().collection('Drivers').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//           option: selectedOption,
//         });
//       } else if (selectedOption === "riding") {
//         await firestore().collection('Riders').add({
//           email,
//           source,
//           destination,
//           selectedDate,
//           option: selectedOption,
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

//   const handleProfile = () => {
//     navigation.navigate('Sign');
//   };

//   return (
//     <View style={[styles.container, { width, height }]}>
//       <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
//         <View style={styles.menuButtonContainer}>
//           <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//             <Text style={styles.menuButtonText}>Menu</Text>
//           </TouchableOpacity>
//           {isMenuOpen && (
//             <View style={styles.menu}>
//               <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//                 <Text style={styles.menuItemText}>Find Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//                 <Text style={styles.menuItemText}>Post Trip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("My Trips")}>
//                 <Text style={styles.menuItemText}>My Trips</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//                 <Text style={styles.menuItemText}>Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Contact Us")}>
//                 <Text style={styles.menuItemText}>Contact Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout")}>
//                 <Text style={styles.menuItemText}>Logout</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
//                 <Text style={styles.menuItemText}>Safety</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
//                 <Text style={styles.menuItemText}>Privacy Policy</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//         <View style={styles.searchBar}>
//           <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
//             <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={[styles.modalContainer, { width }]}>
//             <View style={styles.modalContent}>
//               <Text>Source:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter source"
//                 onChangeText={text => setSource(text)}
//                 value={source}
//               />
//               <Text>Destination:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter destination"
//                 onChangeText={text => setDestination(text)}
//                 value={destination}
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
//               <Text>Choose Your Option:</Text>
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

//         {/* Render driverData */}
//         {driverData.map((driver, index) => (
//           <View key={`driver-${index}`} style={styles.item}>
//             <Text style={styles.title}>{driver.source} {'->'}  {driver.destination}</Text>
//             <Text>Date: {driver.selectedDate}</Text>
//             <Text>Email: {driver.email}</Text>
//             <Text> {driver.option}</Text>

//           </View>
//         ))}

//         {/* Render riderData */}
//         {riderData.map((rider, index) => (
//           <View key={`rider-${index}`} style={styles.item}>
//             <Text style={styles.title}>{rider.source} {'->'}  {rider.destination}</Text>
//             <Text>Date: {rider.selectedDate}</Text>
//             <Text>Email: {rider.email}</Text>
//             <Text> {rider.option}</Text>
//           </View>
//         ))}
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
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendarContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionButton: {
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

//   // FlatList item styles
//   item: {
//     // position:'absolute',
//    top:"25%",
//    width:'90%',
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 10,

//   },
//   title: {
//     fontSize: 22,
//   },
// });

// export default Home;


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Modal, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [driverData, setDriverData] = useState([]);
  const [riderData, setRiderData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const driversSnapshot = await firestore().collection('Drivers').get();
  //     const driversData = driversSnapshot.docs.map(doc => doc.data());
  //     setDriverData(driversData);

  //     const ridersSnapshot = await firestore().collection('Riders').get();
  //     const ridersData = ridersSnapshot.docs.map(doc => doc.data());
  //     setRiderData(ridersData);
  //   };

  //   fetchData();
  // }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const driversSnapshot = await firestore().collection('Drivers').get();
      const driversData = driversSnapshot.docs.map(doc => doc.data());
      setDriverData(driversData);
  
      const ridersSnapshot = await firestore().collection('Riders').get();
      const ridersData = ridersSnapshot.docs.map(doc => doc.data());
      setRiderData(ridersData);
    };
  
    if (!modalVisible) {
      fetchData();
    }
  }, [modalVisible]);
  

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.source} - {item.destination}</Text>
      <Text>Date: {item.selectedDate}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  // const handleSearchPress = async () => {
  //   try {
  //     const userToken = await AsyncStorage.getItem('userToken');
  //     if (userToken) {
  //       const userEmail = await AsyncStorage.getItem('userEmail');
  //       setEmail(userEmail);
  //       setModalVisible(true);
  //     } else {
  //       navigation.navigate('Login');
  //     }
  //   } catch (error) {
  //     console.error('Error checking user login:', error);
  //   }
  // };

  // const handleSearchPress = async () => {
  //   try {
  //     const userToken = await AsyncStorage.getItem('userToken');
  //     if (userToken) {
  //       const userEmail = await AsyncStorage.getItem('userEmail');
  //       setEmail(userEmail);
  //       setModalVisible(true);
        
  //       // Clear source and destination fields
  //       setSource('');
  //       setDestination('');
        
  //       // Fetch latest data from Firestore
  //       const driversSnapshot = await firestore().collection('Drivers').get();
  //       const driversData = driversSnapshot.docs.map(doc => doc.data());
  //       setDriverData(driversData);
  
  //       const ridersSnapshot = await firestore().collection('Riders').get();
  //       const ridersData = ridersSnapshot.docs.map(doc => doc.data());
  //       setRiderData(ridersData);
  //     } else {
  //       navigation.navigate('Login');
  //     }
  //   } catch (error) {
  //     console.error('Error checking user login:', error);
  //   }
  // };

  const handleSearchPress = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        const userEmail = await AsyncStorage.getItem('userEmail');
        setEmail(userEmail);
        setModalVisible(true);

        setSource('');
        setDestination('');
        
        // Fetch latest data from Firestore
        const driversSnapshot = await firestore().collection('Drivers').where('source', '==', source).where('destination', '==', destination).get();
        const driversData = driversSnapshot.docs.map(doc => doc.data());
        setDriverData(driversData);
  
        const ridersSnapshot = await firestore().collection('Riders').where('source', '==', source).where('destination', '==', destination).get();
        const ridersData = ridersSnapshot.docs.map(doc => doc.data());
        setRiderData(ridersData);
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking user login:', error);
    }
  };
  
  

  const handleCloseModal = async () => {
    try {
      if (selectedOption === "driving") {
        await firestore().collection('Drivers').add({
          email,
          source,
          destination,
          selectedDate,
          option: selectedOption,
        });
      } else if (selectedOption === "riding") {
        await firestore().collection('Riders').add({
          email,
          source,
          destination,
          selectedDate,
          option: selectedOption,
        });
      } else {
        throw new Error("Selected option is not valid.");
      }

      setModalVisible(false);
    } catch (error) {
      console.error('Error saving trip to Firestore:', error);
      Alert.alert('Error', 'Failed to save trip. Please try again.');
    }
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

  const handleProfile = () => {
    navigation.navigate('Sign');
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <ImageBackground source={require('../../src/components/assets/bg.jpg')} style={styles.backgroundImage}>
        <View style={styles.menuButtonContainer}>
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <Text style={styles.menuButtonText}>Menu</Text>
          </TouchableOpacity>
          {isMenuOpen && (
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
                <Text style={styles.menuItemText}>Find Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
                <Text style={styles.menuItemText}>Post Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("My Trips")}>
                <Text style={styles.menuItemText}>My Trips</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
                <Text style={styles.menuItemText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Contact Us")}>
                <Text style={styles.menuItemText}>Contact Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Logout")}>
                <Text style={styles.menuItemText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
                <Text style={styles.menuItemText}>Safety</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
                <Text style={styles.menuItemText}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.searchBar}>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
            <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
          </TouchableOpacity>
        </View>
        
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={[styles.modalContainer, { width }]}>
            <View style={styles.modalContent}>
              <Text>Source:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter source"
                onChangeText={text => setSource(text)}
                value={source}
              />
              <Text>Destination:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter destination"
                onChangeText={text => setDestination(text)}
                value={destination}
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
              <Text>Choose Your Option:</Text>
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
        
        {/* Render driverData and riderData */}
        <ScrollView style={styles.scrollView}>
          {/* Render driverData */}
          {driverData.map((driver, index) => (
            <View key={`driver-${index}`} style={styles.item}>
              <Text style={styles.title}>{driver.source} {'->'}  {driver.destination}</Text>
              <Text>Date: {driver.selectedDate}</Text>
              <Text>Email: {driver.email}</Text>
              <Text> {driver.option}</Text>
            </View>
          ))}

          {/* Render riderData */}
          {riderData.map((rider, index) => (
            <View key={`rider-${index}`} style={styles.item}>
              <Text style={styles.title}>{rider.source} {'->'}  {rider.destination}</Text>
              <Text>Date: {rider.selectedDate}</Text>
              <Text>Email: {rider.email}</Text>
              <Text> {rider.option}</Text>
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
    justifyContent: 'space-between',
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
    marginTop: 150, // Adjust this value based on your layout
    marginBottom: 50, // Adjust this value based on your layout
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  calendarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  optionButton: {
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

  // FlatList item styles
  item: {
    width: '90%',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
  },
});

export default Home;


 {/* Modal */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={[styles.modalContainer, { width }]}>
            <View style={styles.modalContent}>
            
              <Text>Source:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter source"
                onChangeText={text => setSource(text)}
                value={source}
              />
              <Text>Destination:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter destination"
                onChangeText={text => setDestination(text)}
                value={destination}
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
              <Text>Choose Your Option:</Text>
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
      
        </Modal> */}
        {/* Modal */} {/* Modal */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={[styles.modalContainer, { width }]}>
            <View style={styles.modalContent}>
            
              <Text>Source:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter source"
                onChangeText={text => setSource(text)}
                value={source}
              />
              <Text>Destination:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter destination"
                onChangeText={text => setDestination(text)}
                value={destination}
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
              <Text>Choose Your Option:</Text>
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
      
        </Modal> */}
        {/* Modal */}














             {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <ScrollView style={styles.scrollView2}>
            <View style={[styles.modalContainer, { width }]}>
              <View style={styles.modalContent}>
                <Text>Source:</Text>
                <GooglePlacesAutocomplete
                  placeholder="Enter source"
                  onPress={(data, details = null) => {
                    setSource(data.description);
                  }}
                  query={{
                    key: 'AIzaSyA3a7ovUHUGvCNl6pmQZUTOoM6WtowHHt4',
                    language: 'en',
                  }}
                  fetchDetails={true}
                  styles={{
                    textInput: styles.input,
                    container: { marginBottom: 10 },
                  }}
                />
                <Text>Destination:</Text>
                <GooglePlacesAutocomplete
                  placeholder="Enter destination"
                  onPress={(data, details = null) => {
                    setDestination(data.description);
                  }}
                  query={{
                    key: 'AIzaSyA3a7ovUHUGvCNl6pmQZUTOoM6WtowHHt4',
                    language: 'en',
                  }}
                  fetchDetails={true}
                  styles={{
                    textInput: styles.input,
                    container: { marginBottom: 10 },
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
                <Text>Choose Your Option:</Text>
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
          </ScrollView>
        </Modal> */}








        //imp contain scrollview
        
{/* <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>  
  <View style={styles.modalContainer}>
  
    <View style={[styles.modalContent, { width }]}>
      
      <KeyboardAvoidingView>
      <Text>Source:</Text>
<GooglePlacesAutocomplete
  placeholder="Enter source"
  onPress={(data, details = null) => {
    setSource(data.description);
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
      zIndex:5,
    },
  }}
/>
<Text>Destination:</Text>
<GooglePlacesAutocomplete
  placeholder="Enter Destination"
  onPress={(data, details = null) => {
    setSource(data.description);
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
      zIndex:5,
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
      <Text>Choose Your Option:</Text>
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
      </TouchableOpacity></KeyboardAvoidingView>

    </View>
  </View>
</Modal> */}





  // const calculateDistance = (sourceCoords, destinationCoords) => {
  //   const toRadians = (degrees) => {
  //     return degrees * Math.PI / 180;
  //   };
  
  //   const earthRadiusKm = 6371;
  //   const dLat = toRadians(destinationCoords.lat - sourceCoords.lat);
  //   const dLon = toRadians(destinationCoords.lng - sourceCoords.lng);
  //   const lat1 = toRadians(sourceCoords.lat);
  //   const lat2 = toRadians(destinationCoords.lat);
  
  //   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //             Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   const distance = earthRadiusKm * c;
  
  //   return distance.toFixed(2); // Distance in kilometers, rounded to 2 decimal places
  // };




   // const handleCloseModal = async () => {
  //   try {
  //     // Fetch coordinates for source and destination using Google Maps Geocoding API
  //     const sourceResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
  //     const sourceData = await sourceResponse.json();
  //     if (sourceData.status !== 'OK') {
  //       throw new Error(`Failed to geocode source address: ${sourceData.error_message}`);
  //     }
  //     const sourceCoords = sourceData.results[0]?.geometry?.location;
  
  //     const destinationResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`);
  //     const destinationData = await destinationResponse.json();
  //     if (destinationData.status !== 'OK') {
  //       throw new Error(`Failed to geocode destination address: ${destinationData.error_message}`);
  //     }
  //     const destinationCoords = destinationData.results[0]?.geometry?.location;
  
  //     if (!sourceCoords || !destinationCoords) {
  //       throw new Error('Failed to fetch coordinates for source or destination address.');
  //     }
  
  //     // Calculate distance between source and destination coordinates
  //     const calculatedDistance = calculateDistance(sourceCoords, destinationCoords);
  
  //     // Save trip details to Firestore
  //     if (selectedOption === "driving") {
  //       await firestore().collection('Drivers').add({
  //         email,
  //         source,
  //         destination,
  //         selectedDate,
  //         option: selectedOption,
  //         // distance: calculatedDistance // Save distance in Firestore
  //         distance: `${calculatedDistance} KM`

  //       });
  //     } else if (selectedOption === "riding") {
  //       await firestore().collection('Riders').add({
  //         email,
  //         source,
  //         destination,
  //         selectedDate,
  //         option: selectedOption,
  //         // distance: calculatedDistance 
  //         distance: `${calculatedDistance} KM`
  //       });
  //     } else {
  //       throw new Error("Selected option is not valid.");
  //     }
  
  //     setModalVisible(false);
  //   } catch (error) {
  //     console.error('Error saving trip to Firestore:', error);
  //     Alert.alert('Error', 'Failed to save trip. Please try again.');
  //   }
  // };








  //check krr

  // import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
// import React, { useState } from 'react';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSendEmail = () => {
//     const emailSubject = 'Contact Inquiry';
//     const emailBody = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
//     Linking.openURL(`mailto:skparjapati125@gmail.com?subject=${emailSubject}&body=${emailBody}`);
//   };

//   const handleOpenWhatsApp = () => {
//     const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
//     Linking.openURL(`whatsapp://send?text=${whatsappMessage}&phone=9818908237`);
//   };

//   const handleCall = () => {
//     Linking.openURL('tel:9818908237');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contact Us</Text>
//       <View style={styles.options}>
//         <TouchableOpacity style={styles.optionButton} onPress={handleSendEmail}>
//           <Text style={styles.optionText}>Email</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleOpenWhatsApp}>
//           <Text style={styles.optionText}>WhatsApp</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleCall}>
//           <Text style={styles.optionText}>Call</Text>
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type your message here"
//         value={message}
//         onChangeText={setMessage}
//         multiline
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   options: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   optionButton: {
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
// });

// export default Contact;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore from Firebase

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
//     // Save the details to Firestore
//     firestore()
//       .collection('contactForms') // Specify the collection in Firestore
//       .add({
//         name: name,
//         email: email,
//         phoneNumber: phoneNumber,
//         message: message,
//       })
//       .then(() => {
//         console.log('Contact form submitted successfully!');
//         // You can add further actions here if needed
//       })
//       .catch(error => {
//         console.error('Error submitting contact form: ', error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contact Us</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type your message here"
//         value={message}
//         onChangeText={setMessage}
//         multiline
//       />
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default Contact;


//checkr kr login



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Navigate to the home screen or any other screen you desire
//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert('Error', 'Please enter your email address');
//       return;
//     }

//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       Alert.alert('Password Reset Email Sent', 'An email with instructions to reset your password has been sent to your email address.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   loginButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;


// Login.js

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Save user token to AsyncStorage
//       await AsyncStorage.setItem('userToken', userToken);

//       // Navigate to the home screen or any other screen you desire
//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert('Error', 'Please enter your email address');
//       return;
//     }

//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       Alert.alert('Password Reset Email Sent', 'An email with instructions to reset your password has been sent to your email address.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   loginButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;
// Login.js


// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Save user token to AsyncStorage
//       await AsyncStorage.setItem('userToken', user.uid);
//       await AsyncStorage.setItem('userEmail', email);

//       // Navigate to the profile screen
//       navigation.navigate('Profile');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert('Error', 'Please enter your email address');
//       return;
//     }

//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       Alert.alert('Password Reset Email Sent', 'An email with instructions to reset your password has been sent to your email address.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   loginButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;


//checkr kr singn


// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState(''); // New state variable for gender
//   const navigation = useNavigation();

//   // const handleSignUp = async () => {
//   //   try {
//   //     const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//   //     await firebase.firestore().collection('users').doc(user.uid).set({
//   //       name,
//   //       email,
//   //       mobileNumber,
//   //       gender, // Save gender to the database
//   //     });

//   //     // Save user email to AsyncStorage
//   //     await AsyncStorage.setItem('userEmail', email);

//   //     Alert.alert('Sign Up Successful', 'User account created successfully.');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   // const handleSignUp = async () => {
//   //   try {
//   //     // Check if email belongs to a valid domain
//   //     const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//   //     const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//   //     if (!isValidEmail) {
//   //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
//   //       return;
//   //     }
  
//   //     const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//   //     await firebase.firestore().collection('users').doc(user.uid).set({
//   //       name,
//   //       email,
//   //       mobileNumber,
//   //       gender,
//   //     });
  
//   //     // Save user email to AsyncStorage
//   //     await AsyncStorage.setItem('userEmail', email);
  
//   //     // Send email verification link
//   //     await user.sendEmailVerification();
  
//   //     Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   const handleSignUp = async () => {
//     try {
//       // Check if password meets criteria
//       const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       // Check if email belongs to a valid domain
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
  
//       // Send email verification link
//       await user.sendEmailVerification();
  
//       Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };
  
  
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//       </Picker>
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;


// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState(''); // New state variable for gender
//   const [showPassword, setShowPassword] = useState(false); // State variable to toggle password visibility
//   const navigation = useNavigation();

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = async () => {
//     try {
//       // Check if password meets criteria
//       const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       // Check if email belongs to a valid domain
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
  
//       // Send email verification link
//       await user.sendEmailVerification();
  
//       Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
//       />
//       {/* Button to toggle password visibility */}
//       <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
//         <Text style={styles.togglePasswordButtonText}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
//       </TouchableOpacity>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   togglePasswordButton: {
//     alignSelf: 'flex-end',
//     marginTop: -25,
// bottom:20,
//   },
//   togglePasswordButtonText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;
// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState(''); // New state variable for gender
//   const navigation = useNavigation();

//   // const handleSignUp = async () => {
//   //   try {
//   //     const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//   //     await firebase.firestore().collection('users').doc(user.uid).set({
//   //       name,
//   //       email,
//   //       mobileNumber,
//   //       gender, // Save gender to the database
//   //     });

//   //     // Save user email to AsyncStorage
//   //     await AsyncStorage.setItem('userEmail', email);

//   //     Alert.alert('Sign Up Successful', 'User account created successfully.');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   // const handleSignUp = async () => {
//   //   try {
//   //     // Check if email belongs to a valid domain
//   //     const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//   //     const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//   //     if (!isValidEmail) {
//   //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
//   //       return;
//   //     }
  
//   //     const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//   //     await firebase.firestore().collection('users').doc(user.uid).set({
//   //       name,
//   //       email,
//   //       mobileNumber,
//   //       gender,
//   //     });
  
//   //     // Save user email to AsyncStorage
//   //     await AsyncStorage.setItem('userEmail', email);
  
//   //     // Send email verification link
//   //     await user.sendEmailVerification();
  
//   //     Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   const handleSignUp = async () => {
//     try {
//       // Check if password meets criteria
//       const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       // Check if email belongs to a valid domain
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
  
//       // Send email verification link
//       await user.sendEmailVerification();
  
//       Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };
  
  
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//       </Picker>
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;


// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState(''); // New state variable for gender
//   const [showPassword, setShowPassword] = useState(false); // State variable to toggle password visibility
//   const navigation = useNavigation();

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = async () => {
//     try {
//       // Check if password meets criteria
//       const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       // Check if email belongs to a valid domain
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
  
//       // Send email verification link
//       await user.sendEmailVerification();
  
//       Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
//       />
//       {/* Button to toggle password visibility */}
//       <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
//         <Text style={styles.togglePasswordButtonText}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
//       </TouchableOpacity>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   togglePasswordButton: {
//     alignSelf: 'flex-end',
//     marginTop: -25,
// bottom:20,
//   },
//   togglePasswordButtonText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState(''); // New state variable for gender
//   const navigation = useNavigation();

//   // const handleSignUp = async () => {
//   //   try {
//   //     const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//   //     await firebase.firestore().collection('users').doc(user.uid).set({
//   //       name,
//   //       email,
//   //       mobileNumber,
//   //       gender, // Save gender to the database
//   //     });

//   //     // Save user email to AsyncStorage
//   //     await AsyncStorage.setItem('userEmail', email);

//   //     Alert.alert('Sign Up Successful', 'User account created successfully.');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   // const handleSignUp = async () => {
//   //   try {
//   //     // Check if email belongs to a valid domain
//   //     const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//   //     const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//   //     if (!isValidEmail) {
//   //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
//   //       return;
//   //     }
  
//   //     const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//   //     await firebase.firestore().collection('users').doc(user.uid).set({
//   //       name,
//   //       email,
//   //       mobileNumber,
//   //       gender,
//   //     });
  
//   //     // Save user email to AsyncStorage
//   //     await AsyncStorage.setItem('userEmail', email);
  
//   //     // Send email verification link
//   //     await user.sendEmailVerification();
  
//   //     Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//   //   } catch (error) {
//   //     Alert.alert('Error', error.message);
//   //   }
//   // };

//   const handleSignUp = async () => {
//     try {
//       // Check if password meets criteria
//       const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       // Check if email belongs to a valid domain
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
  
//       // Send email verification link
//       await user.sendEmailVerification();
  
//       Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };
  
  
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//       </Picker>
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;


// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState(''); // New state variable for gender
//   const [showPassword, setShowPassword] = useState(false); // State variable to toggle password visibility
//   const navigation = useNavigation();

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = async () => {
//     try {
//       // Check if password meets criteria
//       const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       // Check if email belongs to a valid domain
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
  
//       // Send email verification link
//       await user.sendEmailVerification();
  
//       Alert.alert('Sign Up Successful', 'User account created successfully. Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
//       />
//       {/* Button to toggle password visibility */}
//       <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
//         <Text style={styles.togglePasswordButtonText}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
//       </TouchableOpacity>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   togglePasswordButton: {
//     alignSelf: 'flex-end',
//     marginTop: -25,
// bottom:20,
//   },
//   togglePasswordButtonText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;






