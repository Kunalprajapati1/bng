
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity
 } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CardList from './Card';
const Howto = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleNavigateToPage = (pageName) => {
    navigation.navigate(pageName); // Navigate to the specified page
  };
  return (
    <>
    <Text style={styles.title}>How to use the Book-n-Go Application</Text>
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image source={require('../components/assets/car.jpg')} style={styles.headerImage} /> */}
      <CardList/>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Find / Offer a Lift</Title>
          <Paragraph style={styles.cardText}>
            To find or offer a lift:
            {"\n"}
            1. Click the search button in the top left corner.
            {"\n"}
            2. Enter the departure location, destination, and departure date.
            {"\n"}
            3. Click 'I'm driving' if you are driving and looking for passengers.
            {"\n"}
            4. Click 'I need a lift' if you are a passenger looking for a driver.
          </Paragraph>
          <TouchableOpacity onPress={() => handleNavigateToPage('Home')} style={styles.button}>
          <Text style={styles.buttonText}>Find / Offer a Lift</Text>
        </TouchableOpacity>
        </Card.Content>
      </Card>
      <Image source={{uri:'https://i.pinimg.com/564x/bc/0d/d2/bc0dd24053e173e1784de06a96e45afb.jpg'}} style={styles.image} />

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Contact People</Title>
          <Paragraph style={styles.cardText}>
            To contact people:
            {"\n"}
            1. Click the CONTACT button on the other person's trip listing.
            {"\n"}
            2. Select from the contact options in the pop-up at the bottom of the screen.
          </Paragraph>
        </Card.Content>
      </Card>
      <Image source={{uri:'https://i.pinimg.com/564x/ff/4c/b2/ff4cb246f26569476ce6900fad634e43.jpg'}} style={styles.image} />

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Edit Trips</Title>
          <Paragraph style={styles.cardText}>
            To edit a trip:
            {"\n"}
            1. Click the menu button in the top right corner.
            {"\n"}
            2. Select 'my trips'.
            {"\n"}
            3. Login.
            {"\n"}
            4. Click the EDIT button on any trip.
            {"\n"}
            5. Modify your trip details.
            {"\n"}
            6. Click the SAVE button to save your updated trip details.
          </Paragraph>
          <TouchableOpacity onPress={() => handleNavigateToPage('Trips')} style={styles.button}>
          <Text style={styles.buttonText}>Edit Trips</Text>
        </TouchableOpacity>
        </Card.Content>
      </Card>
      <Image source={{uri:'https://i.pinimg.com/564x/2d/f8/af/2df8af4ca905da9fedda88a12f8ba2ba.jpg'}} style={styles.image2} />



      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Delete Trips</Title>
          <Paragraph style={styles.cardText}>
            To delete a trip:
            {"\n"}
            1. Click the menu button in the top right corner.
            {"\n"}
            2. Select 'my trips'.
            {"\n"}
            3. Login.
            {"\n"}
            4. Click the delete button on the trip to delete individual trips.
            {"\n"}
            5. Or click the delete all button to delete all your trips and requests, then confirm.
          </Paragraph>
          <TouchableOpacity onPress={() => handleNavigateToPage('Trips')} style={styles.button}>
          <Text style={styles.buttonText}>Delete Trips</Text>
        </TouchableOpacity>
        </Card.Content>
      </Card>
      <Image source={{uri:'https://i.pinimg.com/564x/8e/8b/a2/8e8ba2787a745e267fe1468aa80d78a2.jpg'}} style={styles.image2} />



      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Delete Your Profile</Title>
          <Paragraph style={styles.cardText}>
            To delete your profile:
            {"\n"}
            1. Click the menu button in the top right corner.
            {"\n"}
            2. Select 'my profile'.
            {"\n"}
            3. Login.
            {"\n"}
            4. Click the delete button.
            {"\n"}
            5. Confirm that you want to delete your entire profile, including trips, requests, and reviews.
          </Paragraph>
          <TouchableOpacity onPress={() => handleNavigateToPage('Profile')} style={styles.button}>
          <Text style={styles.buttonText}>Delete your Profile </Text>
        </TouchableOpacity>
        </Card.Content>
      </Card>
      <Image source={{uri:'https://i.pinimg.com/564x/6e/6e/c6/6e6ec6f790809fa9d755f135c7adcdde.jpg'}} style={styles.image2} />



      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Add a Review</Title>
          <Paragraph style={styles.cardText}>
            To add a review:
            {"\n"}
            1. Go to the trip details page.
            {"\n"}
            2. Scroll down to the review section.
            {"\n"}
            3. Click on the add review button.
          </Paragraph>
        </Card.Content>
      </Card>
      <Image source={{uri:'https://i.pinimg.com/564x/50/a4/2c/50a42c0a969d3d5a6cc04e12ce1b4dd0.jpg'}} style={styles.image2} />



      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Questions</Title>
          <Paragraph style={styles.cardText}>
            For any questions or assistance, please contact our support team through the app or website.
          </Paragraph>
          <TouchableOpacity onPress={() => handleNavigateToPage('Contact')} style={styles.button}>
          <Text style={styles.buttonText}>Questions</Text>
        </TouchableOpacity>
        </Card.Content>
      </Card>
      {/* <Image source={require('../components/assets/trippage.jpg')} style={styles.image2} /> */}


    </ScrollView></>
  );
};

export default Howto;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e6f0eb',
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  card: {
    marginBottom: 20,
    elevation: 2,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 19,
    // fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins-SemiBold',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 30,
    fontFamily: 'Poppins-Regular',
  },
  instructions: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  image: {
    width: '100%',
    height: 300,
    // borderWidth: 2,
    borderColor: '#000000',
    marginBottom: 20,
  },
  image2: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#2db977',
    padding: 10,
    borderRadius: 55,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#e6f0eb',
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});
