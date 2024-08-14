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
const {width, height} = Dimensions.get('window');

const Postlookrides = () => {
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

      <View
        style={[
          styles.container,
          {width, height, backgroundColor: '#00000000'},
        ]}>
        <View style={styles.searchBar}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearchPress}>
              <Text style={styles.searchText}>Search your ride</Text>
            </TouchableOpacity>
          )}
        </View>

        <View>
          <View>
            <Text style={styles.small}>
              Find Your Personalized Destination{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('allrides')}>
              <Image
                source={require('../components/assets/resize.png')}
                style={styles.full}
              />
            </TouchableOpacity>
          </View>
        </View>

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

        {/* <ScrollView style={styles.scrollView}> */}
          <TripList data={driverData} />
          <TripList data={riderData} />
        {/* </ScrollView> */}
      </View>
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
    width: 180, // Adjust the size as needed
    height: 180, // Adjust the size as needed
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
    left: 1, // Align to the right side
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

export default Postlookrides;
