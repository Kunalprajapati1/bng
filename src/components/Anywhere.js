// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { Calendar } from 'react-native-calendars';

// const Anywhere = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSearch = () => {
//     // Handle search functionality
//   };

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <Text style={styles.title}>Anywhere</Text>
      
//       {/* Source Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Source:</Text>
//         <GooglePlacesAutocomplete
//           placeholder="Enter source"
//           placeholderTextColor="#757575"
//           onPress={(data, details = null) => {
//             if (data && data.description) {
//               setSource(data.description);
//             }
//           }}
//           query={{
//             key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//             // Replace with your API key
//             language: 'en',
//           }}
//           fetchDetails={true}
//           styles={{
//             textInput: [styles.input],
//             description: styles.description,
//             listView: styles.listView,
//           }}
//         />
//       </View>

//       {/* Destination Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Destination:</Text>
//         <GooglePlacesAutocomplete
//           placeholder="Enter Destination"
//           placeholderTextColor="#757575"
//           onPress={(data, details = null) => {
//             if (data && data.description) {
//               setDestination(data.description);
//             }
//           }}
//           query={{
//             key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
//             // Replace with your API key
//             language: 'en',
//           }}
//           fetchDetails={true}
//           styles={{
//             textInput: [styles.input],
//             description: styles.description,
//             listView: styles.listView,
//           }}
//         />
//       </View>

//       {/* Calendar */}
//       <Text style={[styles.label, { marginTop: 20 }]}>Select Date:</Text>
//       <Calendar
//         // Add required props
//         style={styles.calendar}
//       />

//       {/* Options */}
//       <View style={styles.optionContainer}>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedOption === "driving" && styles.selectedOption]}
//           onPress={() => handleOptionSelect("driving")}
//         >
//           <Text style={styles.optionText}>I am driving</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedOption === "riding" && styles.selectedOption]}
//           onPress={() => handleOptionSelect("riding")}
//         >
//           <Text style={styles.optionText}>I am riding</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Search Button */}
//       <TouchableOpacity style={[styles.touchableButton, styles.searchButton]} onPress={handleSearch}>
//         <Text style={styles.buttonText}>Search</Text>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     backgroundColor: '#f5f5f5', // Material design background color
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
   
//     color: '#424242',
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 5,
//     marginTop:30,
//     color: '#424242',
//   },
//   inputContainer: {
//     marginBottom: 40,
//   },
//   input: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 5,
//     fontSize: 16,
//     color: '#424242',
//   },
//   description: {
//     fontFamily: 'Roboto',
//     color: '#757575',
//     fontSize: 14,
//   },
//   listView: {
//     position: 'absolute',
//     marginTop: 44,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     elevation: 3,
//     zIndex: 5,
//   },
//   calendar: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   optionButton: {
//     backgroundColor: '#64b5f6',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   selectedOption: {
//     backgroundColor: '#42a5f5',
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   touchableButton: {
//     paddingVertical: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     backgroundColor: '#42a5f5',
//   },
//   searchButton: {
//     backgroundColor: '#42a5f5',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Anywhere;




// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Modal, Alert } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { Calendar } from 'react-native-calendars';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Anywhere = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };


// const handleSearch = async () => {
//     try {
//         const userEmail = await AsyncStorage.getItem('userEmail');

//         // Ensure userEmail is not null or undefined
//         if (!userEmail) {
//           throw new Error("User email not found in AsyncStorage");
//         }
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
//             email: userEmail,
//           source,
//           destination,
//           selectedDate,
//           option: selectedOption,
//           distance: `${calculatedDistance} KM`,
//           price: `$ ${price}`,
//         });
//       } else if (selectedOption === "riding") {
//         await firestore().collection('Riders').add({
//             email: userEmail,
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
  
//       setShowModal(false);
  
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
  

//   const onDayPress = (day) => {
//     setSelectedDate(day.dateString);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
//         <Text style={styles.buttonText}>Add</Text>
//       </TouchableOpacity>

//       {/* Modal */}
//       <Modal
//         visible={showModal}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setShowModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <KeyboardAvoidingView style={styles.modalContent} behavior="padding">
//             <Text style={styles.title}>Anywhere</Text>
            
//             {/* Source Input */}
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Source:</Text>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter source"
//                 placeholderTextColor="#757575"
//                 onPress={(data, details = null) => {
//                   if (data && data.description) {
//                     setSource(data.description);
//                   }
//                 }}
//                 query={{
//                     key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',

//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: [styles.input],
//                   description: styles.description,
//                   listView: styles.listView,
//                 }}
//               />
//             </View>

//             {/* Destination Input */}
//             <View style={styles.inputContainer}>
//               <Text style={styles.label2}>Destination:</Text>
//               <GooglePlacesAutocomplete
//                 placeholder="Enter Destination"
//                 placeholderTextColor="#757575"
//                 onPress={(data, details = null) => {
//                   if (data && data.description) {
//                     setDestination(data.description);
//                   }
//                 }}
//                 query={{
//                     key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',

//                   language: 'en',
//                 }}
//                 fetchDetails={true}
//                 styles={{
//                   textInput: [styles.input],
//                   description: styles.description,
//                   listView: styles.listView,
//                 }}
//               />
//             </View>

//             {/* Calendar */}
//             <Text style={[styles.label, { marginTop: 80 }]}>Select Date:</Text>
//             <Calendar
//               onDayPress={onDayPress}
//               minDate={new Date().toISOString().split('T')[0]} // Restrict selection before current date
//               markedDates={{
//                 [selectedDate]: { selected: true, marked: true, dotColor: 'red' }, // Highlight selected date with a circle
//               }}
//               style={styles.calendar}
//             />

//             {/* Options */}
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

//             {/* Search Button */}
//             <TouchableOpacity style={[styles.touchableButton, styles.searchButton]} onPress={handleSearch}>
//               <Text style={styles.buttonText}>Search</Text>
//             </TouchableOpacity>
//           </KeyboardAvoidingView>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   addButton: {
//     paddingVertical: 15,
//     alignItems: 'center',
//     backgroundColor: '#42a5f5',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     marginTop: 50,
//     width: '90%',
//     height: '100%',
//     backgroundColor: '#FFFFFF',
//     padding: 30,
//     borderRadius: 20,
//     elevation: 5,
//   },
//   input: {
//     height: 50,
//     borderColor: '#cf0000',
//     color: 'black',
//     borderWidth: 1,
//     // marginBottom: 10,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   calendar: {
//     marginTop: 70,
//     // alignItems: 'center',
//     bottom: 70,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   description: {
//     fontFamily: 'Roboto',
//     color: '#757575',
//     fontSize: 14,
//   },
//   listView: {
//     position: 'absolute',
//     marginTop: 44,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     elevation: 3,
//     zIndex: 5,
//   },
//   optionButton: {
//     bottom: 70,
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
//     bottom: 70,
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
//   label: {
//     fontSize: 18,
//     marginBottom: 5,
//     marginTop: 30,
//     color: '#424242',
//   },
//   label2: {
//     fontSize: 18,
//     marginBottom: 5,
//     marginTop: 60,
//     color: '#424242',
//   },
// });

// export default Anywhere;





import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Modal, Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Calendar } from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker, Polyline } from 'react-native-maps';

const Anywhere = () => {
 const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [sourceCoords, setSourceCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


const handleSearch = async () => {
    try {
        const userEmail = await AsyncStorage.getItem('userEmail');

        // Ensure userEmail is not null or undefined
        if (!userEmail) {
          throw new Error("User email not found in AsyncStorage");
        }
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
  
      // Calculate distance between source and destination coordinates
      let calculatedDistance = calculateDistance(sourceCoords, destinationCoords);
  
      // calculatedDistance = Math.round(calculatedDistance);
      // calculatedDistance = Math.ceil(calculatedDistance);
  
      // Calculate price based on distance ($10 per km)
      const price = (calculatedDistance * 10).toFixed(2); // Price in dollars, rounded to 2 decimal places
  
      // Save trip details to Firestore with price
      if (selectedOption === "driving") {
        await firestore().collection('Drivers').add({
            email: userEmail,
          source,
          destination,
          selectedDate,
          option: selectedOption,
          distance: `${calculatedDistance} KM`,
          price: `$ ${price}`,
        });
      } else if (selectedOption === "riding") {
        await firestore().collection('Riders').add({
            email: userEmail,
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
  
      setShowModal(false);
  
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
  

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView style={styles.modalContent} behavior="padding">
            <Text style={styles.title}>Anywhere</Text>
            {/* Source Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Source:</Text>
              <GooglePlacesAutocomplete
                placeholder="Enter source"
                placeholderTextColor="#757575"
                onPress={(data, details = null) => {
                  if (data && data.description) {
                    setSource(data.description);
                  }
                }}
                query={{
                    key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',

                    language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: [styles.input],
                  description: styles.description,
                  listView: styles.listView,
                }}
              />
            </View>
            {/* Destination Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label2}>Destination:</Text>
              <GooglePlacesAutocomplete
                placeholder="Enter Destination"
                placeholderTextColor="#757575"
                onPress={(data, details = null) => {
                  if (data && data.description) {
                    setDestination(data.description);
                  }
                }}
                query={{
                    key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',

                    language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: [styles.input],
                  description: styles.description,
                  listView: styles.listView,
                }}
              />
            </View>
            {/* Calendar */}
            <Text style={[styles.label, { marginTop: 80 }]}>Select Date:</Text>
            <Calendar
              onDayPress={onDayPress}
              minDate={new Date().toISOString().split('T')[0]}
              markedDates={{
                [selectedDate]: { selected: true, marked: true, dotColor: 'red' },
              }}
              style={styles.calendar}
            />
            {/* Options */}
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
            {/* Search Button */}
            <TouchableOpacity style={[styles.touchableButton, styles.searchButton]} onPress={handleSearch}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </Modal>

      {sourceCoords && destinationCoords && (
        <View style={{ flex: 1 }}>
          <Text>Source: {source}</Text>
          <Text>Destination: {destination}</Text>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: sourceCoords.latitude,
              longitude: sourceCoords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={sourceCoords} title="Source" />
            <Marker coordinate={destinationCoords} title="Destination" />
            <Polyline
              coordinates={[sourceCoords, destinationCoords]}
              strokeColor="#FF0000"
              strokeWidth={3}
            />
          </MapView>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  addButton: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#42a5f5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop: 50,
    width: '90%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 20,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#cf0000',
    color: 'black',
    borderWidth: 1,
    // marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  calendar: {
    marginTop: 70,
    // alignItems: 'center',
    bottom: 70,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  description: {
    fontFamily: 'Roboto',
    color: '#757575',
    fontSize: 14,
  },
  listView: {
    position: 'absolute',
    marginTop: 44,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    zIndex: 5,
  },
  optionButton: {
    bottom: 70,
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
    bottom: 70,
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
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 30,
    color: '#424242',
  },
  label2: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 60,
    color: '#424242',
  },
});

export default Anywhere;



























