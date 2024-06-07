// SearchBar.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SearchBar = ({ handleSearchPress, loading }) => {
  return (
    <TouchableOpacity style={styles.searchBar} onPress={handleSearchPress}>
      {loading ? (
        <ActivityIndicator size="small" color="#000000" />
      ) : (
        <Text style={styles.searchText}>Anywhere {'>>>'} Anywhere</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    top: 90,
    width: '80%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
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
});

export default SearchBar;
