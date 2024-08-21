




  
// import { 
//     StyleSheet, 
//     Text, 
//     View, 
//     TouchableOpacity, 
//     Modal, 
//     BackHandler, 
//     FlatList 
//   } from 'react-native';
//   import React, { useState, useEffect } from 'react';
//   import DateTimePickerModal from 'react-native-modal-datetime-picker';
//   import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//   import firestore from '@react-native-firebase/firestore';
  
//   const Search = () => {
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [date, setDate] = useState(new Date());
//     const [sourceModalVisible, setSourceModalVisible] = useState(false);
//     const [destinationModalVisible, setDestinationModalVisible] = useState(false);
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//     const [trips, setTrips] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [connectModalVisible, setConnectModalVisible] = useState(false);
//   const [infoModalVisible, setInfoModalVisible] = useState(false);
  
//     useEffect(() => {
//       const handleBackPress = () => {
//         if (sourceModalVisible || destinationModalVisible) {
//           setSourceModalVisible(false);
//           setDestinationModalVisible(false);
//           return true; // Prevent the default behavior (exit app)
//         }
//         return false;
//       };
  
//       BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  
//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//       };
//     }, [sourceModalVisible, destinationModalVisible]);
  
//     const formatDate = (date) => {
//       const day = String(date.getDate()).padStart(2, '0');
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const year = date.getFullYear();


//       return `${day}/${month}/${year}`;
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
  
//     const extractState = (address) => {
//       const parts = address.split(',');
//       const state = parts.length > 1 ? parts[parts.length - 2].trim() : '';
//       return state.toLowerCase();
//     };
  
//     const searchTrips = async () => {
//       if (!source || !destination) {
//         alert('Please enter both source and destination.');
//         return;
//       }
  
//       setLoading(true);
//       try {
//         const normalizedSourceState = extractState(source);
//         const normalizedDestinationState = extractState(destination);
  
//         const querySnapshot = await firestore().collection('Riders').get();
  
//         if (querySnapshot.empty) {
//           alert('No trips found.');
//           setTrips([]);
//           return;
//         }
  
//         const fetchedTrips = querySnapshot.docs
//           .map(doc => ({ id: doc.id, ...doc.data() }))
//           .filter(trip => {
//             const tripSourceState = extractState(trip.source);
//             const tripDestinationState = extractState(trip.destination);
  
//             return (
//               (tripSourceState === normalizedSourceState && tripDestinationState === normalizedDestinationState) ||
//               (tripSourceState === normalizedDestinationState && tripDestinationState === normalizedSourceState)
//             );
//           });
  
//         if (fetchedTrips.length > 0) {
//           setTrips(fetchedTrips);
//         } else {
//           alert('No matching trips found.');
//           setTrips([]);
//         }
//       } catch (error) {
//         console.error('Error fetching trips: ', error);
//         alert('Error fetching trips. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     const handleInfoPress = () => {
//       setInfoModalVisible(true);
//     };
  
//     const handleConnectPress = () => {
//       setConnectModalVisible(true);
//     };
  
//     const renderTripItem = ({ item }) => (
//       <View style={styles.tripItem}>
//         <Text style={styles.tripText}>Source: {item.source}</Text>
//         <Text style={styles.tripText}>Destination: {item.destination}</Text>
//         <Text style={styles.tripText}>Date: {item.date}</Text>
//         <Text style={styles.tripText}>Number of People: {item.numberOfPeople}</Text>
//         <TouchableOpacity
//         style={styles.connectButton}
//         onPress={handleConnectPress}>
//         <Text style={styles.connectButtonText}>Connect</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.infoButton} onPress={handleInfoPress}>
//         <Text style={styles.infoButtonText}>Info</Text>
//       </TouchableOpacity>
//       </View>
      
//     );
  
//     return (
//       <View style={styles.container}>
//         <View style={styles.featureContainer}>
//           <Text style={styles.title}>Search</Text>
  
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
  
//           <TouchableOpacity onPress={searchTrips} style={styles.searchButton}>
//             <Text style={styles.buttonText}>Search</Text>
//           </TouchableOpacity>
  
//           {/* Source Modal */}
//           <Modal
//             transparent={true}
//             visible={sourceModalVisible}
//             animationType="slide"
//             onRequestClose={() => setSourceModalVisible(false)}
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
//                       padding: 20,
//                       borderRadius: 50,
//                       position: 'absolute',
//                       marginTop: 84,
//                       backgroundColor: 'white',
//                       borderBottomEndRadius: 15,
//                       elevation: 3,
//                     },
//                   }}
//                 />
//               </View>
//             </View>
//           </Modal>
  
//           {/* Destination Modal */}
//           <Modal
//             transparent={true}
//             visible={destinationModalVisible}
//             animationType="slide"
//             onRequestClose={() => setDestinationModalVisible(false)}
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
//                       padding: 20,
//                       borderRadius: 50,
//                       position: 'absolute',
//                       marginTop: 84,
//                       backgroundColor: 'white',
//                       borderBottomEndRadius: 15,
//                       elevation: 3,
//                     },
//                   }}
//                 />
//               </View>
//             </View>
//           </Modal>
  
//           <DateTimePickerModal
//             isVisible={isDatePickerVisible}
//             mode="date"
//             onConfirm={handleDateChange}
//             onCancel={() => setDatePickerVisibility(false)}
//           />
  
//         </View>
  
//         {loading && <Text style={styles.loadingText}>Loading...</Text>}
  
//         <FlatList
//           data={trips}
//           renderItem={renderTripItem}
//           keyExtractor={item => item.id}
//           ListEmptyComponent={
//             !loading && <Text style={styles.noTripsText}>No current people are travelling on this trip.</Text>
//           }
//         />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//       backgroundColor: '#f8f8f8',
//     },
//     featureContainer: {
//       backgroundColor: '#fff',
//       borderRadius: 10,
//       elevation: 3,
//       marginBottom: 20,
//       padding: 10,
//       width: '100%',
//       maxWidth: 350,
//       alignSelf: 'center',
//     },
//     title: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: '#333',
//       marginBottom: 10,
//     },
//     title2: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: '#333',
//       marginVertical: 5,
//     },
//     inputContainer: {
//         backgroundColor: '#f0f0f0',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//     },
//     input: {
//         fontSize: 16,
//         color: '#333',
//     },
//     label: {
//       fontSize: 16,
//       color: '#333',
//     },
//     searchButton: {
//       backgroundColor: '#391f99',
//       borderRadius: 8,
//       padding: 5,
//       alignItems: 'center',
//       marginTop: 20,
//     },
//     buttonText: {
//       color: '#fff',
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//     modalBackground: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContainer: {
//         width: '100%',
//         marginTop: '50%',
//         height: '100%',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         padding: 16,
//         elevation: 5,
//       },
//       modalInput: {
//         borderColor: '#391f99',
//         textAlign: 'center',
//         marginTop: '10%',
//         height: 50,
    
//         borderWidth: 2,
//         borderRadius: 50,
//         paddingHorizontal: 8,
//       },
//     tripItem: {
//       backgroundColor: '#fff',
//       borderRadius: 8,
//       padding: 15,
//       marginVertical: 5,
//       elevation: 2,
//     },
//     tripText: {
//       fontSize: 16,
//       color: '#333',
//     },
//     loadingText: {
//       textAlign: 'center',
//       fontSize: 18,
//       color: '#333',
//     },
//     noTripsText: {
//       textAlign: 'center',
//       fontSize: 18,
//       color: '#333',
//     },
//   });
  
//   export default Search;
  

























  
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Modal, 
  BackHandler, 
  FlatList ,
  Linking,
  ImageBackground
} from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import firestore from '@react-native-firebase/firestore';

const Search = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [sourceModalVisible, setSourceModalVisible] = useState(false);
  const [destinationModalVisible, setDestinationModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [connectModalVisible, setConnectModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    const handleBackPress = () => {
      if (sourceModalVisible || destinationModalVisible) {
        setSourceModalVisible(false);
        setDestinationModalVisible(false);
        return true; // Prevent the default behavior (exit app)
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [sourceModalVisible, destinationModalVisible]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();


    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (selectedDate) => {
    if (selectedDate >= new Date()) {
      setDate(selectedDate);
    }
    setDatePickerVisibility(false);
  };

  const handleSourceSelect = (data) => {
    if (data && data.description) {
      setSource(data.description);
      setSourceModalVisible(false);
    }
  };

  const handleDestinationSelect = (data) => {
    if (data && data.description) {
      setDestination(data.description);
      setDestinationModalVisible(false);
    }
  };

  const extractState = (address) => {
    const parts = address.split(',');
    const state = parts.length > 1 ? parts[parts.length - 2].trim() : '';
    return state.toLowerCase();
  };

  // const searchTrips = async () => {
  //   if (!source || !destination) {
  //     alert('Please enter both source and destination.');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const normalizedSourceState = extractState(source);
  //     const normalizedDestinationState = extractState(destination);

  //     // const querySnapshot = await firestore().collection('Riders').get();

  //     // if (querySnapshot.empty) {
  //     //   alert('No trips found.');
  //     //   setTrips([]);
  //     //   return;
  //     // }

  //     const [ridersSnapshot, driversSnapshot] = await Promise.all([
  //       firestore().collection('Riders').get(),
  //       firestore().collection('Drivers').get(),
  //     ]);

  //     const allTrips = [...ridersSnapshot.docs, ...driversSnapshot.docs];

  //     const fetchedTrips = querySnapshot.docs
  //       .map(doc => ({ id: doc.id, ...doc.data() }))
  //       .filter(trip => {
  //         const tripSourceState = extractState(trip.source);
  //         const tripDestinationState = extractState(trip.destination);

  //       //   return (
  //       //     (tripSourceState === normalizedSourceState && tripDestinationState === normalizedDestinationState) ||
  //       //     (tripSourceState === normalizedDestinationState && tripDestinationState === normalizedSourceState)
  //       //   );
  //       // });
  //       return (
  //         (tripSourceState === normalizedSourceState &&
  //           tripDestinationState === normalizedDestinationState) ||
  //         (tripSourceState === normalizedDestinationState &&
  //           tripDestinationState === normalizedSourceState)
  //       );
  //     });

  //     if (fetchedTrips.length > 0) {
  //       setTrips(fetchedTrips);
  //     } else {
  //       alert('No matching trips found.');
  //       setTrips([]);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching trips: ', error);
  //     alert('Error fetching trips. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const searchTrips = async () => {
    if (!source || !destination) {
        alert('Please enter both source and destination.');
        return;
    }

    setLoading(true);
    try {
        const normalizedSourceState = extractState(source);
        const normalizedDestinationState = extractState(destination);

        // Fetching data from both Riders and Drivers collections
        const ridersSnapshot = await firestore().collection('Riders').get();
        const driversSnapshot = await firestore().collection('Drivers').get();

        // Combine the results from both collections
        const allTrips = [
            ...ridersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
            ...driversSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
        ];

        // Filter trips based on the source and destination states
        const fetchedTrips = allTrips.filter(trip => {
            const tripSourceState = extractState(trip.source);
            const tripDestinationState = extractState(trip.destination);

            return (
                (tripSourceState === normalizedSourceState &&
                tripDestinationState === normalizedDestinationState) ||
                (tripSourceState === normalizedDestinationState &&
                tripDestinationState === normalizedSourceState)
            );
        });

        if (fetchedTrips.length > 0) {
            setTrips(fetchedTrips);
        } else {
            alert('No matching trips found.');
            setTrips([]);
        }
    } catch (error) {
        console.error('Error fetching trips: ', error);
        alert('Error fetching trips. Please try again.');
    } finally {
        setLoading(false);
    }
};
const handleEmailPress = () => {
  if (selectedTrip.email) {
    const subject = `Interested in Trip`;
    const body = `Hi,\n\nI am interested in the following trip:\n\nSource: ${
      selectedTrip.source
    }\nDestination: ${selectedTrip.destination}\nDate: ${
      selectedTrip.selectedDate
    }\nOption: ${selectedTrip.option}\nDistance: ${selectedTrip.distance || 'NA'}\nPrice: ${
      selectedTrip.price
    }\n\nPlease let me know the details.\n\nThanks!`;

    Linking.openURL(
      `mailto:${selectedTrip.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    );
  }
};

const handlePhonePress = () => {
  if (selectedTrip.mobileNumber) {
    Linking.openURL(`tel:${selectedTrip.mobileNumber}`);
  }
};

  const handleInfoPress = (trip) => {
    setSelectedTrip(trip);
    setInfoModalVisible(true);
  };

  const handleConnectPress = (trip) => {
    setSelectedTrip(trip);
    setConnectModalVisible(true);
  };
  const capitalizeFirstLetter = (text) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const renderTripItem = ({ item }) => (
    <View style={styles.tripItem}>
      <Text style={styles.tripText}>Source: {item.source}</Text>
      <Text style={styles.tripText}>Destination: {item.destination}</Text>
      {/* <Text style={styles.tripText}>Date: {item.date}</Text>
      <Text style={styles.tripText}>Number of People: {item.numberOfPeople}</Text> */}
<View style={styles.Low}>
<TouchableOpacity
        style={styles.connectButton}
        onPress={() => handleConnectPress(item)}
      >
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.infoButton} onPress={() => handleInfoPress(item)}>
        <Text style={styles.infoButtonText}>Info</Text>
      </TouchableOpacity>
</View>
    
    </View>
    
  );

  return (
<>
    <ImageBackground
   source={{ uri: 'https://i.pinimg.com/564x/af/6c/18/af6c18d313ead6c7d4597a6e8e45f7fc.jpg' }}
   style={styles.backgroundImage}
   >
    <View style={styles.container}>
      <View style={styles.featureContainer}>
        <Text style={styles.title}>Search</Text>

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

        <TouchableOpacity onPress={searchTrips} style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

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
                onPress={handleSourceSelect}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY', // Replace with your Google API key
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.modalInput,
                  container: { marginBottom: 16 },
                  description: {
                    fontFamily: 'Poppins-SemiBold',
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
                onPress={handleDestinationSelect}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY', // Replace with your Google API key
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.modalInput,
                  container: { marginBottom: 16 },
                  description: {
                    fontFamily: 'Poppins-SemiBold',
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
        <Modal
        transparent={true}
        visible={infoModalVisible}
        animationType="slide"
        onRequestClose={() => setInfoModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedTrip && (
              <>
                {/* <Text style={styles.modalTitle}>Trip Details</Text>
                <Text>Source: {selectedTrip.source}</Text>
                <Text>Destination: {selectedTrip.destination}</Text>
                <Text>Date: {selectedTrip.selectedDate}</Text>
                <Text>Distance: {selectedTrip.distance}</Text>
                <Text>Option: {selectedTrip.option}</Text>
                <Text>Price: {selectedTrip.price}</Text> */}
                <Text style={styles.labelText}>Name:</Text>
            <Text style={styles.modalText3}>{selectedTrip.name || 'Not Mentioned'}</Text>
            {/* <Text style={styles.labelText}>Trip Details:</Text> */}
            <Text style={styles.labelText}>Source: </Text>
            <Text style={styles.modalText}>{selectedTrip.source || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Destination: </Text>
            <Text style={styles.modalText}>{selectedTrip.destination || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Date:</Text>
            <Text style={styles.modalText}>{selectedTrip.selectedDate }{selectedTrip.date }</Text>
            <Text style={styles.labelText}>Option:</Text>
            <Text style={styles.modalText}>{capitalizeFirstLetter(selectedTrip.option)}{capitalizeFirstLetter(selectedTrip.role)}</Text>
            <Text style={styles.labelText}>Distance:</Text>
            <Text style={styles.modalText}>{selectedTrip.distance || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Price: </Text>
            <Text style={styles.modalText}>{selectedTrip.price || 'Not Mentioned'}</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setInfoModalVisible(false)}
                >
                                    <Text style={styles.close}>Close</Text>

                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Connect Modal */}
      <Modal
        transparent={true}
        visible={connectModalVisible}
        animationType="slide"
        onRequestClose={() => setConnectModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedTrip && (
              <>
                <Text style={styles.modalTitle}>Contact Information</Text>
                {/* <Text>Email: {selectedTrip.email}</Text> */}
            <Text style={styles.labelText}>Email:</Text>
            <Text
              style={[
                styles.modalText2,
                selectedTrip.email ? styles.blueText : null,
                // styles.underline,
              ]}
              onPress={handleEmailPress}>
              {selectedTrip.email || 'NA'}
            </Text>

                {/* <Text>Mobile Number: {selectedTrip.mobileNumber}</Text> */}
                <Text style={styles.labelText}>Mobile:</Text>
            <Text
              style={[
                styles.modalText2,
                selectedTrip.mobileNumber ? styles.blueText : null,
                // styles.underline,
              ]}
              onPress={handlePhonePress}>
              {selectedTrip.mobileNumber || 'NA'}
            </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setConnectModalVisible(false)}
                >
                  <Text style={styles.close}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateChange}
          onCancel={() => setDatePickerVisibility(false)}
        />

      </View>

      {loading && <Text style={styles.loadingText}>Loading...</Text>}

      <FlatList
        data={trips}
        renderItem={renderTripItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          !loading && <Text style={styles.noTripsText}>No current people are travelling on this trip.</Text>
        }
      />
    </View></ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    marginTop:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f8f8f8',
  },
  featureContainer: {
    backgroundColor: '#ffffffe9',
    borderRadius: 10,
    elevation: 35,
    marginBottom: 20,
    padding: 15,
    width: '100%',
    maxWidth: 350,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  inputContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  input: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-SemiBold',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#437859',

    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
      width: '100%',
      marginTop: '80%',
      height: '100%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 16,
      elevation: 5,
    },
    modalInput: {
      borderColor: '#437859',
   
    marginTop: '10%',
    height: 50,

    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 8,
    },
  tripItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
  },
  tripText: {
    fontSize: 16,
    color: '#333',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
  noTripsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
  },
  connectButton: {
  
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#2db977',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  connectButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    
  },
  infoButton: {
    position: 'absolute',
    bottom: 10,
    right: 100,
    backgroundColor: '#2db977',

    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  infoButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end', // align modal to the bottom
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomModal: {
    justifyContent: 'flex-end', // align modal content to the bottom
    margin: 0, // avoid default margin
  },
  connectModalContent: {
    height: '30%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  infoModalContent: {
    height: '80%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  labelText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    // marginTop:10,
    // marginBottom: 5,
    // textDecorationLine: 'underline',
  },

  modalText2: {
    fontFamily: 'Poppins-SemiBold',
    height: 45,
    borderRadius: 30,
    // marginTop: 10,
    fontSize: 18,
    // marginBottom: 10,
    textAlign: 'left',
    color: '#000',
  },
  Low:{
marginTop:50,

  },
  modalText: {
    height: 45,
    fontSize: 16,
    // marginBottom: 1,
    color: '#01b25f',
    fontFamily: 'Poppins-SemiBold',
  },
  modalText3: {
    // marginTop: 10,
    height: 45,
    fontSize: 16,
    // alignSelf:'center',
    // marginBottom: 1,
    color: '#01b25f',
    // textDecorationLine: 'underline',
    fontFamily: 'Poppins-SemiBold',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  blueText: {
    color: '#2db977',
  },
  close: {
    color: '#ffffff',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  closeButton: {
    // marginTop: 70,
    backgroundColor: '#2db977',
    borderRadius: 10,
    height: 40,
  },

  closeButton2: {
    // marginTop: 20,

    backgroundColor: '#2db977',
    borderRadius: 10,
    height: 40,
  },
});

export default Search;
