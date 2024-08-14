// // Header.js
// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

// const Header = ({ isMenuOpen, handleMenuPress, handleFindTrip, handlePostTrip, handleMyTrips, handleProfile, handleContact, handlePayment, handleSafety, handlePrivacy, handleTerms, handleHowto, handleLogout }) => {
//   return (
//     <View style={styles.menuButtonContainer}>
//       <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//         {/* <Text style={styles.menuButtonText}>Menu</Text> */}
//         <Image
//       source={require('../components/assets/app.png')}
//       tintColor="#ffffff"
//       style={{width:40, height: 40,}}
//       />
//       </TouchableOpacity>
//       {isMenuOpen && (
//         <View style={styles.menu}>
//           <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
//             <Text style={[styles.menuItemText]}>Find Trip</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
//             <Text style={[styles.menuItemText]}>Post Trip</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleMyTrips}>
//             <Text style={[styles.menuItemText]}>My Trips</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
//             <Text style={[styles.menuItemText]}>Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleContact}>
//             <Text style={[styles.menuItemText]}>Contact Us</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handlePayment}>
//             <Text style={[styles.menuItemText]}>Payment</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleSafety}>
//             <Text style={[styles.menuItemText]}>Safety</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
//             <Text style={[styles.menuItemText]}>Privacy Policy</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleTerms}>
//             <Text style={[styles.menuItemText]}>Terms Of Use</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleHowto}>
//             <Text style={[styles.menuItemText]}>How to ?</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
//             <Text style={[styles.menuItemText]}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
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
//     width: 500,
//     // right: -10,
//     backgroundColor: '#1563d7',
//     borderRadius: 10,
//     padding: 20,
//     zIndex: 9999, // Highest z-index
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
// });

// export default Header;
// Header.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window'); // Get screen dimensions

const Header = ({ isMenuOpen, handleMenuPress, handleFindTrip, handlePostTrip, handleMyTrips, handleProfile, handleContact, handlePayment, handleSafety, handlePrivacy, handleTerms, handleHowto, handleLogout }) => {
 
  const navigation = useNavigation(); //
  return (
    <View style={styles.menuButtonContainer}>
      <TouchableOpacity style={styles.menuButton} 
      // onPress={handleMenuPress}
      onPress={() => navigation.navigate('newMenu')}
      >
        <Image
          source={require('../components/assets/app.png')}
          tintColor="#ffffff"
          style={{ width: 40, height: 40 }}
        />
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
          <TouchableOpacity style={styles.menuItem} onPress={handlePayment}>
            <Text style={styles.menuItemText}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleSafety}>
            <Text style={styles.menuItemText}>Safety</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
            <Text style={styles.menuItemText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleTerms}>
            <Text style={styles.menuItemText}>Terms Of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleHowto}>
            <Text style={styles.menuItemText}>How to?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  menuButton: {
    padding: 10,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: height, // Full height
    width: width,   // Full width
    backgroundColor: '#1563d7',
    borderRadius: 0,
    padding: 20,
    zIndex: 9999, // Highest z-index
  },
  menuItem: {
    paddingVertical: 15,
    alignSelf: 'center',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',  // Changed text color for visibility
  },
});

export default Header;
