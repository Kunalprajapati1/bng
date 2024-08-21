
// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useColorScheme } from 'react-native';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const colorScheme = useColorScheme();
//   // const textColor = colorScheme === 'dark' ? 'white' : 'black';
//   const textColor = colorScheme === 'dark' ? '#000000' : '#000000';

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      
//       if (!user.emailVerified) {
//         Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
//         setIsLoading(false);
//         return;
//       }

//       await AsyncStorage.setItem('userToken', user.uid);
//       await AsyncStorage.setItem('userEmail', email);

//       navigation.navigate('Profile');
//     } catch (error) {
//       Alert.alert('Error', 'Incorrect email or password. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert('Error', 'Please enter your email address');
//       return;
//     }

//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       Alert.alert('Password Reset Email Sent', 'An email with instructions to reset your password has been sent to your email address.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* <TextInput
//         style={[styles.input, { color: 'black'}]}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       /> */}


// <TextInput
//   style={[styles.input, { color: 'black' }]}
//   placeholder="Email"
//   placeholderTextColor="black"
//   value={email}
//   onChangeText={setEmail}
// />
//       <TextInput
//         style={[styles.input, { color: 'black'}]}
//         placeholder="Password"
//   placeholderTextColor="black"

//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={[styles.loginButton, { backgroundColor: textColor === 'dark' ? 'blue' : 'gray' }]} onPress={handleLogin} disabled={isLoading}>
//         {isLoading ? (
//           <ActivityIndicator size="small" color={textColor} />
//         ) : (
//           <Text style={[styles.loginButtonText, { color: textColor }]}>Login</Text>
//         )}
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={[styles.forgotPasswordText]}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
//         <Text style={[styles.signupText]}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   loginButton: {
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color:'black',

//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
    
//     color:'black',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;




// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, loading,ScrollView,Text, Alert, StyleSheet, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useColorScheme } from 'react-native';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const colorScheme = useColorScheme();
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   // const textColor = colorScheme === 'dark' ? 'white' : 'black';
  

//   const handleContinue = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      
//       if (!user.emailVerified) {
//         Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
//         setIsLoading(false);
//         return;
//       }

//       await AsyncStorage.setItem('userToken', user.uid);
//       await AsyncStorage.setItem('userEmail', email);

//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Error', 'Incorrect email or password. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert('Error', 'Please enter your email address');
//       return;
//     }

//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       Alert.alert('Password Reset Email Sent', 'An email with instructions to reset your password has been sent to your email address.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };
//   return (
//     <ScrollView contentContainerStyle={styles.scrollView}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Log In to Your Account</Text>
//         <Text style={styles.sheading}>
//           Thank you for again Re-starting your Journey with us!
//         </Text>
//         <View style={styles.textField}>
//           <View>
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your email"
//               placeholderTextColor='black'
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//             />
//           </View>
//           <View>
//             <Text style={styles.label}>Password</Text>
//             <View style={styles.passwordContainer}>
//               <TextInput
//                 style={styles.passwordInput}
//                 placeholder="Enter your password"
//               placeholderTextColor='black'

//                 secureTextEntry={!isPasswordVisible}
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//               />
//               <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
//                 <View style={styles.eyeIcon}>
//                   <Text style={styles.eyeIcon}>{isPasswordVisible ? '👁️' : '👁️‍🗨'}</Text>
//                 </View>
//               </TouchableWithoutFeedback>
//             </View>
//           </View>
//           <TouchableOpacity onPress={handleContinue} style={styles.button} disabled={loading}>
//             {loading ? (
//               <ActivityIndicator color="white" />
//             ) : (
//               <Text style={styles.buttonText}>Login</Text>
//             )}
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleForgotPassword}>
//             <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#01b25f', marginTop: 10, textDecorationLine: 'underline', letterSpacing: 1, fontSize: 18 }}>
//               Forgot Password?
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <TouchableOpacity onPress={() => { navigation.navigate('Sign') }}>
//             <Text style={{ fontFamily: 'Poppins-SemiBold', justifyContent: 'center', marginTop: 0,color:'black' }}> Don't have an account? <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#01b25f', textDecorationLine: 'underline' }}>Sign In</Text></Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   heading: {
//     textDecorationLine:'underline',
//     fontSize: 28,
//     textAlign: 'center',
//     marginVertical: 65,
//     color:'black',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   sheading: {
//     color:'black',

//     fontSize: 19,
//     textAlign: 'center',
//     bottom:30,
//     fontFamily: 'Poppins-Regular',
//   },
//   textField: {
//     color:'black',

//     bottom:50,
//     marginVertical: 65,
//     paddingHorizontal: 30,
//     width: '100%',
//   },
//   label: {
//     color:'black',

//     fontFamily: 'Poppins-SemiBold',
//     paddingHorizontal: 2,
//     letterSpacing:1,
//     marginBottom:20,
//     textDecorationLine:'underline',
//     fontSize:17,
//   },
//   input: {
//     color:'black',

//     letterSpacing:2,
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: '100%',
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 17,
//     fontFamily: 'Poppins-Regular',
//   },
//   passwordContainer: {
//     color:'black',

//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   passwordInput: {
//     color:'black',

//     flex: 1,
//     letterSpacing:2,
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 17,
//     fontFamily: 'Poppins-Regular',
//   },
//   eyeIcon: {
//     marginLeft: -17,
//     marginTop: -10,
//     fontSize: 22,
//   },
//   button: {
//     backgroundColor: '#01b25f',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     width: '100%',
//     borderRadius: 30,
//     marginLeft: '0%',
//     marginTop: 20,
//     fontFamily: 'Poppins-Regular',
//   },
//   buttonText: {
//     color: 'white',
//     letterSpacing:1,
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontFamily: 'Poppins-Regular',
//   },
// });


// export default Login;


import React, { useState } from 'react';
import {
  View, TextInput, TouchableOpacity, ScrollView, Text, Alert,
  StyleSheet, ActivityIndicator, TouchableWithoutFeedback
} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const colorScheme = useColorScheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const handleContinue = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      
      if (!user.emailVerified) {
        Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
        setIsLoading(false);
        return;
      }

      await AsyncStorage.setItem('userToken', user.uid);
      await AsyncStorage.setItem('userEmail', email);

      navigation.navigate('TabNavigator');
    } catch (error) {
      Alert.alert('Error', 'Incorrect email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset Email Sent', 'An email with instructions to reset your password has been sent to your email address.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isDarkMode = colorScheme === 'dark';
  const textColor = isDarkMode ? '#e6f0eb' : '#212121';

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={[styles.heading, { color: textColor }]}>Welcome Back!</Text>
        <Text style={[styles.sheading, { color: textColor }]}>
          Thank you for again Re-starting your Journey with us!
        </Text>
        <View style={styles.textField}>
          <View>
            <Text style={[styles.label, { color: textColor }]}>Email</Text>
            <TextInput
              style={[styles.input, { color: textColor, borderColor: isDarkMode ? 'white' : '#01b25f' }]}
              placeholder="Enter your email"
              placeholderTextColor={textColor}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <Text style={[styles.label, { color: textColor }]}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, { color: textColor, borderColor: isDarkMode ? 'white' : '#01b25f'}]}
                placeholder="Enter your password"
                placeholderTextColor={textColor}
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <View style={styles.eyeIcon}>
                  <Text style={styles.eyeIcon}>{isPasswordVisible ? '👁️' : '👁️‍🗨️'}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <TouchableOpacity onPress={handleContinue} style={styles.button} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
      
            <TouchableOpacity onPress={() => { navigation.navigate('Sign') }}>
              <Text style={styles.signInText}>
              Don't have an account? Sign In</Text>
            </TouchableOpacity>
          
        </View>
        <View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor:'#e6f0eb'
  },
  container: {
    flex: 1,
    alignItems: 'left',
    marginTop: 60,
  },
  heading: {
    // textDecorationLine: 'underline',
    fontSize: 28,
    textAlign: 'left',
    marginTop: 65,bottom: 20,
    paddingHorizontal:30,
    fontFamily: 'Poppins-SemiBold',
  },
  
  sheading: {
    fontSize: 19,
    textAlign: 'left',
    bottom: 20, paddingHorizontal:30,
    fontFamily: 'Poppins-Regular',
  },
  textField: {
    bottom: 50,
    marginVertical: 85,
    paddingHorizontal: 30,
    // marginTop:10,
    width: '100%',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: 2,
    // letterSpacing: 1,
    marginBottom: 10,
    // textDecorationLine: 'underline',
    fontSize: 17,
  },
  input: {
    // letterSpacing: 2,
    height: 50,
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 16,
    borderRadius: 7,
    fontFamily: 'Poppins-Regular',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    // letterSpacing: 2,
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
    borderRadius:  7,
    fontFamily: 'Poppins-Regular',
  },
  eyeIcon: {
    marginLeft: -17,
    marginTop: -10,
    fontSize: 22,
  },
  button: {
    backgroundColor: '#01b25f',
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    borderRadius: 30,
    marginLeft: '0%',
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
  },
  buttonText: {
    color: 'white',
    // letterSpacing: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#01b25f',
    marginTop: 10,
    // textDecorationLine: 'underline',
    // letterSpacing: 1,
    fontSize: 18,
  },
  signInText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: 5,
   
    color: 'black'
  },
  signInLink: {
    fontFamily: 'Poppins-SemiBold',
    color: '#01b25f',
    // textDecorationLine: 'underline',
    marginTop:4,
    marginLeft:3,
    textAlign: 'right',
  }
});

export default Login;

