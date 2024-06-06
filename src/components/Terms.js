

import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const TermsOfUse = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../components/assets/car.jpg')} style={styles.headerImage} />

      <Text style={styles.title}>Terms of Use</Text>

      {/* Terms of Use Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.content}>
          Welcome to BooknGo, your premier ride booking platform! These terms and conditions
          ("Terms") govern your use of the BooknGo mobile application and website
          (collectively, the "Service"). By accessing or using the Service, you agree
          to be bound by these Terms.
        </Text>

        {/* Ownership */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Ownership</Title>
            <Paragraph style={styles.cardText}>
              BooknGo is owned and operated by [Your Company Name]. All rights, title, and
              interest in and to the Service, including all intellectual property rights,
              are and will remain the exclusive property of [Your Company Name].
            </Paragraph>
          </Card.Content>
        </Card>
        <Image source={require('../components/assets/review.png')} style={styles.image} />

         {/* User Responsibility */}
         <Text style={styles.sectionTitle}>User Responsibility</Text>
        <Text style={styles.content}>
          Users of BooknGo are solely responsible for their interactions and transactions
          with transportation providers. BooknGo does not endorse, guarantee, or verify
          the quality or safety of the transportation services offered. Users agree to
          use the platform at their own risk and discretion.
        </Text>

        {/* Limitation of Liability */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Limitation of Liability</Title>
            <Paragraph style={styles.cardText}>
              BooknGo shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or in connection with your use of the Service.
              In no event shall BooknGo's total liability to you exceed the amount paid by you,
              if any, for using the Service.
            </Paragraph>
          </Card.Content>
        </Card>
        <Image source={require('../components/assets/trippage.jpg')} style={styles.image2} />

        {/* Governing Law */}
        <Text style={styles.sectionTitle}>Governing Law</Text>
        <Text style={styles.content}>
          These Terms shall be governed by and construed in accordance with the laws of [Your Country],
          without regard to its conflict of law provisions. Any dispute arising out of or in connection
          with the Service shall be subject to the exclusive jurisdiction of the courts of [Your Country].
        </Text>

        {/* Ride Availability */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Ride Availability</Title>
            <Paragraph style={styles.cardText}>
              BooknGo provides a platform for users to view available rides provided by
              third-party transportation providers. BooknGo does not own or operate the
              transportation services offered through the platform. Users are responsible
              for connecting with available rides and arranging transportation on their own.
            </Paragraph>
          </Card.Content>
        </Card>
        <Image source={require('../components/assets/cash.png')} style={styles.image4} />

       {/* Payment */}
       <Text style={styles.sectionTitle}>Payment</Text>
        <Text style={styles.content}>
          Payment for rides booked through BooknGo is processed securely through the
          platform. By booking a ride, you agree to pay the specified fare for the
          transportation service. BooknGo may charge additional fees for cancellations
          or modifications to bookings.
        </Text>
        <Image source={require('../components/assets/share2.jpg')} style={styles.image3} />

        {/* Indemnification */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Indemnification</Title>
            <Paragraph style={styles.cardText}>
              You agree to indemnify and hold harmless BooknGo, its affiliates, and their respective
              officers, directors, employees, and agents from and against any and all claims, actions,
              demands, liabilities, losses, damages, penalties, fines, costs, and expenses, including
              reasonable attorneys' fees, arising out of or resulting from your use of the Service,
              or any violation of these Terms or applicable law.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
            <Text style={styles.footer}>
        If you have any questions about these Terms, please contact us at support@bookngo.com.
      </Text>
      {/* Additional Images */}
    </ScrollView>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    elevation: 2, // Add elevation for shadow effect
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  image2: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  image3: {
    width: '100%',
    height: 220,
    marginBottom: 20,
  },
  image4: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
    footer: {
    marginTop: 10,
    marginBottom:50,
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});




