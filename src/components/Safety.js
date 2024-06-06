

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Safety = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image source={require('../components/assets/car.jpg')} style={styles.headerImage} />

      <Title style={styles.heading}>Rideshare Safety Tips</Title>
      <Paragraph style={styles.text}>
        Ridesharing can be great fun, but sharing a ride with a stranger can be a bit daunting, especially if you have never done it before. To make sure you have an amazing experience, we've put together some tips to keep you safe.
      </Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.subheading}>Facebook and social media profiles</Text>
          <Paragraph style={styles.cardText}>
            Browsing social media profiles can give you a good idea of the other person's interests, friends, and family. It can also be a good way to find out about the other person's personality, interests, and if you share common ground.
          </Paragraph>
        </Card.Content>
      </Card>

      <Image source={require('../components/assets/review.png')} style={styles.image} />

      <Paragraph style={styles.text}>
        People can leave reviews on CoSeats so make sure you read them. Reviews are a great way to find out more about other people you want to share a ride with so please always leave reviews after you share a ride. The more reviews, the safer CoSeats will be for everyone.
      </Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.subheading}>Get to know the other person</Text>
          <Paragraph style={styles.cardText}>
            We recommend meeting people you want to share a ride with in person before your trip. Choose a public place to meet up and get to know each other if possible. If you can't meet up beforehand, make sure you talk to the other person beforehand to make sure you have found a suitable rideshare buddy.
          </Paragraph>
        </Card.Content>
      </Card>

      <Image source={require('../components/assets/trippage.jpg')} style={styles.image2} />

      <Paragraph style={styles.text}>
        Make sure you are both on the same page before you head off. Agree on your trip details such as the cost (including how and when you will pay); pick-up and drop-off times; breaks and sightseeing; is smoking allowed etc.
      </Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.subheading}>Trust your gut feeling</Text>
          <Paragraph style={styles.cardText}>
            If there is anything that makes you feel uncomfortable about the other person, trust your instincts and find another ride. It’s better to be safe than sorry!
          </Paragraph>
        </Card.Content>
      </Card>

 

      <Paragraph style={styles.text}>
        Once you decide to share a ride, make sure to let friends or family know of your plans. Agree on check-in points throughout the trip for your relative or friend to call you, and let them know when you intend on arriving at your destination. If you arrange for someone to call you, be mindful that you may not have mobile phone coverage everywhere.
      </Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.subheading}>Driving license and number plate</Text>
          <Paragraph style={styles.cardText}>
            Get a photo of the vehicle's number plate and ask if it's okay to also send a photo of the driver’s license to your friend or relative.
          </Paragraph>
        </Card.Content>
      </Card>

      <Image source={require('../components/assets/share2.jpg')} style={styles.image3} />

      <Paragraph style={styles.text}>
        Keep your home, work or friends / family addresses private by arranging public pick-up and drop-off points.
      </Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.subheading}>Exchange contact details</Text>
          <Paragraph style={styles.cardText}>
            We recommend exchanging emergency contact details beforehand with the person you're sharing a ride with. Make sure you also write down important numbers in case you don’t have access to your mobile.
          </Paragraph>
        </Card.Content>
      </Card>

      <Image source={require('../components/assets/cash.png')} style={styles.image4} />

      <Paragraph style={styles.text}>
        Always keep a credit or debit card, your ID, and some cash with you in case you get stranded or separated from your driver for any reason.
      </Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.subheading}>Stay away from remote places</Text>
          <Paragraph style={styles.cardText}>
            It is always safer to stay in public places, where there are other people to help in case of an emergency. For example, if you are going to be camping overnight, try to stay in a public campsite with other people rather than in a remote location with a stranger.
          </Paragraph>
        </Card.Content>
      </Card>

      <Text style={[styles.text, { marginBottom: 20, textAlign: 'center' }]}>
        And last but not least... enjoy your trip!
      </Text>
    </ScrollView>
  );
};

export default Safety;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentContainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    bottom:30,
  },
  headerImage: {
    width: '120%',
    height: 200,
  
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#333',
  },
  subheading: {
    
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  text: {
    paddingHorizontal: 20,

    fontSize: 14,
    color: '#333',
    marginVertical: 10,
    lineHeight: 20,
  },
  card: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  image: {
    width: '170%',
    height: 100,
    
    marginVertical: 10,
  },

  image2: {
    width: '100%',
    height: 200,
    
    marginVertical: 10,
  },

  image3: {
    width: '120%',
    height: 220,
    
    marginVertical: 10,
  },

  image4: {
    width: '100%',
    height: 150,
    
    marginVertical: 10,
  },
});
