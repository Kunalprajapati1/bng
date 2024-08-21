import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, Animated } from 'react-native';

const Splash = ({ navigation }) => {
  const scaleValue = useRef(new Animated.Value(0)).current; // Initial scale value 0 rakhi hai

  useEffect(() => {
    // Animation start karte hain
    Animated.spring(scaleValue, {
      toValue: 1, // Final scale value 1 hogi (original size)
      friction: 5, // Friction daal rahe hain to make it smooth
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    // 2-3 seconds ke baad Getstarted screen pe navigate karega
    setTimeout(() => {
      navigation.replace('Getstarted');
    }, 2000); // 3 seconds
  }, [navigation, scaleValue]);

  return (
    <>
      <StatusBar
        barStyle="dark-content" // Text aur icons ko dark karega
        backgroundColor="#01b05f" // Status bar ka background white karega
      />
      <View style={styles.container}>
        {/* <Animated.Image
          source={require('../components/assets/rr.png')}
          style={[styles.backgroundImage, { transform: [{ scale: scaleValue }] }]} // Scale animation apply kiya gaya hai
        /> */}
        <Animated.Image
          source={require('../components/assets/ee.png')}
          style={[styles.backgroundImage, { transform: [{ scale: scaleValue }] }]} // Scale animation apply kiya gaya hai
        />
        {/* <Text>Book and GO with Book-n-Go</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01b05f', // Splash screen background color
  },
  backgroundImage: {
    width: 300, // Image ki width
    height: 300, // Image ki height
    resizeMode: 'contain', // Image ko aspect ratio maintain karte hue fit karega
  },
});

export default Splash;
// import React, { useEffect, useRef } from 'react';
// import { View, StyleSheet, Image, StatusBar, Animated } from 'react-native';

// const Splash = ({ navigation }) => {
//   const scaleValue = useRef(new Animated.Value(0)).current; // For pop-up effect

//   useEffect(() => {
//     // Pop-up effect
//     Animated.spring(scaleValue, {
//       toValue: 1, // Final scale value
//       friction: 5, // Friction to make it smooth
//       useNativeDriver: true, // Native driver for better performance
//     }).start();
    
//     // Uncomment and adjust this line for navigation after the splash screen
//     // setTimeout(() => {
//     //   navigation.replace('Getstarted');
//     // }, 3000); // 3 seconds
//   }, [navigation, scaleValue]);

//   return (
//     <>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="#01b05f"
//       />
      
//       <View style={styles.container}>
       
       
//         {/* <View style={styles.textContainer}> */}
//           {/* Pop-up effect */}
//           <Animated.Image
//             source={require('../components/assets/w.png')}
//             style={[styles.mainImage, { transform: [{ scale: scaleValue }] }]} // Centered and animated
//           />
//         {/* </View> */}
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#01b05f',
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//   },
//   iconImage: {
//     width: 50,
//     height: 50,
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     resizeMode: 'contain',
//   },
//   mainImage: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//   },
//   textContainer: {
//     alignItems: 'center', // Center alignment for children
//   },
// });

// export default Splash;
