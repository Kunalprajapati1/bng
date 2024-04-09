


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity,KeyboardAvoidingView, ImageBackground, Text, Modal, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
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
  const [myTrips, setMyTrips] = useState([]);

  
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
      // Clear user token from AsyncStorage
      await AsyncStorage.removeItem('userToken');
      
      // Navigate to the login screen
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

        navigation.navigate('Trips', { userTrips: allTripsData }); // Navigate to Trips screen and pass user trips as parameter
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
              <TouchableOpacity style={styles.menuItem} onPress={handleMyTrips}>
                <Text style={styles.menuItemText}>My Trips</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
                <Text style={styles.menuItemText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleContact}>
                <Text style={styles.menuItemText}>Contact Us</Text>
              </TouchableOpacity>
          
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Safety")}>
                <Text style={styles.menuItemText}>Safety</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
                <Text style={styles.menuItemText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
                <Text style={styles.menuItemText}>Terms Of Use</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Privacy Policy")}>
                <Text style={styles.menuItemText}>How to ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <Text style={styles.menuItemText}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.searchBar}>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
            <Text style={styles.searchText}>Anywhere {'>'} Anywhere</Text>
          </TouchableOpacity>
        </View>
        
       
<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <ScrollView style={styles.scrollView2}>
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
  </ScrollView>
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
    // marginBottom: 50, // Adjust this value based on your layout
    width: '100%',
  },
  scrollView2: {
    marginTop: 20, // Adjust this value based on your layout
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
    // top:160,
   
    
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  input: {
    height: 50,
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
