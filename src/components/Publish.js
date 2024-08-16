
// import { 
//     StyleSheet, 
//     Text, 
//     View, 
//     TextInput, 
//     TouchableOpacity, 
//     Modal 
//   } from 'react-native';
//   import React, { useState } from 'react';
//   import DateTimePickerModal from 'react-native-modal-datetime-picker';
//   import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//   import { Picker } from '@react-native-picker/picker';
//   import firestore from '@react-native-firebase/firestore'; // Import Firestore
  
//   const PublishTrip = () => {
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [numberOfPeople, setNumberOfPeople] = useState('');
//     const [date, setDate] = useState(new Date());
//     const [gender, setGender] = useState('');
//     const [sourceModalVisible, setSourceModalVisible] = useState(false);
//     const [destinationModalVisible, setDestinationModalVisible] = useState(false);
//     const [peoplePickerVisible, setPeoplePickerVisible] = useState(false);
//     const [genderPickerVisible, setGenderPickerVisible] = useState(false);
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
//     const formatDate = (date) => {
//       const day = String(date.getDate()).padStart(2, '0');
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const year = date.getFullYear();
//       return `${day}/${month}/${year}`;
//     };
  
//     const handlePublish = async () => {
//       if (!source || !destination || !numberOfPeople || !gender) {
//         alert('Please fill in all fields.');
//         return;
//       }
  
//       try {
//         await firestore().collection('PublishTrip').add({
//           source,
//           destination,
//           numberOfPeople,
//           date: formatDate(date),
//           gender,
//         });
//         alert('Trip Published Successfully!');
//       } catch (error) {
//         console.error('Error adding document: ', error);
//         alert('Error publishing trip. Please try again.');
//       }
//     };
  
//     const handleDateChange = (selectedDate) => {
//       if (selectedDate >= new Date()) {
//         setDate(selectedDate);
//       }
//       setDatePickerVisibility(false);
//     };
  
//     const handleSourceSelect = (data) => {
//       if (data && data.description) {
//         setSource(data.description);
//         setSourceModalVisible(false);
//       }
//     };
  
//     const handleDestinationSelect = (data) => {
//       if (data && data.description) {
//         setDestination(data.description);
//         setDestinationModalVisible(false);
//       }
//     };
  
//     const handleNumberOfPeopleChange = (value) => {
//       setNumberOfPeople(value);
//       setPeoplePickerVisible(false);
//     };
  
//     const handleGenderChange = (value) => {
//       setGender(value);
//       setGenderPickerVisible(false);
//     };
  
//     return (
//       <View style={styles.container}>
//         <View style={styles.featureContainer}>
//           <Text style={styles.title}>Publish Trip</Text>
  
//           <Text style={styles.title2}>Source:</Text>
//           <TouchableOpacity onPress={() => setSourceModalVisible(true)} style={styles.inputContainer}>
//             <Text style={styles.input}>{source || 'Select Source'}</Text>
//           </TouchableOpacity>
  
//           <Text style={styles.title2}>Destination:</Text>
//           <TouchableOpacity onPress={() => setDestinationModalVisible(true)} style={styles.inputContainer}>
//             <Text style={styles.input}>{destination || 'Select Destination'}</Text>
//           </TouchableOpacity>
  
//           <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.inputContainer}>
//             <Text style={styles.label}>Date:</Text>
//             <Text style={styles.input}>{formatDate(date)}</Text>
//           </TouchableOpacity>
  
//           <TouchableOpacity onPress={() => setPeoplePickerVisible(true)} style={styles.inputContainer}>
//             <Text style={styles.label}>Number of People:</Text>
//             <Text style={styles.input}>{numberOfPeople || 'Select Number of People'}</Text>
//           </TouchableOpacity>
  
//           <TouchableOpacity onPress={() => setGenderPickerVisible(true)} style={styles.inputContainer}>
//             <Text style={styles.label}>Gender:</Text>
//             <Text style={styles.input}>{gender || 'Select Gender'}</Text>
//           </TouchableOpacity>
  
//           <TouchableOpacity onPress={handlePublish} style={styles.publishButton}>
//             <Text style={styles.buttonText}>Publish</Text>
//           </TouchableOpacity>
  
//           {/* Source Modal */}
//           <Modal
//             transparent={true}
//             visible={sourceModalVisible}
//             animationType="slide"
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <GooglePlacesAutocomplete
//                   placeholder="Enter Source"
//                   onPress={handleSourceSelect}
//                   query={{
//                     key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY', // Replace with your Google API key
//                     language: 'en',
//                   }}
//                   fetchDetails={true}
//                   styles={{
//                     textInput: styles.modalInput,
//                     container: { marginBottom: 16 },
//                     description: {
//                       fontFamily: 'Calibri',
//                       color: 'black',
//                       fontSize: 12,
//                     },
//                     listView: {
                     
//                       padding:20,
//                       borderRadius:50,
//                       position: 'absolute',
//                       marginTop: 84,
//                       backgroundColor: 'white',
//                       borderBottomEndRadius: 15,
//                       elevation: 3,
//                     },
//                   }}
//                 />
//                 <TouchableOpacity onPress={() => setSourceModalVisible(false)} style={styles.button}>
//                   <Text style={styles.buttonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
  
//           {/* Destination Modal */}
//           <Modal
//             transparent={true}
//             visible={destinationModalVisible}
//             animationType="slide"
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <GooglePlacesAutocomplete
//                   placeholder="Enter Destination"
//                   onPress={handleDestinationSelect}
//                   query={{
//                     key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY', // Replace with your Google API key
//                     language: 'en',
//                   }}
//                   fetchDetails={true}
//                   styles={{
//                     textInput: styles.modalInput,
//                     container: { marginBottom: 16 },
//                     description: {
//                       fontFamily: 'Calibri',
//                       color: 'black',
//                       fontSize: 12,
//                     },
//                     listView: {
                     
//                       padding:20,
//                       borderRadius:50,
//                       position: 'absolute',
//                       marginTop: 84,
//                       backgroundColor: 'white',
//                       borderBottomEndRadius: 15,
//                       elevation: 3,
//                     },
//                   }}
//                 />
//                 <TouchableOpacity onPress={() => setDestinationModalVisible(false)} style={styles.button}>
//                   <Text style={styles.buttonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
  
//           {/* Number of People Picker Modal */}
//           <Modal
//             transparent={true}
//             visible={peoplePickerVisible}
//             animationType="slide"
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <Picker
//                   selectedValue={numberOfPeople}
//                   style={styles.picker}
//                   onValueChange={handleNumberOfPeopleChange}
//                 >
//                   {[...Array(100).keys()].map(i => (
//                     <Picker.Item key={i + 1} label={`${i + 1}`} value={`${i + 1}`} />
//                   ))}
//                 </Picker>
//                 <TouchableOpacity onPress={() => setPeoplePickerVisible(false)} style={styles.button}>
//                   <Text style={styles.buttonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
  
//           {/* Gender Picker Modal */}
//           <Modal
//             transparent={true}
//             visible={genderPickerVisible}
//             animationType="slide"
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <Picker
//                   selectedValue={gender}
//                   style={styles.picker}
//                   onValueChange={handleGenderChange}
//                 >
//                   <Picker.Item label="Select Gender" value="" />
//                   <Picker.Item label="Male" value="male" />
//                   <Picker.Item label="Female" value="female" />
//                   <Picker.Item label="Non-binary" value="non-binary" />
//                   <Picker.Item label="Other" value="other" />
//                   <Picker.Item label="Prefer not to say" value="prefer-not-to-say" />
//                 </Picker>
//                 <TouchableOpacity onPress={() => setGenderPickerVisible(false)} style={styles.button}>
//                   <Text style={styles.buttonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
  
//           <DateTimePickerModal
//             isVisible={isDatePickerVisible}
//             mode="date"
//             minimumDate={new Date()} // Restrict to today and future dates
//             onConfirm={handleDateChange}
//             onCancel={() => setDatePickerVisibility(false)}
//           />
//         </View>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     featureContainer: {
//       marginTop: '40%',
   
//       backgroundColor: '#fff',
//       borderRadius: 10,
//       elevation: 3,
//       marginBottom: 20,
//       padding: 15,
//       width: '100%',
//       maxWidth: 350,
//     },
//     container: {
//       flex: 1,
//       padding: 16,
//       backgroundColor: '#f8f8f8',
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       color: '#391f99',
//       marginBottom: 16,
//       textAlign: 'center',
//     },
//     title2: {
//       fontSize: 18,
//       color: '#391f99',
//       marginBottom: 8,
//     },
//     inputContainer: {
//       marginBottom: 16,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ddd',
//       paddingBottom: 8,
//     },
//     label: {
//       fontSize: 16,
//       color: '#000',
//     },
//     input: {
//       fontSize: 16,
//       color: '#666',
//     },
//     modalBackground: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContainer: {
//       width: '100%',
//       marginTop: '50%',
//       height: '100%',
//       backgroundColor: 'white',
//       borderRadius: 10,
//       padding: 16,
//       elevation: 5,
//     },
//     modalInput: {
//       borderColor: '#391f99',
//       textAlign: 'center',
//       marginTop: '10%',
//       height: 50,
  
//       borderWidth: 2,
//       borderRadius: 50,
//       paddingHorizontal: 8,
//     },
//     button: {
//       alignItems: 'center',
//       marginTop: 16,
//       backgroundColor: '#391f99',
//       paddingVertical: 10,
//       borderRadius: 50,
//       bottom:100,
//     },
//     buttonText: {
//       color: 'white',
//       fontSize: 16,
//     },
//     picker: {
//               borderWidth:2,
//               marginBottom:'130%',
//             height: 200,
//             width: '100%',
//           },
//   });
  
//   export default PublishTrip;







  
// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   TouchableOpacity, 
//   Modal, 
//   Pressable 
// } from 'react-native';
// import React, { useState } from 'react';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore

// const PublishTrip = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [role, setRole] = useState(''); // State for selected role
//   const [sourceModalVisible, setSourceModalVisible] = useState(false);
//   const [destinationModalVisible, setDestinationModalVisible] = useState(false);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [roleModalVisible, setRoleModalVisible] = useState(false);

//   const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const handlePublish = async () => {
//     if (!source || !destination || !role) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       await firestore().collection('PublishTrip').add({
//         source,
//         destination,
//         date: formatDate(date),
//         role,
//       });
//       alert('Trip Published Successfully!');
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       alert('Error publishing trip. Please try again.');
//     }
//   };

//   const handleDateChange = (selectedDate) => {
//     if (selectedDate >= new Date()) {
//       setDate(selectedDate);
//     }
//     setDatePickerVisibility(false);
//   };

//   const handleSourceSelect = (data) => {
//     if (data && data.description) {
//       setSource(data.description);
//       setSourceModalVisible(false);
//     }
//   };

//   const handleDestinationSelect = (data) => {
//     if (data && data.description) {
//       setDestination(data.description);
//       setDestinationModalVisible(false);
//     }
//   };

//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole);
//     setRoleModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.featureContainer}>
//         <Text style={styles.title}>Publish Trip</Text>

//         <Text style={styles.title2}>Source:</Text>
//         <TouchableOpacity onPress={() => setSourceModalVisible(true)} style={styles.inputContainer}>
//           <Text style={styles.input}>{source || 'Select Source'}</Text>
//         </TouchableOpacity>

//         <Text style={styles.title2}>Destination:</Text>
//         <TouchableOpacity onPress={() => setDestinationModalVisible(true)} style={styles.inputContainer}>
//           <Text style={styles.input}>{destination || 'Select Destination'}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.inputContainer}>
//           <Text style={styles.label}>Date:</Text>
//           <Text style={styles.input}>{formatDate(date)}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => setRoleModalVisible(true)} style={styles.inputContainer}>
//           <Text style={styles.label}>I Am:</Text>
//           <Text style={styles.input}>{role || 'Select Role'}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handlePublish} style={styles.publishButton}>
//           <Text style={styles.buttonText}>Publish</Text>
//         </TouchableOpacity>

//         {/* Source Modal */}
//         <Modal
//           transparent={true}
//           visible={sourceModalVisible}
//           animationType="slide"
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter Source"
//                 onPress={handleSourceSelect}
//                 query={{
//                   key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY', // Replace with your Google API key
//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: styles.modalInput,
//                   container: { marginBottom: 16 },
//                   description: {
//                     fontFamily: 'Calibri',
//                     color: 'black',
//                     fontSize: 12,
//                   },
//                   listView: {
//                     padding: 20,
//                     borderRadius: 50,
//                     position: 'absolute',
//                     marginTop: 84,
//                     backgroundColor: 'white',
//                     borderBottomEndRadius: 15,
//                     elevation: 3,
//                   },
//                 }}
//               />
//               <TouchableOpacity onPress={() => setSourceModalVisible(false)} style={styles.button}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Destination Modal */}
//         <Modal
//           transparent={true}
//           visible={destinationModalVisible}
//           animationType="slide"
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter Destination"
//                 onPress={handleDestinationSelect}
//                 query={{
//                   key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY', // Replace with your Google API key
//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: styles.modalInput,
//                   container: { marginBottom: 16 },
//                   description: {
//                     fontFamily: 'Calibri',
//                     color: 'black',
//                     fontSize: 12,
//                   },
//                   listView: {
//                     padding: 20,
//                     borderRadius: 50,
//                     position: 'absolute',
//                     marginTop: 84,
//                     backgroundColor: 'white',
//                     borderBottomEndRadius: 15,
//                     elevation: 3,
//                   },
//                 }}
//               />
//               <TouchableOpacity onPress={() => setDestinationModalVisible(false)} style={styles.button}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Role Modal */}
//         <Modal
//           transparent={true}
//           visible={roleModalVisible}
//           animationType="slide"
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <TouchableOpacity
//                 style={[styles.optionButton, role === 'driver' && styles.selectedOption]}
//                 onPress={() => handleRoleSelect('driver')}
//               >
//                 <Text style={styles.optionText}>I Am Driver</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.optionButton, role === 'companion' && styles.selectedOption]}
//                 onPress={() => handleRoleSelect('companion')}
//               >
//                 <Text style={styles.optionText}>I Am Companion</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setRoleModalVisible(false)} style={styles.button}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           minimumDate={new Date()} // Restrict to today and future dates
//           onConfirm={handleDateChange}
//           onCancel={() => setDatePickerVisibility(false)}
//         />
//       </View>
//     </View>
//   );
// };








// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   TouchableOpacity, 
//   Modal, 
//   Alert 
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import axios from 'axios'; // For making API calls

// const PublishTrip = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [role, setRole] = useState('');
//   const [sourceModalVisible, setSourceModalVisible] = useState(false);
//   const [destinationModalVisible, setDestinationModalVisible] = useState(false);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [roleModalVisible, setRoleModalVisible] = useState(false);
//   const [distance, setDistance] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [userName, setUserName] = useState('');
//   const [userMobileNumber, setUserMobileNumber] = useState('');
//   const [selectedRole, setSelectedRole] = useState('');

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const userEmail = await AsyncStorage.getItem('userEmail');
//         if (userEmail) {
//           const userDoc = await firestore()
//             .collection('users')
//             .where('email', '==', userEmail)
//             .get();
          
//           userDoc.forEach(doc => {
//             setUserName(doc.data().name);
//             setUserMobileNumber(doc.data().mobileNumber);
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching user details: ', error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const calculatePrice = (calculatedDistance) => {
//     let price = 0;
//     if (calculatedDistance >= 0 && calculatedDistance <= 10) {
//       price = 5;
//     } else if (calculatedDistance >= 11 && calculatedDistance <= 15) {
//       price = 7;
//     } else if (calculatedDistance >= 16 && calculatedDistance <= 20) {
//       price = 9;
//     } else if (calculatedDistance >= 21 && calculatedDistance <= 25) {
//       price = 12;
//     } else if (calculatedDistance >= 26 && calculatedDistance <= 30) {
//       price = 15;
//     } else if (calculatedDistance >= 31 && calculatedDistance <= 40) {
//       price = 18;
//     } else if (calculatedDistance >= 41 && calculatedDistance <= 50) {
//       price = 21;
//     } else if (calculatedDistance >= 51 && calculatedDistance <= 100) {
//       price = 30;
//     } else if (calculatedDistance >= 101 && calculatedDistance <= 200) {
//       price = 42;
//     } else if (calculatedDistance >= 201 && calculatedDistance <= 300) {
//       price = 47;
//     } else if (calculatedDistance >= 301 && calculatedDistance <= 400) {
//       price = 57;
//     } else if (calculatedDistance >= 401 && calculatedDistance <= 500) {
//       price = 70;
//     } else if (calculatedDistance >= 501 && calculatedDistance <= 600) {
//       price = 80;
//     } else if (calculatedDistance >= 601 && calculatedDistance <= 700) {
//       price = 91;
//     } else if (calculatedDistance >= 701 && calculatedDistance <= 800) {
//       price = 105;
//     } else if (calculatedDistance >= 801 && calculatedDistance <= 900) {
//       price = 122;
//     } else if (calculatedDistance >= 901 && calculatedDistance <= 1000) {
//       price = 137;
//     } else if (calculatedDistance >= 1001 && calculatedDistance <= 1100) {
//       price = 149;
//     } else if (calculatedDistance >= 1101 && calculatedDistance <= 1200) {
//       price = 195;
//     } else if (calculatedDistance >= 1201 && calculatedDistance <= 1700) {
//       price = 240;
//     } else if (calculatedDistance >= 1701 && calculatedDistance <= 2400) {
//       price = 310;
//     } else {
//       price = calculatedDistance * 0.75; // For distances outside the defined ranges
//     }
//     return price;
//   };

//   const handlePublish = async () => {
//     try {
//       // Fetch user email from AsyncStorage
//       const userEmail = await AsyncStorage.getItem('userEmail');
//       if (!userEmail) {
//         throw new Error('User email not found.');
//       }
  
//       // Fetch coordinates for source and destination using Google Maps Geocoding API
//       const sourceResponse = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`,
//       );
//       const sourceData = await sourceResponse.json();
//       if (sourceData.status !== 'OK') {
//         throw new Error(
//           `Failed to geocode source address: ${sourceData.error_message}`,
//         );
//       }
//       const sourceCoords = sourceData.results[0]?.geometry?.location;
  
//       const destinationResponse = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY`,
//       );
//       const destinationData = await destinationResponse.json();
//       if (destinationData.status !== 'OK') {
//         throw new Error(
//           `Failed to geocode destination address: ${destinationData.error_message}`,
//         );
//       }
//       const destinationCoords = destinationData.results[0]?.geometry?.location;
  
//       if (!sourceCoords || !destinationCoords) {
//         throw new Error(
//           'Failed to fetch coordinates for source or destination address.',
//         );
//       }
  
//       // Calculate distance
//       const calculatedDistance = calculateDistance(
//         sourceCoords,
//         destinationCoords,
//       );
  
//       // Determine price based on distance ranges
//       const tripPrice = calculatePrice(calculatedDistance);
  
//       // Save trip details to Firestore with price and mobile number based on selected role
//       if (selectedRole === 'driver') {
//         await firestore()
//           .collection('Drivers')
//           .add({
//             email: userEmail,
//             mobileNumber: userMobileNumber,
//             name: userName,
//             source,
//             destination,
//             date: formatDate(date),
//             role: selectedRole,
//             distance: `${calculatedDistance} KM`,
//             price: `$${tripPrice}`,
//           });
//       } else if (selectedRole === 'companion') {
//         await firestore()
//           .collection('Riders')
//           .add({
//             email: userEmail,
//             mobileNumber: userMobileNumber,
//             name: userName,
//             source,
//             destination,
//             date: formatDate(date),
//             role: selectedRole,
//             distance: `${calculatedDistance} KM`,
//             price: `$${tripPrice}`,
//           });
//       } else {
//         throw new Error('Selected role is not valid.');
//       }
  
//       // Show success alert
//       Alert.alert(
//         'Success',
//         'Your ride is successfully posted! Someone will connect with you soon. Explore other rides!',
//         [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
//         { cancelable: false }
//       );
  
//       // Close modal
//       setSource('');
//       setDestination('');
//       setDate(new Date());
//       setSelectedRole('');
//       setDistance(null);
//       setPrice(0);
//     } catch (error) {
//       console.error('Error saving trip to Firestore:', error);
//       Alert.alert('Error', 'Failed to save trip. Please try again.');
//     }
//   };

//   const calculateDistance = (sourceCoords, destinationCoords) => {
//     const toRadians = degrees => (degrees * Math.PI) / 180;
//     const earthRadiusKm = 6371;
//     const dLat = toRadians(destinationCoords.lat - sourceCoords.lat);
//     const dLon = toRadians(destinationCoords.lng - sourceCoords.lng);
//     const lat1 = toRadians(sourceCoords.lat);
//     const lat2 = toRadians(destinationCoords.lat);

//     const a = 
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return earthRadiusKm * c;
//   };

//   const handleDateConfirm = (selectedDate) => {
//     setDate(selectedDate);
//     setDatePickerVisibility(false);
//   };
//     const handleDateChange = (selectedDate) => {
//       if (selectedDate >= new Date()) {
//         setDate(selectedDate);
//       }
//       setDatePickerVisibility(false);
//     };
  
//   const handleRoleSelect = (selectedRole) => {
//     setSelectedRole(selectedRole);
//     setRoleModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.featureContainer}>
//         <Text style={styles.title}>Publish Trip</Text>

//         <Text style={styles.title2}>Source:</Text>
//         <TouchableOpacity onPress={() => setSourceModalVisible(true)} style={styles.inputContainer}>
//           <Text style={styles.input}>{source || 'Select Source'}</Text>
//         </TouchableOpacity>

//         <Text style={styles.title2}>Destination:</Text>
//         <TouchableOpacity onPress={() => setDestinationModalVisible(true)} style={styles.inputContainer}>
//           <Text style={styles.input}>{destination || 'Select Destination'}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.inputContainer}>
//           <Text style={styles.label}>Date:</Text>
//           <Text style={styles.input}>{formatDate(date)}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => setRoleModalVisible(true)} style={styles.inputContainer}>
//           <Text style={styles.label}>I Am:</Text>
//           <Text style={styles.input}>{role || 'Select Role'}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handlePublish} style={styles.publishButton}>
//           <Text style={styles.buttonText}>Publish</Text>
//         </TouchableOpacity>

//         {distance !== null && (
//           <View style={styles.distanceContainer}>
//             <Text style={styles.distanceText}>Distance: {distance.toFixed(2)} km</Text>
//             <Text style={styles.distanceText}>Price: ${price.toFixed(2)}</Text>
//           </View>
//         )}

//         {/* Source Modal */}
//         <Modal
//           transparent={true}
//           visible={sourceModalVisible}
//           animationType="slide"
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter Source"
//                 onPress={(data, details = null) => {
//                   setSource(data.description);
//                   setSourceModalVisible(false);
//                 }}
//                 query={{
//                   key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: styles.modalInput,
//                   container: { marginBottom: 16 },
//                   description: {
//                     fontFamily: 'Calibri',
//                     color: 'black',
//                     fontSize: 12,
//                   },
//                   listView: {
//                     padding: 20,
//                     borderRadius: 50,
//                     position: 'absolute',
//                     marginTop: 84,
//                     backgroundColor: 'white',
//                     borderBottomEndRadius: 15,
//                   },
//                 }}
//               />
//               <TouchableOpacity onPress={() => setSourceModalVisible(false)} style={styles.closeButton}>
//                 <Text style={styles.closeButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Destination Modal */}
//         <Modal
//           transparent={true}
//           visible={destinationModalVisible}
//           animationType="slide"
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter Destination"
//                 onPress={(data, details = null) => {
//                   setDestination(data.description);
//                   setDestinationModalVisible(false);
//                 }}
//                 query={{
//                   key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: styles.modalInput,
//                   container: { marginBottom: 16 },
//                   description: {
//                     fontFamily: 'Calibri',
//                     color: 'black',
//                     fontSize: 12,
//                   },
//                   listView: {
//                     padding: 20,
//                     borderRadius: 50,
//                     position: 'absolute',
//                     marginTop: 84,
//                     backgroundColor: 'white',
//                     borderBottomEndRadius: 15,
//                   },
//                 }}
//               />
//               <TouchableOpacity onPress={() => setDestinationModalVisible(false)} style={styles.closeButton}>
//                 <Text style={styles.closeButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Date Picker Modal */}
//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           date={date}
//           onConfirm={handleDateChange}
//           onCancel={() => setDatePickerVisibility(false)}
//         />

//         {/* Role Selection Modal */}
//         <Modal
//           transparent={true}
//           visible={roleModalVisible}
//           animationType="slide"
//         >
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <TouchableOpacity
//                 style={[styles.optionButton, role === 'driver' && styles.selectedOption]}
//                 onPress={() => handleRoleSelect('driver')}
//               >
//                 <Text style={styles.optionText}>I Am Driver</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.optionButton, role === 'companion' && styles.selectedOption]}
//                 onPress={() => handleRoleSelect('companion')}
//               >
//                 <Text style={styles.optionText}>I Am Companion</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setRoleModalVisible(false)} style={styles.button}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   featureContainer: {
//     marginTop: '40%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 3,
//     marginBottom: 20,
//     padding: 15,
//     width: '100%',
//     maxWidth: 350,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#391f99',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   title2: {
//     fontSize: 18,
//     color: '#391f99',
//     marginBottom: 8,
//   },
//   inputContainer: {
//     marginBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingBottom: 8,
//   },
//   label: {
//     fontSize: 16,
//     color: '#000',
//   },
//   input: {
//     fontSize: 16,
//     color: '#666',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: '100%',
//     marginTop: '50%',
//     height: '100%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 16,
//     elevation: 5,
//   },
//   modalInput: {
//     borderColor: '#391f99',
//     textAlign: 'center',
//     marginTop: '10%',
//     height: 50,

//     borderWidth: 2,
//     borderRadius: 50,
//     paddingHorizontal: 8,
//   },
//   button: {
//     backgroundColor: '#391f99',
//     padding: 10,
//     borderRadius: 50,
//     marginTop: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom:90,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   optionButton: {
    
//     backgroundColor: '#e0e0e0',
//     padding: 10,
//     borderRadius: 50,
//     marginBottom: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   selectedOption: {
    
//     backgroundColor: '#391f99',
//   },
//   optionText: {
//     color: '#000',
//     fontSize: 16,
//   },
//   publishButton: {
//     backgroundColor: '#391f99',
//     padding: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   distanceContainer: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   distanceText: {
//     fontSize: 16,
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
// });

// export default PublishTrip;

















import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Modal, 
  Alert 
} from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import firestore from '@react-native-firebase/firestore'; // Import Firestore
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import axios from 'axios'; // For making API calls
import { Picker } from '@react-native-picker/picker';
const PublishTrip = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [role, setRole] = useState('');
  const [sourceModalVisible, setSourceModalVisible] = useState(false);
  const [destinationModalVisible, setDestinationModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(0);
  const [userName, setUserName] = useState('');
  const [userMobileNumber, setUserMobileNumber] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [Role, ] = useState('');

  const today = new Date();
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        if (userEmail) {
          const userDoc = await firestore()
            .collection('users')
            .where('email', '==', userEmail)
            .get();
          
          userDoc.forEach(doc => {
            setUserName(doc.data().name);
            setUserMobileNumber(doc.data().mobileNumber);
          });
        }
      } catch (error) {
        console.error('Error fetching user details: ', error);
      }
    };

    fetchUserDetails();
  }, []);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const calculatePrice = (calculatedDistance) => {
    const roundedDistance = Math.ceil(calculatedDistance);
    let price = 0;
    if (calculatedDistance >= 0 && calculatedDistance <= 10) {
      price = 5;
    } else if (calculatedDistance >= 11 && calculatedDistance <= 15) {
      price = 7;
    } else if (calculatedDistance >= 16 && calculatedDistance <= 20) {
      price = 9;
    } else if (calculatedDistance >= 21 && calculatedDistance <= 25) {
      price = 12;
    } else if (calculatedDistance >= 26 && calculatedDistance <= 30) {
      price = 15;
    } else if (calculatedDistance >= 31 && calculatedDistance <= 40) {
      price = 18;
    } else if (calculatedDistance >= 41 && calculatedDistance <= 50) {
      price = 21;
    } else if (calculatedDistance >= 51 && calculatedDistance <= 100) {
      price = 30;
    } else if (calculatedDistance >= 101 && calculatedDistance <= 200) {
      price = 42;
    } else if (calculatedDistance >= 201 && calculatedDistance <= 300) {
      price = 47;
    } else if (calculatedDistance >= 301 && calculatedDistance <= 400) {
      price = 57;
    } else if (calculatedDistance >= 401 && calculatedDistance <= 500) {
      price = 70;
    } else if (calculatedDistance >= 501 && calculatedDistance <= 600) {
      price = 80;
    } else if (calculatedDistance >= 601 && calculatedDistance <= 700) {
      price = 91;
    } else if (calculatedDistance >= 701 && calculatedDistance <= 800) {
      price = 105;
    } else if (calculatedDistance >= 801 && calculatedDistance <= 900) {
      price = 122;
    } else if (calculatedDistance >= 901 && calculatedDistance <= 1000) {
      price = 137;
    } else if (calculatedDistance >= 1001 && calculatedDistance <= 1100) {
      price = 149;
    } else if (calculatedDistance >= 1101 && calculatedDistance <= 1200) {
      price = 195;
    } else if (calculatedDistance >= 1201 && calculatedDistance <= 1700) {
      price = 240;
    } else if (calculatedDistance >= 1701 && calculatedDistance <= 2400) {
      price = 310;
    } else {
      price = calculatedDistance * 0.75; // For distances outside the defined ranges
    }
    return price;
  };

  const handlePublish = async () => {
    try {
      // Fetch user email from AsyncStorage
      const userEmail = await AsyncStorage.getItem('userEmail');
      if (!userEmail) {
        throw new Error('User email not found.');
      }
  
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
  
      // Calculate distance
      const calculatedDistance = calculateDistance(
        sourceCoords,
        destinationCoords,
      );
      const roundedDistance = Math.ceil(calculatedDistance);
      // Determine price based on distance ranges
      const tripPrice = calculatePrice(calculatedDistance);
  
      // Save trip details to Firestore with price and mobile number based on selected role
      if (selectedRole === 'driver') {
        await firestore()
          .collection('Drivers')
          .add({
            email: userEmail,
            mobileNumber: userMobileNumber,
            name: userName,
            source,
            destination,
            date: formatDate(date),
            role: selectedRole,
            distance: `${calculatedDistance} KM`,
            price: `$${tripPrice}`,
          });
      } else if (selectedRole === 'companion') {
        await firestore()
          .collection('Riders')
          .add({
            email: userEmail,
            mobileNumber: userMobileNumber,
            name: userName,
            source,
            destination,
            date: formatDate(date),
            role: selectedRole,
            distance: `${calculatedDistance} KM`,
            price: `$${tripPrice}`,
          });
      } else {
        throw new Error('Selected role is not valid.');
      }
  
      // Show success alert
      Alert.alert(
        'Success',
        'Your ride is successfully posted! Someone will connect with you soon. Explore other rides!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
  
      // Close modal
      setSource('');
      setDestination('');
      setDate(new Date());
      setSelectedRole('');
      setDistance(null);
      setPrice(0);
    } catch (error) {
      console.error('Error saving trip to Firestore:', error);
      Alert.alert('Error', 'Failed to save trip. Please try again.');
    }
  };

  const calculateDistance = (sourceCoords, destinationCoords) => {
    const toRadians = degrees => (degrees * Math.PI) / 180;
    const earthRadiusKm = 6371;
    const dLat = toRadians(destinationCoords.lat - sourceCoords.lat);
    const dLon = toRadians(destinationCoords.lng - sourceCoords.lng);
    const lat1 = toRadians(sourceCoords.lat);
    const lat2 = toRadians(destinationCoords.lat);

    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
  };

  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate);
    setDatePickerVisibility(false);
  };
    const handleDateChange = (selectedDate) => {
      if (selectedDate >= new Date()) {
        setDate(selectedDate);
      }
      setDatePickerVisibility(false);
    };
  
  const handleRoleSelect = (selectedRole) => {
    setSelectedRole(selectedRole);
    setRoleModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.featureContainer}>
        <Text style={styles.title}>Publish Trip</Text>

        <Text style={styles.title2}>Source:</Text>
        <TouchableOpacity onPress={() => setSourceModalVisible(true)} style={styles.inputContainer}>
          <Text style={styles.input}>{source || 'Select Source'}</Text>
        </TouchableOpacity>

        <Text style={styles.title2}>Destination:</Text>
        <TouchableOpacity onPress={() => setDestinationModalVisible(true)} style={styles.inputContainer}>
          <Text style={styles.input}>{destination || 'Select Destination'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.inputContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.input}>{formatDate(date)}</Text>
        </TouchableOpacity>

        <Picker
  selectedValue={selectedRole}
  style={styles.picker}
  onValueChange={(itemValue) => setSelectedRole(itemValue)}
>
  <Picker.Item label="Select Role" value="" />
  <Picker.Item label="I Am Driver" value="driver" />
  <Picker.Item label="I Am Companion" value="companion" />
</Picker>


        <TouchableOpacity onPress={handlePublish} style={styles.publishButton}>
          <Text style={styles.buttonText}>Publish</Text>
        </TouchableOpacity>

        {distance !== null && (
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceText}>Distance: {distance.toFixed(2)} km</Text>
            <Text style={styles.distanceText}>Price: ${price.toFixed(2)}</Text>
          </View>
        )}

        {/* Source Modal */}
        <Modal
          transparent={true}
          visible={sourceModalVisible}
          animationType="slide"
          onRequestClose={() => setSourceModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <GooglePlacesAutocomplete
                placeholder="Enter Source"
                onPress={(data, details = null) => {
                  setSource(data.description);
                  setSourceModalVisible(false);
                }}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.modalInput,
                  container: { marginBottom: 16 },
                  description: {
                    fontFamily: 'Calibri',
                    color: 'black',
                    fontSize: 12,
                  },
                  listView: {
                
                    padding: 20,
                    // borderWidth:2,
                    borderRadius: 10,
                    position: 'absolute',
                    marginTop: 84,
                    backgroundColor: 'white',
                    borderBottomEndRadius: 15,
                  },
                }}
              />
           
            </View>
          </View>
        </Modal>

        {/* Destination Modal */}
        <Modal
          transparent={true}
          visible={destinationModalVisible}
          animationType="slide"
          onRequestClose={() => setDestinationModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <GooglePlacesAutocomplete
                placeholder="Enter Destination"
                onPress={(data, details = null) => {
                  setDestination(data.description);
                  setDestinationModalVisible(false);
                }}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.modalInput,
                  container: { marginBottom: 16 },
                  description: {
                    fontFamily: 'Calibri',
                    color: 'black',
                    fontSize: 12,
                  },
                  listView: {
                    padding: 20,
                    borderRadius: 50,
                    position: 'absolute',
                    marginTop: 84,
                    backgroundColor: 'white',
                    borderBottomEndRadius: 15,
                  },
                }}
              />
              
            </View>
          </View>
        </Modal>

        {/* Date Picker Modal */}
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={today} // Set the minimum date to today
        onConfirm={(date) => {
          setDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />

        {/* Role Selection Modal */}
        {/* <Modal
          transparent={true}
          visible={roleModalVisible}
          animationType="slide"
          onRequestClose={() => setRoleModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={[styles.optionButton, role === 'driver' && styles.selectedOption]}
                onPress={() => handleRoleSelect('driver')}
              >
                <Text style={styles.optionText}>I Am Driver</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, role === 'companion' && styles.selectedOption]}
                onPress={() => handleRoleSelect('companion')}
              >
                <Text style={styles.optionText}>I Am Companion</Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </Modal> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featureContainer: {
    marginTop: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    padding: 15,
    width: '100%',
    maxWidth: 350,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#391f99',
    marginBottom: 16,
    textAlign: 'center',
  },
  title2: {
    fontSize: 18,
    color: '#391f99',
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    fontSize: 16,
    color: '#666',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    marginTop: '190%',
    height: '180%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    elevation: 5,
  },
  modalInput: {
    borderColor: '#391f99',
   
    marginTop: '10%',
    height: 50,

    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#391f99',
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom:90,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  optionButton: {
    
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  selectedOption: {
    
    backgroundColor: '#391f99',
  },
  optionText: {
    color: '#000',
    fontSize: 16,
  },
  publishButton: {
    backgroundColor: '#391f99',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  distanceContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  distanceText: {
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default PublishTrip;
