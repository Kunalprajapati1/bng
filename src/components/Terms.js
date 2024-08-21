// import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
// import React from 'react';
// import { Card, Title, Paragraph } from 'react-native-paper';

// const TermsOfUse = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* <Image source={require('../components/assets/car.jpg')} style={styles.headerImage} /> */}

//       <Text style={styles.title}>Terms of Use</Text>

//       <View style={styles.contentContainer}>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//           <Card style={styles.card}>
//             <Card.Content>
//               <Image source={require('../components/assets/i.jpg')} style={styles.image} />
//               <Title style={styles.cardTitle}>Ownership</Title>
//               <Paragraph style={styles.cardText}>
//                 BooknGo is owned and operated by [Your Company Name]. All rights, title, and
//                 interest in and to the Service, including all intellectual property rights,
//                 are and will remain the exclusive property of [Your Company Name].
//               </Paragraph>
//             </Card.Content>
//           </Card>

//           <Card style={styles.card}>
//             <Card.Content>
//               <Image source={require('../components/assets/i.jpg')} style={styles.image} />
//               <Title style={styles.cardTitle}>User Responsibility</Title>
//               <Paragraph style={styles.cardText}>
//                 Users of BooknGo are solely responsible for their interactions and transactions
//                 with transportation providers. BooknGo does not endorse, guarantee, or verify
//                 the quality or safety of the transportation services offered. Users agree to
//                 use the platform at their own risk and discretion.
//               </Paragraph>
//             </Card.Content>
//           </Card>

//           <Card style={styles.card}>
//             <Card.Content>
//               <Image source={require('../components/assets/trippage.jpg')} style={styles.image2} />
//               <Title style={styles.cardTitle}>Limitation of Liability</Title>
//               <Paragraph style={styles.cardText}>
//                 BooknGo shall not be liable for any indirect, incidental, special, consequential,
//                 or punitive damages arising out of or in connection with your use of the Service.
//                 In no event shall BooknGo's total liability to you exceed the amount paid by you,
//                 if any, for using the Service.
//               </Paragraph>
//             </Card.Content>
//           </Card>
//         </ScrollView>

//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//           <Card style={styles.card}>
//             <Card.Content>
//               <Image source={require('../components/assets/cash.png')} style={styles.image4} />
//               <Title style={styles.cardTitle}>Ride Availability</Title>
//               <Paragraph style={styles.cardText}>
//                 BooknGo provides a platform for users to view available rides provided by
//                 third-party transportation providers. BooknGo does not own or operate the
//                 transportation services offered through the platform. Users are responsible
//                 for connecting with available rides and arranging transportation on their own.
//               </Paragraph>
//             </Card.Content>
//           </Card>

//           <Card style={styles.card}>
//             <Card.Content>
//               <Image source={require('../components/assets/cash.png')} style={styles.image4} />
//               <Title style={styles.cardTitle}>Payment</Title>
//               <Paragraph style={styles.cardText}>
//                 Payment for rides booked through BooknGo is processed securely through the
//                 platform. By booking a ride, you agree to pay the specified fare for the
//                 transportation service. BooknGo may charge additional fees for cancellations
//                 or modifications to bookings.
//               </Paragraph>
//             </Card.Content>
//           </Card>

//           <Card style={styles.card}>
//             <Card.Content>
//               <Image source={require('../components/assets/share2.jpg')} style={styles.image3} />
//               <Title style={styles.cardTitle}>Indemnification</Title>
//               <Paragraph style={styles.cardText}>
//                 You agree to indemnify and hold harmless BooknGo, its affiliates, and their respective
//                 officers, directors, employees, and agents from and against any and all claims, actions,
//                 demands, liabilities, losses, damages, penalties, fines, costs, and expenses, including
//                 reasonable attorneys' fees, arising out of or resulting from your use of the Service,
//                 or any violation of these Terms or applicable law.
//               </Paragraph>
//             </Card.Content>
//           </Card>
//         </ScrollView>
//       </View>

//       <Text style={styles.footer}>
//         If you have any questions about these Terms, please contact us at support@bookngo.com.
//       </Text>
//     </ScrollView>
//   );
// };

// export default TermsOfUse;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#f2f2f2',

//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333',

//     marginTop: 20,
//     marginBottom: 10,
//   },
//   headerImage: {
//     width: '100%',
//     height: 200,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',

//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 14,
//     color: '#333',

//     lineHeight: 20,
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 20,
//     marginRight: 10,
//     elevation: 2, // Add elevation for shadow effect
//     width: 300,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',

//   },
//   cardText: {
//     fontSize: 14,
//     color: '#333',

//     lineHeight: 20,
//   },
//   image: {
//     width: '100%',
//     height: 100,
//     marginBottom: 20,
//   },
//   image2: {
//     width: '100%',
//     height: 200,
//     marginBottom: 20,
//   },
//   image3: {
//     width: '100%',
//     height: 220,
//     marginBottom: 20,
//   },
//   image4: {
//     width: '100%',
//     height: 150,
//     marginBottom: 20,
//   },
//   footer: {
//     marginTop: 10,
//     marginBottom: 50,
//     fontSize: 14,
//     color: '#666666',

//     textAlign: 'center',
//   },
// });
import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.8;
const CARD_MARGIN = 10;
const FULL_CARD_WIDTH = CARD_WIDTH + CARD_MARGIN * 2;
const CARD_HEIGHT = 450; // Increased height for the selected card
const SMALL_CARD_HEIGHT = 480; // Default small card height

const cards = [
  {
    id: '1',
    title: 'Ownership',
    text: 'BooknGo is owned and operated by [Your Company Name]. All rights, title, and interest in and to the Service, including all intellectual property rights, are and will remain the exclusive property of [Your Company Name].',
    image: {uri:'https://i.pinimg.com/564x/7c/3c/73/7c3c73fa69e1188f3290fd48f9ab6d7e.jpg'},
  },
  {
    id: '2',
    title: 'User Responsibility',
    text: 'Users of BooknGo are solely responsible for their interactions and transactions with transportation providers. BooknGo does not endorse, guarantee, or verify the quality or safety of the transportation services offered.',
    image: {uri:'https://i.pinimg.com/564x/ef/18/9c/ef189caeddceecbace8df462b1c35940.jpg'},
  },
  {
    id: '3',
    title: 'Limitation of Liability',
    text: 'BooknGo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service. In no event shall BooknGo\'s total liability to you exceed the amount paid by you, if any, for using the Service.',
    image: {uri:'https://i.pinimg.com/736x/6a/cc/78/6acc785926cd7fe3843733115b557d1d.jpg'},
  },
  {
    id: '4',
    title: 'Ride Availability',
    text: 'BooknGo provides a platform for users to view available rides provided by third-party transportation providers. BooknGo does not own or operate the transportation services offered through the platform.',
    image: {uri:'https://i.pinimg.com/564x/e7/3d/a6/e73da648296d55a3cd3aafbd0efd6148.jpg'},
  },
  {
    id: '5',
    title: 'Payment',
    text: 'Payment for rides booked through BooknGo is processed securely through the platform. By booking a ride, you agree to pay the specified fare for the transportation service. BooknGo may charge additional fees for cancellations or modifications to bookings.',
    image: {uri:'https://i.pinimg.com/564x/f6/09/41/f6094121ae8689a84eebb990d664440a.jpg'},
  },
  {
    id: '6',
    title: 'Indemnification',
    text: 'You agree to indemnify and hold harmless BooknGo, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, actions, demands, liabilities, losses, damages, penalties, fines, costs, and expenses, including reasonable attorneys\' fees, arising out of or resulting from your use of the Service, or any violation of these Terms or applicable law.',
    image: {uri:'https://i.pinimg.com/564x/26/37/80/2637806132a0ab865b32ba3e6c8f73f3.jpg'},
  },
];

const TermsOfUse = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderCard = ({ item, index }) => {
    const inputRange = [
      (index - 1) * FULL_CARD_WIDTH,
      index * FULL_CARD_WIDTH,
      (index + 1) * FULL_CARD_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: 'clamp',
    });

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [20, 0, 20],
      extrapolate: 'clamp',
    });

    return (
      
      <Animated.View style={[styles.cardContainer, { transform: [{ scale }, { translateY }] }]}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={item.image} style={styles.image} />
            <Title style={styles.cardTitle}>{item.title}</Title>
            <Paragraph style={styles.cardText}>{item.text}</Paragraph>
          </Card.Content>
        </Card>
      </Animated.View>
    );
  };

  return (
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/17/2d/29/172d295c056b00f1f0172eba8dc22ab5.jpg'}}>
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image source={require('../components/assets/car.jpg')} style={styles.headerImage} /> */}
      <Text style={styles.title}>Terms of Use</Text>

      <View style={styles.contentContainer}>
        {/* First Row */}
        <Animated.FlatList
          data={cards.slice(0, 3)}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
          snapToInterval={FULL_CARD_WIDTH}
          decelerationRate="fast"
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />

        {/* Second Row */}
        <Animated.FlatList
          data={cards.slice(3, 6)}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.flatList, { marginTop: 30 }]} // Added margin to separate rows
          snapToInterval={FULL_CARD_WIDTH}
          decelerationRate="fast"
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />
      </View>

      <Text style={styles.footer}>
        If you have any questions about these Terms, please contact us at support@bookngo.com.
      </Text>
    </ScrollView>
    </ImageBackground>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#2db977',
    
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Poppins-SemiBold',
    
    marginTop: 60,
    marginBottom: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  flatList: {
    paddingHorizontal: CARD_MARGIN,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN,
    justifyContent: 'center', // Center content vertically
  },
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    height: SMALL_CARD_HEIGHT, // Default height
  },
  cardTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins-SemiBold',
    
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  footer: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    
    textAlign: 'center',
    // fontFamily: 'Poppins-Regular',
  },
});
