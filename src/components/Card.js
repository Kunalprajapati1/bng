import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({ title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <LinearGradient 
        colors={[  'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.2)','rgba(0,0,0,0.5)']} 
        style={styles.overlay} 
      />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

const CardList = () => {
  const cardsData = [
    { title: 'Search', image: 'https://i.pinimg.com/564x/7d/96/20/7d96207b67b1dacf42c9792a8cce9d64.jpg' },
    { title: 'Match', image: 'https://i.pinimg.com/564x/85/ab/7b/85ab7ba7a79cff0d70810b68aa6f5c6f.jpg' },
    { title: 'And All Set', image: 'https://i.pinimg.com/736x/19/42/84/194284ea24735185e214261e736d1836.jpg' },
    // Add more cards as needed
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.scrollContainer}
    >
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} image={card.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  cardContainer: {
    width: 260,
    height: 290,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  cardText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default CardList;
