// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

// // const Payment = () => {
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const subscriptionOptions = [
// //     {
// //       duration: '1 month',
// //       price: 20,
// //       description: 'Billed monthly at $20 per month',
// //       benefits: [
// //         'Unlock premium features',
// //         'Ad-free experience',
// //         'Access to exclusive content',
// //         'Priority customer support',
// //       ]
// //     },
// //     {
// //       duration: '6 months',
// //       price: 110,
// //       description: 'Save $10! Billed every 6 months at $18.33 per month',
// //       benefits: [
// //         'All monthly subscription benefits',
// //         'Additional discount on select products',
// //         'Extended access to premium content',
// //         'Exclusive monthly giveaways',
// //       ]
// //     },
// //     {
// //       duration: '1 year',
// //       price: 200,
// //       description: 'Save $40! Billed annually at $16.67 per month',
// //       benefits: [
// //         'All 6-month subscription benefits',
// //         'Free access to all premium content',
// //         'VIP access to events and webinars',
// //         'Annual personalized gift',
// //       ]
// //     },
// //   ];

// //   const handleOptionSelect = (index) => {
// //     setSelectedOption(index === selectedOption ? null : index);
// //   };

// //   const handlePayment = () => {
// //     const paymentURL = "https://buy.stripe.com/test_7sI9CMet342y8BqbII";
// //     Linking.openURL(paymentURL)
// //       .catch(err => console.error('An error occurred', err));
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Unlock Premium Features</Text>
// //       <Text style={styles.subtitle}>Upgrade your experience and enjoy exclusive benefits!</Text>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {subscriptionOptions.map((option, index) => (
// //           <View key={index} style={styles.optionContainer}>
// //             <TouchableOpacity
// //               style={[
// //                 styles.option,
// //                 selectedOption === index && styles.selectedOption
// //               ]}
// //               onPress={() => handleOptionSelect(index)}
// //             >
// //               <Text style={styles.optionTitle}>{option.duration}</Text>
// //               <Text style={styles.optionPrice}>${option.price}</Text>
// //               <Text style={styles.optionDescription}>{option.description}</Text>
// //               <Text style={styles.benefitTitle}>Benefits:</Text>
// //               <View>
// //                 {option.benefits.map((benefit, index) => (
// //                   <Text key={index} style={styles.benefit}>{'\u2022'} {benefit}</Text>
// //                 ))}
// //               </View>
// //               {selectedOption === index && (
// //                 <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
// //                   <Text style={styles.paymentButtonText}>Pay Now</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //         ))}
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000', // Black background
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //     color: '#fff', // White text
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#fff',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   optionContainer: {
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   option: {
// //     width: '100%',
// //     padding: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     backgroundColor: '#222', // Dark
// //     position: 'relative', // To position the payment button
// //   },
// //   selectedOption: {
// //     elevation: 8, // Larger shadow for selected option
// //     width: '100%', // Make selected option wider
// //   },
// //   optionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#fff', // White text
// //   },
// //   optionPrice: {
// //     fontSize: 18,
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   optionDescription: {
// //     fontSize: 16,
// //     color: '#ccc', // Light gray text
// //     marginBottom: 10,
// //   },
// //   benefitTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   benefit: {
// //     fontSize: 14,
// //     color: '#ccc', // Light gray text
// //     marginLeft: 20,
// //     marginBottom: 5,
// //   },
// //   paymentButton: {
// //     backgroundColor: '#007bff', // Material UI blue color
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 5,
// //     elevation: 3,
// //     marginTop: 10,
// //     alignSelf: 'center',
// //   },
// //   paymentButtonText: {
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default Payment;

// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

// // const Payment = () => {
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const subscriptionOptions = [
// //     {
// //       duration: '1 month',
// //       price: 20,
// //       description: 'Billed monthly at $20 per month',
// //       benefits: [
// //         'Unlock premium features',
// //         'Ad-free experience',
// //         'Access to exclusive content',
// //         'Priority customer support',
// //       ],
// //       paymentURL: "https://buy.stripe.com/test_7sI9CMet342y8BqbII"
// //     },
// //     {
// //       duration: '6 months',
// //       price: 110,
// //       description: 'Save $10! Billed every 6 months at $18.33 per month',
// //       benefits: [
// //         'All monthly subscription benefits',
// //         'Additional discount on select products',
// //         'Extended access to premium content',
// //         'Exclusive monthly giveaways',
// //       ],
// //       paymentURL: "https://buy.stripe.com/test_abcxyz123"
// //     },
// //     {
// //       duration: '1 year',
// //       price: 200,
// //       description: 'Save $40! Billed annually at $16.67 per month',
// //       benefits: [
// //         'All 6-month subscription benefits',
// //         'Free access to all premium content',
// //         'VIP access to events and webinars',
// //         'Annual personalized gift',
// //       ],
// //       paymentURL: "https://buy.stripe.com/test_defghi456"
// //     },
// //   ];

// //   const handleOptionSelect = (index) => {
// //     setSelectedOption(index === selectedOption ? null : index);
// //   };

// //   const handlePayment = (paymentURL) => {
// //     Linking.openURL(paymentURL)
// //       .catch(err => console.error('An error occurred', err));
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Unlock Premium Features</Text>
// //       <Text style={styles.subtitle}>Upgrade your experience and enjoy exclusive benefits!</Text>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {subscriptionOptions.map((option, index) => (
// //           <View key={index} style={styles.optionContainer}>
// //             <TouchableOpacity
// //               style={[
// //                 styles.option,
// //                 selectedOption === index && styles.selectedOption
// //               ]}
// //               onPress={() => handleOptionSelect(index)}
// //             >
// //               <Text style={styles.optionTitle}>{option.duration}</Text>
// //               <Text style={styles.optionPrice}>${option.price}</Text>
// //               <Text style={styles.optionDescription}>{option.description}</Text>
// //               <Text style={styles.benefitTitle}>Benefits:</Text>
// //               <View>
// //                 {option.benefits.map((benefit, index) => (
// //                   <Text key={index} style={styles.benefit}>{'\u2022'} {benefit}</Text>
// //                 ))}
// //               </View>
// //               {selectedOption === index && (
// //                 <TouchableOpacity
// //                   style={styles.paymentButton}
// //                   onPress={() => handlePayment(option.paymentURL)}>
// //                   <Text style={styles.paymentButtonText}>Pay Now</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //         ))}
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000', // Black background
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //     color: '#fff', // White text
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#fff',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   optionContainer: {
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   option: {
// //     width: '100%',
// //     padding: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     backgroundColor: '#222', // Dark
// //     position: 'relative', // To position the payment button
// //   },
// //   selectedOption: {
// //     elevation: 8, // Larger shadow for selected option
// //     width: '100%', // Make selected option wider
// //   },
// //   optionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#fff', // White text
// //   },
// //   optionPrice: {
// //     fontSize: 18,
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   optionDescription: {
// //     fontSize: 16,
// //     color: '#ccc', // Light gray text
// //     marginBottom: 10,
// //   },
// //   benefitTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   benefit: {
// //     fontSize: 14,
// //     color: '#ccc', // Light gray text
// //     marginLeft: 20,
// //     marginBottom: 5,
// //   },
// //   paymentButton: {
// //     backgroundColor: '#33557a', // Material UI blue color
// //     paddingVertical: 10,
// //     paddingHorizontal: 80,
// //     borderRadius: 5,
// //     elevation: 3,
// //     marginTop: 10,
// //     alignSelf: 'center',
// //   },
// //   paymentButtonText: {
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default Payment;

// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
// // import firestore from '@react-native-firebase/firestore'; // Import Firestore

// // const Payment = () => {
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const subscriptionOptions = [
// //     {
// //       duration: '1 month',
// //       price: 20,
// //       description: 'Billed monthly at $20 per month',
// //       benefits: [
// //         'Unlock premium features',
// //         'Ad-free experience',
// //         'Access to exclusive content',
// //         'Priority customer support',
// //       ],
// //       paymentURL: "https://buy.stripe.com/test_7sI9CMet342y8BqbII"
// //     },
// //     {
// //       duration: '6 months',
// //       price: 110,
// //       description: 'Save $10! Billed every 6 months at $18.33 per month',
// //       benefits: [
// //         'All monthly subscription benefits',
// //         'Additional discount on select products',
// //         'Extended access to premium content',
// //         'Exclusive monthly giveaways',
// //       ],
// //       paymentURL: "https://buy.stripe.com/test_abcxyz123"
// //     },
// //     {
// //       duration: '1 year',
// //       price: 200,
// //       description: 'Save $40! Billed annually at $16.67 per month',
// //       benefits: [
// //         'All 6-month subscription benefits',
// //         'Free access to all premium content',
// //         'VIP access to events and webinars',
// //         'Annual personalized gift',
// //       ],
// //       paymentURL: "https://buy.stripe.com/test_defghi456"
// //     },
// //   ];

// //   const handleOptionSelect = (index) => {
// //     setSelectedOption(index === selectedOption ? null : index);
// //   };

// //   const handlePayment = (paymentURL) => {
// //     Linking.openURL(paymentURL)
// //       .then(() => {
// //         // Payment successful, add details to Firestore
// //         const paymentDetails = {
// //           option: subscriptionOptions[selectedOption],
// //           timestamp: new Date(),
// //           // Add more payment details as needed
// //         };

// //         const paymentCollection = firestore().collection('payments');
// //         paymentCollection.add(paymentDetails)
// //           .then((docRef) => {
// //             console.log('Payment details added with ID: ', docRef.id);
// //           })
// //           .catch((error) => {
// //             console.error('Error adding payment details: ', error);
// //           });
// //       })
// //       .catch(err => console.error('An error occurred', err));
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Unlock Premium Features</Text>
// //       <Text style={styles.subtitle}>Upgrade your experience and enjoy exclusive benefits!</Text>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {subscriptionOptions.map((option, index) => (
// //           <View key={index} style={styles.optionContainer}>
// //             <TouchableOpacity
// //               style={[
// //                 styles.option,
// //                 selectedOption === index && styles.selectedOption
// //               ]}
// //               onPress={() => handleOptionSelect(index)}
// //             >
// //               <Text style={styles.optionTitle}>{option.duration}</Text>
// //               <Text style={styles.optionPrice}>${option.price}</Text>
// //               <Text style={styles.optionDescription}>{option.description}</Text>
// //               <Text style={styles.benefitTitle}>Benefits:</Text>
// //               <View>
// //                 {option.benefits.map((benefit, index) => (
// //                   <Text key={index} style={styles.benefit}>{'\u2022'} {benefit}</Text>
// //                 ))}
// //               </View>
// //               {selectedOption === index && (
// //                 <TouchableOpacity
// //                   style={styles.paymentButton}
// //                   onPress={() => handlePayment(option.paymentURL)}>
// //                   <Text style={styles.paymentButtonText}>Pay Now</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //         ))}
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000', // Black background
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //     color: '#fff', // White text
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#fff',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   optionContainer: {
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   option: {
// //     width: '100%',
// //     padding: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     backgroundColor: '#222', // Dark
// //     position: 'relative', // To position the payment button
// //   },
// //   selectedOption: {
// //     elevation: 8, // Larger shadow for selected option
// //     width: '100%', // Make selected option wider
// //   },
// //   optionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#fff', // White text
// //   },
// //   optionPrice: {
// //     fontSize: 18,
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   optionDescription: {
// //     fontSize: 16,
// //     color: '#ccc', // Light gray text
// //     marginBottom: 10,
// //   },
// //   benefitTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   benefit: {
// //     fontSize: 14,
// //     color: '#ccc', // Light gray text
// //     marginLeft: 20,
// //     marginBottom: 5,
// //   },
// //   paymentButton: {
// //     backgroundColor: '#33557a', // Material UI blue color
// //     paddingVertical: 10,
// //     paddingHorizontal: 80,
// //     borderRadius: 5,
// //     elevation: 3,
// //     marginTop: 10,
// //     alignSelf: 'center',
// //   },
// //   paymentButtonText: {
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default Payment;

// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
// // import firestore from '@react-native-firebase/firestore';
// //  // Import Firebase Functions

// // const Payment = () => {
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const subscriptionOptions = [
// //     {
// //       duration: '1 month',
// //       price: 20,
// //       description: 'Billed monthly at $20 per month',
// //       benefits: [
// //         'Unlock premium features',
// //         'Ad-free experience',
// //         'Access to exclusive content',
// //         'Priority customer support',
// //       ],
// //       paymentMethods: ["card", "gpay", "applepay"] // Payment methods, e.g., card, gpay, applepay
// //     },
// //     {
// //       duration: '6 months',
// //       price: 110,
// //       description: 'Save $10! Billed every 6 months at $18.33 per month',
// //       benefits: [
// //         'All monthly subscription benefits',
// //         'Additional discount on select products',
// //         'Extended access to premium content',
// //         'Exclusive monthly giveaways',
// //       ],
// //       paymentMethods: ["card", "gpay", "applepay"] // Payment methods, e.g., card, gpay, applepay
// //     },
// //     {
// //       duration: '1 year',
// //       price: 200,
// //       description: 'Save $40! Billed annually at $16.67 per month',
// //       benefits: [
// //         'All 6-month subscription benefits',
// //         'Free access to all premium content',
// //         'VIP access to events and webinars',
// //         'Annual personalized gift',
// //       ],
// //       paymentMethods: ["card", "gpay", "applepay"] // Payment methods, e.g., card, gpay, applepay
// //     },
// // ];

// //   const handleOptionSelect = (index) => {
// //     setSelectedOption(index === selectedOption ? null : index);
// //   };
// //   const handlePayment = () => {
// //     const paymentURL = 'https://buy.stripe.com/test_7sI9CMet342y8BqbII'; // Replace with your actual payment link
// //     Linking.openURL(paymentURL)
// //       .then(() => {
// //         // Payment link opened successfully
// //         console.log('Payment link opened successfully.');
// //         // Assuming payment is successfully processed by Stripe after user completes payment
// //         // We can reflect the successful payment in Firebase here
// //         const paymentDetails = {
// //           paymentURL: paymentURL,
// //           timestamp: new Date(),
// //           // status: 'success', // You can add more payment details as needed
// //         };
// //         const paymentCollection = firestore().collection('payments2');
// //         paymentCollection.add(paymentDetails)
// //           .then((docRef) => {
// //             console.log('Payment details added with ID: ', docRef.id);
// //             // Handle success, e.g., navigate to success screen
// //           })
// //           .catch((error) => {
// //             console.error('Error adding payment details: ', error);
// //             // Handle error, e.g., show error message to user
// //           });
// //       })
// //       .catch((error) => {
// //         console.error('An error occurred while opening payment link: ', error);
// //         // Handle error, e.g., show error message to user
// //       });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Unlock Premium Features</Text>
// //       <Text style={styles.subtitle}>Upgrade your experience and enjoy exclusive benefits!</Text>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {subscriptionOptions.map((option, index) => (
// //           <View key={index} style={styles.optionContainer}>
// //             <TouchableOpacity
// //               style={[
// //                 styles.option,
// //                 selectedOption === index && styles.selectedOption
// //               ]}
// //               onPress={() => handleOptionSelect(index)}
// //             >
// //               <Text style={styles.optionTitle}>{option.duration}</Text>
// //               <Text style={styles.optionPrice}>${option.price}</Text>
// //               <Text style={styles.optionDescription}>{option.description}</Text>
// //               <Text style={styles.benefitTitle}>Benefits:</Text>
// //               <View>
// //                 {option.benefits.map((benefit, index) => (
// //                   <Text key={index} style={styles.benefit}>{'\u2022'} {benefit}</Text>
// //                 ))}
// //               </View>
// //               {selectedOption === index && (
// //                 <TouchableOpacity
// //                   style={styles.paymentButton}
// //                   onPress={handlePayment}>
// //                   <Text style={styles.paymentButtonText}>Pay Now</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //         ))}
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000', // Black background
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //     color: '#fff', // White text
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#fff',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   optionContainer: {
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   option: {
// //     width: '100%',
// //     padding: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     backgroundColor: '#222', // Dark
// //     position: 'relative', // To position the payment button
// //   },
// //   selectedOption: {
// //     elevation: 8, // Larger shadow for selected option
// //     width: '100%', // Make selected option wider
// //   },
// //   optionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#fff', // White text
// //   },
// //   optionPrice: {
// //     fontSize: 18,
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   optionDescription: {
// //     fontSize: 16,
// //     color: '#ccc', // Light gray text
// //     marginBottom: 10,
// //   },
// //   benefitTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //     color: '#fff', // White text
// //   },
// //   benefit: {
// //     fontSize: 14,
// //     color: '#ccc', // Light gray text
// //     marginLeft: 20,
// //     marginBottom: 5,
// //   },
// //   paymentButton: {
// //     backgroundColor: '#33557a', // Material UI blue color
// //     paddingVertical: 10,
// //     paddingHorizontal: 80,
// //     borderRadius: 5,
// //     elevation: 3,
// //     marginTop: 10,
// //     alignSelf: 'center',
// //   },
// //   paymentButtonText: {
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default Payment;

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking, AsyncStorage } from 'react-native';
// import axios from 'axios';
// import firestore from '@react-native-firebase/firestore';

// const PaymentScreen = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const subscriptionOptions = [
//     {
//       duration: '1 month',
//       price: 5,
//       description: 'Billed monthly at $5 per month',
//       benefits: [
//         'Unlock premium features',
//         'Ad-free experience',
//         'Access to exclusive content',
//         'Priority customer support',
//       ],
//     },
//     {
//       duration: '3 month',
//       price: 10,
//       description: 'Billed monthly at $10 per month',
//       benefits: [
//         'Unlock premium features',
//         'Ad-free experience',
//         'Access to exclusive content',
//         'Priority customer support',
//       ],
//     },
//     {
//       duration: '6 months',
//       price: 25,
//       description: 'Save $10! Billed every 6 months at $25 per month',
//       benefits: [
//         'All monthly subscription benefits',
//         'Additional discount on select products',
//         'Extended access to premium content',
//         'Exclusive monthly giveaways',
//       ],
//     },
//     {
//       duration: '1 year',
//       price: 45,
//       description: 'Save $40! Billed annually at $45 per month',
//       benefits: [
//         'All 6-month subscription benefits',
//         'Free access to all premium content',
//         'VIP access to events and webinars',
//         'Annual personalized gift',
//       ],
//     },
//   ];

//   const handleOptionSelect = (index) => {
//     setSelectedOption(index === selectedOption ? null : index);
//   };

//   const handlePayment = async () => {
//     try {
//       // Handle payment logic here
//       // This function will be called when the user clicks "Pay Now"
//       const paymentURL = 'https://buy.stripe.com/test_7sI9CMet342y8BqbII';
//       Linking.openURL(paymentURL)
//         .then(() => {
//           // Payment link opened successfully
//           console.log('Payment link opened successfully.');
//         })
//         .catch((error) => {
//           console.error('An error occurred while opening payment link: ', error);
//         });
//     } catch (error) {
//       console.error('Error handling payment:', error);
//     }
//   };

//   useEffect(() => {
//     // Function to handle session end
//     const handleSessionEnd = async () => {
//       try {
//         // Retrieve the customer email from AsyncStorage
//         const email = await AsyncStorage.getItem('userEmail');

//         // Make a request to Stripe API to get the latest payment
//         const response = await axios.get('STRIPE_API_ENDPOINT/latest-payment');
//         const latestPayment = response.data;

//         // Extract customer email from the latest payment
//         const customerEmail = latestPayment.customer_email;

//         // Check if the customer email matches the stored email
//         if (customerEmail === email) {
//           // Update payment status in Firestore
//           await updatePaymentStatus(email, latestPayment.status);
//         } else {
//           console.log('Customer email does not match stored email.');
//         }
//       } catch (error) {
//         console.error('Error handling session end:', error);
//       }
//     };

//     // Call handleSessionEnd when component mounts
//     handleSessionEnd();
//   }, []);

//   const updatePaymentStatus = async (email, status) => {
//     try {
//       // Find the user document in Firestore based on the email
//       const userRef = firestore().collection('users').doc(email);

//       // Update the payment status field
//       await userRef.update({
//         paymentStatus: status
//       });

//       console.log('Payment status updated successfully.');
//     } catch (error) {
//       console.error('Error updating payment status:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Unlock Premium Features</Text>
//       {/* <Text style={styles.subtitle}>Upgrade your experience and enjoy exclusive benefits!</Text> */}
//       <ScrollView contentContainerStyle={styles.scrollContainer}>

//         {subscriptionOptions.map((option, index) => (
//           <View key={index} style={styles.optionContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.option,
//                 selectedOption === index && styles.selectedOption
//               ]}
//               onPress={() => handleOptionSelect(index)}
//             >
//               <Text style={styles.optionTitle}>{option.duration}</Text>
//               <Text style={styles.optionPrice}>${option.price}</Text>
//               <Text style={styles.optionDescription}>{option.description}</Text>
//               <Text style={styles.benefitTitle}>Benefits:</Text>
//               <View>
//                 {option.benefits.map((benefit, index) => (
//                   <Text key={index} style={styles.benefit}>{'\u2022'} {benefit}</Text>
//                 ))}
//               </View>
//               {selectedOption === index && (
//                 <TouchableOpacity
//                   style={styles.paymentButton}
//                   onPress={handlePayment}>
//                   <Text style={styles.paymentButtonText}>Pay Now</Text>
//                 </TouchableOpacity>
//               )}
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2db977',
//     padding: 14,
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: 'Poppins-SemiBold',
//     marginBottom: 10,
//     marginTop:20,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     fontFamily: 'Poppins-SemiBold',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
// paddingBottom:50,
//   },
//   optionContainer: {
//     width: '100%',
//     marginBottom: 20,

//   },
//   option: {
//     width: '100%',
//     padding: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#6bc7a7',
//     position: 'relative',
//   },
//   selectedOption: {
//     elevation: 8,
//     width: '100%',
//   },
//   optionTitle: {
//     fontSize: 20,
//     // fontWeight: 'bold',
//     marginBottom: 10,
//     color:'#e6f0eb',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   optionPrice: {
//     fontSize: 18,
//     marginBottom: 5,
//     color:'#e6f0eb',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   optionDescription: {
//     fontSize: 16,
//     marginBottom: 10,
//     color:'#e6f0eb',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   benefitTitle: {
//     fontSize: 16,
//     color:'#e6f0eb',
//     // fontWeight: 'bold',
//     marginBottom: 5,
//     fontFamily: 'Poppins-SemiBold',
//   },
//   benefit: {
//     fontSize: 14,
//     marginLeft: 20,
//     color:'#e6f0eb',
//     marginBottom: 5,
//     fontFamily: 'Poppins-Regular',
//   },
//   paymentButton: {
//     backgroundColor: '#0f663d',
//     paddingVertical: 10,
//     paddingHorizontal: 80,
//     borderRadius: 5,
//     elevation: 3,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   paymentButtonText: {
//     fontSize: 16,
//     color: '#fff',
//     // fontWeight: 'bold',
//     fontFamily: 'Poppins-SemiBold',
//   },
// });

// export default PaymentScreen;

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
// import axios from 'axios';
// import firestore from '@react-native-firebase/firestore';
// import { useStripe } from '@stripe/stripe-react-native';

// const PaymentScreen = () => {
//   const { presentPaymentSheet, initPaymentSheet } = useStripe();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [clientSecret, setClientSecret] = useState(null);

//   const subscriptionOptions = [
//     {
//       duration: '1 month',
//       price: 5,
//       description: 'Billed monthly at $5 per month',
//       benefits: [
//         'Unlock premium features',
//         'Ad-free experience',
//         'Access to exclusive content',
//         'Priority customer support',
//       ],
//     },
//     {
//       duration: '3 month',
//       price: 10,
//       description: 'Billed monthly at $10 per month',
//       benefits: [
//         'Unlock premium features',
//         'Ad-free experience',
//         'Access to exclusive content',
//         'Priority customer support',
//       ],
//     },
//     {
//       duration: '6 months',
//       price: 25,
//       description: 'Save $10! Billed every 6 months at $25 per month',
//       benefits: [
//         'All monthly subscription benefits',
//         'Additional discount on select products',
//         'Extended access to premium content',
//         'Exclusive monthly giveaways',
//       ],
//     },
//     {
//       duration: '1 year',
//       price: 45,
//       description: 'Save $40! Billed annually at $45 per month',
//       benefits: [
//         'All 6-month subscription benefits',
//         'Free access to all premium content',
//         'VIP access to events and webinars',
//         'Annual personalized gift',
//       ],
//     },
//   ];

//   const handleOptionSelect = (index) => {
//     setSelectedOption(index === selectedOption ? null : index);
//   };

//   const handlePayment = async () => {
//     if (selectedOption === null) {
//       console.log('Please select a subscription option.');
//       return;
//     }

//     const amount = subscriptionOptions[selectedOption].price * 100; // Convert to cents

//     try {
//       // Fetch PaymentIntent client secret from your backend
//       const response = await axios.post('http://192.168.15.171:3000/create-payment-intent', {
//         amount,
//         description: subscriptionOptions[selectedOption].description
//       });

//       if (!response.data.clientSecret) {
//         throw new Error('Failed to fetch client secret');
//       }

//       setClientSecret(response.data.clientSecret);

//       // Initialize the Payment Sheet
//       const { error: initError } = await initPaymentSheet({
//         paymentIntentClientSecret: response.data.clientSecret,
//         merchantDisplayName: 'BooknGo' // Replace with your business or application name
//       });

//       if (initError) {
//         console.log('Payment Sheet initialization error:', initError);
//         return;
//       }

//       // Present the Payment Sheet
//       const { error } = await presentPaymentSheet();

//       if (error) {
//         console.log('Payment Sheet error:', error);
//       } else {
//         console.log('Payment successful');
//         // Optionally, update the user's subscription status
//       }
//     } catch (error) {
//       console.error('Error handling payment:', error);
//     }
//   };

//   useEffect(() => {
//     // Function to handle session end
//     const handleSessionEnd = async () => {
//       try {
//         // Retrieve the customer email from AsyncStorage
//         const email = await AsyncStorage.getItem('userEmail');

//         // Make a request to Stripe API to get the latest payment
//         const response = await axios.get('STRIPE_API_ENDPOINT/latest-payment');
//         const latestPayment = response.data;

//         // Extract customer email from the latest payment
//         const customerEmail = latestPayment.customer_email;

//         // Check if the customer email matches the stored email
//         if (customerEmail === email) {
//           // Update payment status in Firestore
//           await updatePaymentStatus(email, latestPayment.status);
//         } else {
//           console.log('Customer email does not match stored email.');
//         }
//       } catch (error) {
//         console.error('Error handling session end:', error);
//       }
//     };

//     // Call handleSessionEnd when component mounts
//     handleSessionEnd();
//   }, []);

//   const updatePaymentStatus = async (email, status) => {
//     try {
//       // Find the user document in Firestore based on the email
//       const userRef = firestore().collection('users').doc(email);

//       // Update the payment status field
//       await userRef.update({
//         paymentStatus: status
//       });

//       console.log('Payment status updated successfully.');
//     } catch (error) {
//       console.error('Error updating payment status:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Unlock Premium Features</Text>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {subscriptionOptions.map((option, index) => (
//           <View key={index} style={styles.optionContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.option,
//                 selectedOption === index && styles.selectedOption
//               ]}
//               onPress={() => handleOptionSelect(index)}
//             >
//               <Text style={styles.optionTitle}>{option.duration}</Text>
//               <Text style={styles.optionPrice}>${option.price}</Text>
//               <Text style={styles.optionDescription}>{option.description}</Text>
//               <Text style={styles.benefitTitle}>Benefits:</Text>
//               <View>
//                 {option.benefits.map((benefit, index) => (
//                   <Text key={index} style={styles.benefit}>{'\u2022'} {benefit}</Text>
//                 ))}
//               </View>
//               {selectedOption === index && (
//                 <TouchableOpacity
//                   style={styles.paymentButton}
//                   onPress={handlePayment}>
//                   <Text style={styles.paymentButtonText}>Pay Now</Text>
//                 </TouchableOpacity>
//               )}
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e6f0eb',
//     padding: 14,
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: 'Poppins-SemiBold',
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 50,
//   },
//   optionContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   option: {
//     width: '100%',
//     padding: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#6bc7a7',
//     position: 'relative',
//   },
//   selectedOption: {
//     elevation: 8,
//     width: '100%',
//   },
//   optionTitle: {
//     fontSize: 20,
//     marginBottom: 10,
//     color: '#e6f0eb',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   optionPrice: {
//     fontSize: 18,
//     marginBottom: 5,
//     color: '#e6f0eb',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   optionDescription: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#e6f0eb',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   benefitTitle: {
//     fontSize: 16,
//     color: '#e6f0eb',
//     marginBottom: 5,
//     fontFamily: 'Poppins-SemiBold',
//   },
//   benefit: {
//     fontSize: 14,
//     marginLeft: 20,
//     color: '#e6f0eb',
//     marginBottom: 5,
//     fontFamily: 'Poppins-Regular',
//   },
//   paymentButton: {
//     backgroundColor: '#0f663d',
//     paddingVertical: 10,
//     paddingHorizontal: 80,
//     borderRadius: 5,
//     elevation: 3,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   paymentButtonText: {
//     fontSize: 16,
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//   },
// });

// export default PaymentScreen;

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useStripe} from '@stripe/stripe-react-native';
import LinearGradient from 'react-native-linear-gradient';

const PaymentScreen = () => {
  const {presentPaymentSheet, initPaymentSheet} = useStripe();
  const [selectedOption, setSelectedOption] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const subscriptionOptions = [
    {
      duration: '1 month',
      price: 5,
      description: 'Billed monthly at $5 per month',
      benefits: [
        'Unlock premium features',
        'Ad-free experience',
        'Access to exclusive content',
        'Priority customer support',
      ],
    },
    {
      duration: '3 months',
      price: 10,
      description: 'Billed monthly at $10 per month',
      benefits: [
        'Unlock premium features',
        'Ad-free experience',
        'Access to exclusive content',
        'Priority customer support',
      ],
    },
    {
      duration: '6 months',
      price: 25,
      description: 'Save $10! Billed every 6 months at $25 per month',
      benefits: [
        'All monthly subscription benefits',
        'Additional discount on select products',
        'Extended access to premium content',
        'Exclusive monthly giveaways',
      ],
    },
    {
      duration: '1 year',
      price: 45,
      description: 'Save $40! Billed annually at $45 per year',
      benefits: [
        'All 6-month subscription benefits',
        'Free access to all premium content',
        'VIP access to events and webinars',
        'Annual personalized gift',
      ],
    },
  ];

  const handleOptionSelect = index => {
    setSelectedOption(index === selectedOption ? null : index);
  };

  const handlePayment = async () => {
    if (selectedOption === null) {
      console.log('Please select a subscription option.');
      return;
    }

    const amount = subscriptionOptions[selectedOption].price * 100; // Convert to cents

    try {
      // Fetch PaymentIntent client secret from your backend
      const response = await fetch(
        'http://192.168.15.171:3000/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount,

            description: subscriptionOptions[selectedOption].description,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch client secret');
      }

      const data = await response.json();
      if (!data.clientSecret) {
        throw new Error('Failed to fetch client secret');
      }

      setClientSecret(data.clientSecret);

      // Initialize the Payment Sheet
      const {error: initError} = await initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: 'BooknGo', // Replace with your business or application name
      });

      if (initError) {
        console.log('Payment Sheet initialization error:', initError);
        return;
      }

      // Present the Payment Sheet
      const {error} = await presentPaymentSheet();

      if (error) {
        console.log('Payment Sheet error:', error);
      } else {
        console.log('Payment successful');
        // Optionally, update the user's subscription status
      }
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };

  const handleSessionEnd = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      if (!email) {
        console.log('No user email found in AsyncStorage.');
        return;
      }

      // Fetch the latest payment details from your backend
      const response = await fetch('http://192.168.15.171:3000/latest-payment');

      if (!response.ok) {
        throw new Error('Failed to fetch latest payment');
      }

      const latestPayment = await response.json();
      const customerEmail = latestPayment.customer_email;

      if (customerEmail === email) {
        await updatePaymentStatus(email, latestPayment.status);
      } else {
        console.log('Customer email does not match stored email.');
      }
    } catch (error) {
      console.error('Error handling session end:', error);
    }
  };

  const updatePaymentStatus = async (email, status) => {
    try {
      // Find the user document in Firestore based on the email
      const userRef = firestore().collection('users').doc(email);

      // Retrieve user metadata
      const userDoc = await userRef.get();
      if (!userDoc.exists) {
        throw new Error('User not found');
      }

      const userData = userDoc.data();
      const {name, mobileNumber} = userData;

      // Store payment status in Firestore under 'Premium' collection
      const premiumRef = firestore().collection('Premium').doc(email);
      await premiumRef.set({
        email,
        name,
        mobileNumber,
        status,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      console.log('Payment status updated successfully.');
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  useEffect(() => {
    handleSessionEnd();
  }, []);

  return (
    <>
      <LinearGradient
        colors={['#01b25f', '#2db977']} // Gradient colors
        style={styles.gradient} // Apply the gradient style
      >
        <View style={styles.parent}>
          <View style={styles.child}>
            
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/cc/92/38/cc923814805def4a9cd39b6c23a9a638.jpg',
              }}
              style={styles.backgroundImage}
            />
          </View>
        </View>
        <Text style={styles.title}>Unlock Premium Features</Text>
        {/* <View style={styles.overlayContainer}> */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* <View style={styles.container}> */}

          {subscriptionOptions.map((option, index) => (
            <View key={index} style={styles.optionContainer}>
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedOption === index && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect(index)}>
                <Text style={styles.optionTitle}>
                  {option.duration} - ${option.price}
                </Text>
                {/* <Text style={styles.optionPrice}>${option.price}</Text> */}
                <Text style={styles.optionDescription}>
                  {option.description}
                </Text>
                <Text style={styles.benefitTitle}>Benefits:</Text>
                <View>
                  {option.benefits.map((benefit, index) => (
                    <Text key={index} style={styles.benefit}>
                      {'\u2022'} {benefit}
                    </Text>
                  ))}
                </View>
                {selectedOption === index && (
                  <TouchableOpacity
                    style={styles.paymentButton}
                    onPress={handlePayment}>
                    <Text style={styles.paymentButtonText}>Pay Now</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </View>
          ))}
          {/* </View>     */}
        </ScrollView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#01b05f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    height: '35%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 100,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#e6dede5b',
  },
  blackText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 0, // Add horizontal padding
    paddingVertical: 10,
  },

  orangeText: {
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 0, // Add horizontal padding
    paddingVertical: 10,
  },
  orangeText2: {
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '100%',
    marginLeft: '5%',
    marginTop: '15%',
    height: '100%',
    transform: [{scaleX: 1}],
    // borderBottomStartRadius : 300,
    // borderBottomEndRadius : 100,
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  overlayContainer2: {
    flex: 1,
    backgroundColor: 'rgba(189, 177, 177, 0)',
  },
  overlayContent: {},
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2%',
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 0,
  },
  Image: {
    width: '10%',
    height: '20%',
    // marginTop: '30%',
    marginRight: '70%',

    resizeMode: 'contain',
  },
  Image2: {
    width: '10%',
    height: '20%',
    marginTop: '1%',
    // marginRight: '40%',
    marginLeft: '90%',
    resizeMode: 'contain',
  },
  Image3: {
    width: '10%',
    height: '10%',

    marginLeft: '75%',
    bottom: 240,
  },
  Image4: {
    width: '8%',
    height: '8%',

    marginRight: '90%',
    bottom: 90,
  },

  loremText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  loremText2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
  },
  button: {
    backgroundColor: '#01b05f',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 30,
    marginLeft: '10%',
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#e6f0eb',
    padding: 14,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    marginTop: 20,
    color: '#e6f0eb',

textAlign:'center'


  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,

    paddingHorizontal: 20,
  },
  optionContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f1f1f1b6',
    borderRadius: 30,
  },
  option: {
    width: '100%',
    padding: 20,
    borderRadius: 30,
    // borderWidth: 1,
    // borderColor: '#706f6f',
    // backgroundColor: '#d6d8d78a',
    position: 'relative',
  },
  selectedOption: {
    // elevation: 8,
    width: '100%',
  },
  optionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#125a38',
    fontFamily: 'Poppins-SemiBold',
  },
  optionPrice: {
    fontSize: 18,
    marginBottom: 5,
    color: '#2db977',
    fontFamily: 'Poppins-SemiBold',
  },
  optionDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#2db977',
    fontFamily: 'Poppins-SemiBold',
  },
  benefitTitle: {
    fontSize: 16,
    color: '#2db977',
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  benefit: {
    fontSize: 14,
    marginLeft: 20,
    color: '#2db977',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  paymentButton: {
    backgroundColor: '#0f663d',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 30,
  },
  paymentButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default PaymentScreen;
