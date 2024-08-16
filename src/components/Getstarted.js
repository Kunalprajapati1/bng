import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';


const GetStarted = ({navigation}) => {

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
         
          navigation.navigate('TabNavigator');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, [navigation]);



  
  
  return (
    <>

  
    {/* Background Image */}
      <View style={styles.parent}>
      <View style={styles.child}>

      <Image
        source={require('../components/assets/me2.png')}
        style={styles.backgroundImage}
      />
 
      <Image
      source={require('../components/assets/placeholder.png')}
      style={styles.Image}
      />
      <Image
            source={require('../components/assets/text.png')}
            style={styles.Image2}
          />

          <Image
            source={require('../components/assets/agent.png')}
            style={styles.Image3}
          />

          <Image
          source={require('../components/assets/telephone.png')}
          style={styles.Image4}
          />
        </View>
        </View>
        
    
     

      {/* <View style={styles.overlayContainer}> */}
        <View style={styles.overlayContent}>
          <Text style={styles.text}>
            <Text style={styles.blackText}>Welcome to Your</Text>
            <Text style={styles.orangeText}> ultimate Transport Solution</Text>
          </Text>
          {/* <Text style={styles.loremText}>
          Get ready for a seamless and reliable ride experience with our cab app. 
           Whether you're heading to work, meeting friends, or exploring the city, we're here to make your journey comfortable and efficient. Our drivers are dedicated to providing safe and timely transportation, ensuring you arrive at your destination with ease. Enjoy the convenience of hassle-free booking, real-time tracking, and exceptional service. Your journey begins with us!   
          </Text> */}
          
          <TouchableOpacity onPress={() => navigation.navigate('Sign')} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>

          <Text style={styles.loremText2}>
            Already have an account ? <Text style={styles.orangeText2}>Log In</Text>
          </Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
      </>
  );
};

const styles = StyleSheet.create({
  child : {
    flex : 1,
    transform : [ { scaleX : 0.5 } ],

    backgroundColor : '#01b05f',
    alignItems : 'center',
    justifyContent : 'center'
},
  parent:{
    height : '60%',
      width : '100%',
      transform : [ { scaleX : 2 } ],
      borderBottomStartRadius : 300,
      borderBottomEndRadius : 100,
      overflow : 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#e6dede5b',
  },
  blackText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
     paddingHorizontal: 0, // Add horizontal padding
    paddingVertical: 10,
  },

  orangeText: {
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
     paddingHorizontal: 0, // Add horizontal padding
    paddingVertical: 10,
  },
  orangeText2: {
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '100%',
    marginLeft: '5%',
    marginTop: '15%',
    height: '100%',
    transform : [ { scaleX : 1 } ],
    // borderBottomStartRadius : 300,
    // borderBottomEndRadius : 100,
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  overlayContainer2: {
    flex: 1,
    backgroundColor: 'rgba(189, 177, 177, 0)',
  },
  overlayContent: {},
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2%',
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
     paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 0,
  },
  Image: {
    width: '10%',
    height: '20%',
    // marginTop: '30%',
    marginRight: '70%',

    resizeMode: 'contain',
  },
  Image2: {
    width: '10%',
    height: '20%',
    marginTop: '1%',
    // marginRight: '40%',
    marginLeft: '90%',
    resizeMode: 'contain',
  },
  Image3: {
    width: '10%',
    height: '10%',

    marginLeft: '75%',
    bottom: 240,
  },
  Image4: {
    width: '8%',
    height: '8%',

    marginRight: '90%',
    bottom: 90,
  },

  loremText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  loremText2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
  },
  button: {
    backgroundColor: '#01b05f',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 30,
    marginLeft: '10%',
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});

export default GetStarted;





// import React, { useRef } from 'react';
// import { StyleSheet, View, Dimensions, Image, Text, Animated, PanResponder, ImageBackground } from 'react-native';
// import { StatusBar } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

// const { width } = Dimensions.get('window');

// const Home = () => {
//   const navigation = useNavigation();
//   const pan = useRef(new Animated.Value(0)).current;

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (e, gestureState) => {
//         if (gestureState.dx >= 0 && gestureState.dx <= width - 80) {
//           pan.setValue(gestureState.dx);
//         }
//       },
//       onPanResponderRelease: (e, gestureState) => {
//         if (gestureState.dx > width * 0.6) {
//           Animated.timing(pan, {
//             toValue: width - 80,
//             duration: 200,
//             useNativeDriver: false,
//           }).start(() => {
//             navigation.navigate('Sign');
//             pan.setValue(0); // Reset for next time
//           });
//         } else {
//           Animated.spring(pan, {
//             toValue: 0,
//             useNativeDriver: false,
//           }).start();
//         }
//       },
//     })
//   ).current;

//   // Interpolating the background color
//   const backgroundColor = pan.interpolate({
//     inputRange: [0, width - 80],
//     outputRange: ['#323232', '#2db977'],
//   });

//   // Interpolating the text color
//   const textColor = pan.interpolate({
//     inputRange: [0, width - 80],
//     outputRange: ['#888', '#fff'],
//   });

//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor="#01b25f" />
//       <ImageBackground
//         source={{ uri: 'https://i.pinimg.com/564x/c8/77/d9/c877d956a528512dd9bc37d47615bf30.jpg' }}
//         style={styles.backgroundImage}
//       >
//         <LinearGradient
//           colors={['rgba(98, 98, 98, 0.5)', '#e6f0eb']} // gradient colors (black to transparent)
//           style={styles.gradient}
//         />
//         <View style={styles.container2}>
//           <Image
//             source={{ uri: 'https://i.pinimg.com/564x/c8/77/d9/c877d956a528512dd9bc37d47615bf30.jpg' }}
//             style={styles.image}
//           />
//         </View>
//         <Text style={styles.heading}>Find Your Personalized Carpooling Partners With</Text>
//         <Text style={styles.heading1}>Book-n-Go</Text>

//         <View style={styles.swipeContainer}>
//           <Animated.View style={[styles.swipeTrack, { backgroundColor }]}>
//             <Animated.Text style={[styles.swipeText, { color: textColor }]}>
//               Swipe to Move Forward
//             </Animated.Text>
//             <Animated.View
//               style={[styles.circle, { transform: [{ translateX: pan }] }]}
//               {...panResponder.panHandlers}
//             />
//           </Animated.View>
//         </View>
//       </ImageBackground>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   gradient: {
//     ...StyleSheet.absoluteFillObject,
//     // Optionally add padding/margins or adjust colors if needed
//   },
//   container2: {
//     width: '80%',
//     height: 540,
//     backgroundColor: '#2db977',
//     borderBottomLeftRadius: 180,
//     borderBottomRightRadius: 180,
//     left: 40,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 50,
//     top:-37
//   },
//   heading: {
//     color: '#040404',
//     textAlign: 'center',
//     fontFamily: 'Poppins-Bold',
//     paddingHorizontal: 20,
//     // marginTop: 10,
//     fontSize: 24,
//   },
//   heading1: {
//     color: '#019f55',
//     textAlign: 'center',
//     fontFamily: 'Poppins-Bold',
//     paddingHorizontal: 20,
//     // marginTop: 10,
//     fontSize: 28,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderBottomLeftRadius: 180,
//     borderBottomRightRadius: 180,
//     resizeMode: 'cover',
//   },
//   swipeContainer: {
//     marginTop: 10,
//     alignItems:'center',
//   },
//   swipeTrack: {
//     width: '95%',
//     height: 60,
//     borderRadius: 45,
//     justifyContent: 'center',
//     paddingLeft: 10,
//     position: 'relative',
//   },
//   swipeText: {
//     fontSize: 16,
//     fontFamily: 'Poppins-SemiBold',
//     textAlign: 'center',
//     position: 'absolute',
//     width: '100%',
//     zIndex: 1,
//   },
//   circle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#2db977',
//     position: 'absolute',
//     top: 10,
//     left: 10,
//     zIndex: 2,
//   },
// });

// export default Home;
