

// // // import React, { useState, useEffect } from 'react';
// // // import { View, Text, StyleSheet, ActivityIndicator, Button, ImageBackground, StatusBar } from 'react-native';
// // // import { useNavigation } from '@react-navigation/native';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import firebase from '@react-native-firebase/app';
// // // import '@react-native-firebase/auth';
// // // import '@react-native-firebase/firestore';
// // // import { useColorScheme } from 'react-native';
// // // import { BlurView } from '@react-native-community/blur'

// // // const Profile = () => {
// // //   const navigation = useNavigation();
// // //   const [userDetails, setUserDetails] = useState(null);
// // //   const colorScheme = useColorScheme();

// // //   const primaryColor = '#FFEB3B'; // Yellow
// // //   const secondaryColor = '#FFFFFF'; // White
// // //   const textColor = '#000000'; // Black

// // //   useEffect(() => {
// // //     fetchUserDetails();
// // //   }, []);

// // //   const fetchUserDetails = async () => {
// // //     try {
// // //       const currentUser = firebase.auth().currentUser;
// // //       if (currentUser) {
// // //         const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
// // //         if (userDoc.exists) {
// // //           setUserDetails(userDoc.data());
// // //         } else {
// // //           setUserDetails({
// // //             email: currentUser.email,
// // //             name: currentUser.displayName,
// // //             mobileNumber: currentUser.phoneNumber
// // //           });
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching user details:', error);
// // //     }
// // //   };

// // //   const handleLogout = async () => {
// // //     try {
// // //       await AsyncStorage.clear(); // Clear any async data if necessary
// // //       await firebase.auth().signOut();
// // //       navigation.navigate('TabNavigator'); // Navigate to the Home screen
// // //     } catch (error) {
// // //       console.error('Error signing out:', error);
// // //     }
// // //   };

// // //   if (!userDetails) {
// // //     return (
// // //       <View style={[styles.loadingContainer, { backgroundColor: primaryColor }]}>
// // //         <ActivityIndicator size="large" />
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //     <StatusBar barStyle="light-content" backgroundColor="#0c544c" />
// // //      <ImageBackground
// // //       source={{ uri: 'https://i.pinimg.com/564x/34/31/96/343196e4a28ee4d35481294f96e227ad.jpg' }}
// // //       style={styles.container}
// // //     >
      
// // //   {/* <View style={[styles.container]}> */}
// // //   {/* <BlurView
// // //         // style={styles.detailsContainer}
// // //         blurType="light"
// // //         blurAmount={10}
// // //         // reducedTransparencyFallbackColor="white"
// // //       > */}
// // //       <Text style={[styles.title]}>Profile</Text>
// // //       <View style={[styles.detailsContainer]}>
// // //         <View style={styles.detailItem}>
// // //           <Text style={[styles.detailLabel]}>Email:</Text>
// // //           <Text style={[styles.detailText]}>{userDetails.email}</Text>
// // //         </View>
// // //         <View style={styles.detailItem}>
// // //           <Text style={[styles.detailLabel]}>Name:</Text>
// // //           <Text style={[styles.detailText]}>{userDetails.name}</Text>
// // //         </View>
// // //         <View style={styles.detailItem}>
// // //           <Text style={[styles.detailLabel]}>Mobile Number:</Text>
// // //           <Text style={[styles.detailText]}>{userDetails.mobileNumber}</Text>
// // //         </View>
// // //         <View style={styles.detailItem}>
// // //           <Text style={[styles.detailLabel]}>Gender:</Text>
// // //           <Text style={[styles.detailText2]}>{userDetails.gender}</Text>
// // //         </View>
// // //         <View style={styles.buttonContainer}>
// // //           <Button title="Logout" onPress={handleLogout}  />
// // //         </View>
// // //       </View>
// // //       {/* </BlurView> */}
// // //     {/* </View> */}


// // //     </ImageBackground>
// // //     </>
  
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     height:300,
    
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //    fontFamily: 'Poppins-Bold',
// // //     marginBottom: 20,
// // //   },
// // //   detailsContainer: {
// // //     borderWidth: 1,
// // //     borderRadius: 10,
// // //     padding: 20,
// // //     width: '100%',
// // //   },
// // //   detailItem: {
// // //     marginBottom: 15,
// // //   },
// // //   detailLabel: {
// // //     fontSize: 16,
// // //    fontFamily: 'Poppins-Bold',
// // //     marginRight: 10,
// // //   },
// // //   detailText: {
// // //     fontSize: 16,
// // //   },
// // //   detailText2: {
// // //     fontSize: 18,
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   buttonContainer: {
// // //     marginTop: 20,
// // //     width: '100%',
// // //   },
// // // });

// // // export default Profile;




// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, ActivityIndicator, Button, Image, TouchableOpacity } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import firebase from '@react-native-firebase/app';
// // import '@react-native-firebase/auth';
// // import '@react-native-firebase/firestore';
// // import { useColorScheme } from 'react-native';

// // const Profile = () => {
// //   const navigation = useNavigation();
// //   const [userDetails, setUserDetails] = useState(null);
// //   const colorScheme = useColorScheme();

// //   const primaryColor = '#FFEB3B'; // Yellow
// //   const secondaryColor = '#FFFFFF'; // White
// //   const textColor = '#000000'; // Black

// //   useEffect(() => {
// //     fetchUserDetails();
// //   }, []);

// //   const fetchUserDetails = async () => {
// //     try {
// //       const currentUser = firebase.auth().currentUser;
// //       if (currentUser) {
// //         const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
// //         if (userDoc.exists) {
// //           setUserDetails(userDoc.data());
// //         } else {
// //           setUserDetails({
// //             email: currentUser.email,
// //             name: currentUser.displayName,
// //             mobileNumber: currentUser.phoneNumber
// //           });
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Error fetching user details:', error);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await AsyncStorage.clear(); // Clear any async data if necessary
// //       await firebase.auth().signOut();
// //       navigation.navigate('TabNavigator'); // Navigate to the Home screen
// //     } catch (error) {
// //       console.error('Error signing out:', error);
// //     }
// //   };

// //   if (!userDetails) {
// //     return (
// //       <View style={[styles.loadingContainer, { backgroundColor: primaryColor }]}>
// //         <ActivityIndicator size="large" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         source={{ uri: 'https://i.pinimg.com/564x/34/31/96/343196e4a28ee4d35481294f96e227ad.jpg' }}
// //         style={styles.image}
// //       />
// //       <View style={styles.content}>
// //         {/* <Text style={styles.title}>Profile</Text> */}
// //         <View style={styles.detailsContainer}>
// //           <View style={styles.detailItem}>
// //             <Text style={styles.detailLabel}>Email:</Text>
// //             <Text style={styles.detailText}>{userDetails.email}</Text>
// //           </View>
// //           <View style={styles.detailItem}>
// //             <Text style={styles.detailLabel}>Name:</Text>
// //             <Text style={styles.detailText}>{userDetails.name}</Text>
// //           </View>
// //           <View style={styles.detailItem}>
// //             <Text style={styles.detailLabel}>Mobile Number:</Text>
// //             <Text style={styles.detailText}>{userDetails.mobileNumber}</Text>
// //           </View>
// //           <View style={styles.detailItem}>
// //             <Text style={styles.detailLabel}>Gender:</Text>
// //             <Text style={styles.detailText2}>{userDetails.gender}</Text>
// //           </View>
// //           <View style={styles.buttonContainer}>
// //             <TouchableOpacity onPress={handleLogout} style={styles.button}>
// //               <Text style={styles.buttonText}>Logout</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.buttonContainer}>
// //             <TouchableOpacity onPress={handleLogout} style={styles.button}>
// //               <Text style={styles.buttonText}>Delete Account</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#e6f0eb', // Yellow
// //   },
// //   image: {
// //     width: '100%',
// //     height: 300,
// //     resizeMode: 'cover',
// //   },
// //   content: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: '#e6f0eb', // White
// //     borderTopLeftRadius: 20,
// //     borderTopRightRadius: 20,
// //     marginTop: -20,
// //     elevation: 5, // Optional: for shadow effect
// //   },
// //   title: {
// //     fontSize: 24,
// //    fontFamily: 'Poppins-Bold',
// //     marginBottom: 20,
// //   },
// //   detailsContainer: {
// //     // borderWidth: 1,
// //     borderRadius: 10,
// //     // padding: 20,
// //     width: '100%',
// //   },
// //   detailItem: {
// //     marginBottom: 15,
// //   },
// //   detailLabel: {
// //     fontSize: 16,
// //    fontFamily: 'Poppins-Bold',
// //     marginRight: 10,
// //   },
// //   detailText: {
// //     fontSize: 16,
// //   },
// //   detailText2: {
// //     fontSize: 18,
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   button: {
// //     backgroundColor: '#29070798', // Example button color
// //     borderRadius: 25,
// //     paddingVertical: 8,
// //     paddingHorizontal: 20,
// //   },
// //   buttonContainer: {
// //     marginTop: 20,
// //     // alignItems: 'center', // Centering the button
// //   },
// //   buttonText: {
// //     color: '#FFFFFF', // White text color
// //     fontSize: 16,
// //     fontFamily: 'Poppins-Bold',
// //     textAlign:'center'
// //   },
// // });

// // export default Profile;











import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

import { useColorScheme } from 'react-native';
const PROFILE_COLLECTION = 'users'
const Profile = () => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('')

  const primaryColor = '#2db977'; // Yellow
  const secondaryColor = '#FFFFFF'; // White
  const textColor = '#000000'; // Black

  const fetchEmailFromStorage = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail')
      if (storedEmail !== null) {
        setEmail(storedEmail)
        await compareEmailInFirestore(storedEmail)
      } else {
        console.log('No email found in storage.')
      }
    } catch (error) {
      console.error('Failed to fetch email', error)
    }
  }

  // Function to compare email in Firestore and fetch details
  const compareEmailInFirestore = async (email) => {
    try {
      const userRef = firestore().collection(PROFILE_COLLECTION).where('email', '==', email)
      const snapshot = await userRef.get()

      if (!snapshot.empty) {
        const userData = snapshot.docs.map(doc => doc.data())[0]
        setUserDetails(userData)
        // console.log('User Data:', userData)
      } else {
        console.log('No matching user found in Firestore.')
        setUserDetails(null)
      }
    } catch (error) {
      console.error('Failed to fetch user details', error)
    }
  }

  useEffect(() => {
    fetchEmailFromStorage()
  }, [])
  const capitalizeFirstLetter = (text) => {
    if (!text) return 'Not specified';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // Clear any async data if necessary
      await firebase.auth().signOut();
      navigation.navigate('Login'); // Navigate to the Home screen
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!userDetails) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: primaryColor }]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/4d/5e/72/4d5e720188193fbdc31a6e6abc2ddbfb.jpg' }}
        style={styles.image}
      />
      
      <View style={styles.content}>
        {/* <Text style={styles.title}>Profile</Text> */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email:</Text>
            <Text style={styles.detailText}>{capitalizeFirstLetter(userDetails.email)}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Name:</Text>
            <Text style={styles.detailText}>{userDetails.name}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Mobile Number:</Text>
            <Text style={styles.detailText}>{userDetails.mobileNumber}</Text>
          </View>
          <View style={styles.detailItem}>
  <Text style={styles.detailLabel}>Gender:</Text>
  <Text style={styles.detailText2}>{capitalizeFirstLetter(userDetails.gender)}</Text>
</View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>  
          </View>
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity onPress={handleLogout} style={styles.button}>
              <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e6f0eb', // Yellow
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c0ebd6e4', // White
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    elevation: 5, // Optional: for shadow effect
  },
  title: {
    fontSize: 24,
   fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  detailsContainer: {
    // borderWidth: 1,
    borderRadius: 10,
    // padding: 20,
    width: '100%',
  },
  detailItem: {
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 16,
   fontFamily: 'Poppins-Bold',
    marginRight: 10,

    color:'#0b3520',
  },
  detailText: {
    fontSize: 16,
  },
  detailText2: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#a11d1db4', // Example button color
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    // alignItems: 'center', // Centering the button
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign:'center'
  },
});

export default Profile;
