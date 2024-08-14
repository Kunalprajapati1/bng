import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Alert,
  BackHandler,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TripList from './TripList';
import {Picker} from '@react-native-picker/picker';

const AllRides = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [driverData, setDriverData] = useState([]);
  const [riderData, setRiderData] = useState([]);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [dateFilter, setDateFilter] = useState('asc');
  const [distanceFilter, setDistanceFilter] = useState('all');
  const [rideTypeFilter, setRideTypeFilter] = useState('all');
  const [filterVisible, setFilterVisible] = useState(false); // State for filter visibility
  const [searchQuery, setSearchQuery] = useState(''); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const driversSnapshot = await firestore().collection('Drivers').get();
        const driversData = driversSnapshot.docs.map(doc => doc.data());
        setDriverData(driversData);

        const ridersSnapshot = await firestore().collection('Riders').get();
        const ridersData = ridersSnapshot.docs.map(doc => doc.data());
        setRiderData(ridersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (!modalVisible) {
      fetchData();
    }
  }, [modalVisible]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('TabNavigator');
        return true;
      },
    );

    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    const getUserName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userEmail');
        if (storedName) {
          setUserName(storedName);
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    getUserName();
  }, []);

  const handleCloseModal = async () => {
    try {
      const sourceResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${source}&key=YOUR_API_KEY`,
      );
      const sourceData = await sourceResponse.json();
      if (sourceData.status !== 'OK') throw new Error(sourceData.error_message);
      const sourceCoords = sourceData.results[0]?.geometry?.location;

      const destinationResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=YOUR_API_KEY`,
      );
      const destinationData = await destinationResponse.json();
      if (destinationData.status !== 'OK')
        throw new Error(destinationData.error_message);
      const destinationCoords = destinationData.results[0]?.geometry?.location;

      if (!sourceCoords || !destinationCoords)
        throw new Error('Failed to fetch coordinates.');

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

      const calculatedDistance = Math.ceil(
        calculateDistance(sourceCoords, destinationCoords),
      );
      let price = calculatePrice(calculatedDistance);

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

      Alert.alert(
        'Success',
        'Your ride is successfully posted! Someone will connect with you soon. Explore other rides!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
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
      Math.sin(dLat / 2) ** 2 +
      Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (earthRadiusKm * c).toFixed(2);
  };

  const calculatePrice = distance => {
    if (distance >= 50 && distance <= 100) return 34;
    if (distance > 101 && distance <= 200) return 40;
    if (distance > 201 && distance <= 300) return 45;
    if (distance > 301 && distance <= 400) return 57;
    if (distance > 401 && distance <= 500) return 70;
    if (distance > 501 && distance <= 600) return 80;
    if (distance > 601 && distance <= 700) return 91;
    return distance * 0.75;
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  // Apply filters to data
  const filterData = (data, type) => {
    let filteredData = [...data];

    if (rideTypeFilter !== 'all') {
      filteredData = filteredData.filter(
        item => item.option === rideTypeFilter,
      );
    }

    if (distanceFilter !== 'all') {
      filteredData = filteredData.filter(item => {
        const distance = parseFloat(item.distance.split(' ')[0]);
        if (distanceFilter === 'short') return distance <= 100;
        if (distanceFilter === 'medium')
          return distance > 100 && distance <= 300;
        if (distanceFilter === 'long') return distance > 300;
        return true;
      });
    }

    if (dateFilter === 'asc') {
      filteredData.sort(
        (a, b) => new Date(a.selectedDate) - new Date(b.selectedDate),
      );
    } else if (dateFilter === 'desc') {
      filteredData.sort(
        (a, b) => new Date(b.selectedDate) - new Date(a.selectedDate),
      );
    }

    return filteredData;
  };


  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2db977" />
      <View style={{flexDirection: 'row', justifyContent: 'flex-start',backgroundColor:"#00000000"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../components/assets/left-arrow.png')} // Replace with your image path
            style={styles.filterImage1}
          />
        </TouchableOpacity>
        <View style={{backgroundColor: '#0000ff00', marginLeft: 10}}>
          <Text style={styles.heading}>Recently Posted Rides</Text>
        </View>
      </View>

      {/* Filter Button */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setFilterVisible(!filterVisible)}>
        <Image
          source={require('../components/assets/filter.png')} // Replace with your image path
          style={styles.filterImage}
        />
      </TouchableOpacity>

      {/* Filter UI */}
      <View style={styles.filter}>
        {filterVisible && (
          <View style={styles.filterContainer}>
            <View style={styles.filterContainer}>
              <Text style={styles.filterLabel}>Sort by Date:</Text>
              <Picker
                selectedValue={dateFilter}
                style={styles.picker}
                onValueChange={itemValue => setDateFilter(itemValue)}>
                <Picker.Item
                  label="Ascending"
                  value="asc"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Descending"
                  value="desc"
                  style={styles.pickerItem}
                />
              </Picker>

              <Text style={styles.filterLabel}>Filter by Distance:</Text>
              <Picker
                selectedValue={distanceFilter}
                style={styles.picker}
                onValueChange={itemValue => setDistanceFilter(itemValue)}>
                <Picker.Item
                  label="All"
                  value="all"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Short"
                  value="short"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Medium"
                  value="medium"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Long"
                  value="long"
                  style={styles.pickerItem}
                />
              </Picker>

              <Text style={styles.filterLabel}>Filter by Ride Type:</Text>
              <Picker
                selectedValue={rideTypeFilter}
                style={styles.picker}
                onValueChange={itemValue => setRideTypeFilter(itemValue)}>
                <Picker.Item
                  label="All"
                  value="all"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Driving"
                  value="driving"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Riding"
                  value="riding"
                  style={styles.pickerItem}
                />
              </Picker>
            </View>
          </View>
        )}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView style={styles.scrollView}>
          {driverData.length === 0 && riderData.length === 0 ? (
            <Text style={styles.noDataText}>No data available</Text>
          ) : (
            <TripList
              data={filterData([...driverData, ...riderData])}
              navigation={navigation}
            />
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    padding: 3,
     
  },
  pickerItem: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  container: {
    flex: 1,
    backgroundColor: '#2db97875',
  },
  heading: {
    fontSize: 24,
    // fontWeight: 'bold',
    // margin: 20,
    left:10,
    marginTop: 20,
    paddingHorizontal: 25,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  filterButton: {
    alignItems: 'center',
    // marginBottom: 10,
    // backgroundColor:'yellow',
  },
  filterImage1: {
    width: 30,
    height: 30,
    left: 20,
    top: 24,
    tintColor: 'white',
    // paddingBottom:10,
  },
  filterImage: {
    width: 30,
    height: 30,
    left: 150,
    tintColor: 'white',
  },
  filterContainer: {
    padding: 10,
    backgroundColor: '#e6f0eb',
    marginBottom: 10,
    // padding: 20,
    borderRadius: 25,
    // backgroundColor: '#fff',  // Set a background color to visualize the rounding
    elevation: 5,  // Add some shadow for better visibility on Android
    shadowColor: '#000',  // Add shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  filterLabel: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginVertical: 5,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    color: '#0c0c0c',
    fontFamily: 'Poppins-SemiBold',
  },
  scrollView: {
    flex: 1,
  },
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});

export default AllRides;
