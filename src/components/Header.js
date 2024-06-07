// Header.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header = ({ isMenuOpen, handleMenuPress, handleFindTrip, handlePostTrip, handleMyTrips, handleProfile, handleContact, handlePayment, handleSafety, handlePrivacy, handleTerms, handleHowto, handleLogout }) => {
  return (
    <View style={styles.menuButtonContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleFindTrip}>
            <Text style={[styles.menuItemText]}>Find Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlePostTrip}>
            <Text style={[styles.menuItemText]}>Post Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleMyTrips}>
            <Text style={[styles.menuItemText]}>My Trips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
            <Text style={[styles.menuItemText]}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleContact}>
            <Text style={[styles.menuItemText]}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlePayment}>
            <Text style={[styles.menuItemText]}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleSafety}>
            <Text style={[styles.menuItemText]}>Safety</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
            <Text style={[styles.menuItemText]}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleTerms}>
            <Text style={[styles.menuItemText]}>Terms Of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleHowto}>
            <Text style={[styles.menuItemText]}>How to ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={[styles.menuItemText]}>Logout</Text>
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
});

export default Header;
