// TripList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TripItem from './TripItem';

const TripList = ({ data, title }) => {
  return (
    <View style={styles.tripContainer}>
      <Text style={styles.tripTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TripItem item={item} />}
        contentContainerStyle={styles.tripListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tripContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    
  },
  tripListContent: {
    padding: 10,
  },
});

export default TripList;
