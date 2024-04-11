
// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Navigate to the home screen or any other screen you desire
//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Error', error.message);
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
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
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
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;


// Login.js

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Save user token to AsyncStorage
//       await AsyncStorage.setItem('userToken', userToken);

//       // Navigate to the home screen or any other screen you desire
//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Error', error.message);
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
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
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
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;
// Login.js


// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Save user token to AsyncStorage
//       await AsyncStorage.setItem('userToken', user.uid);
//       await AsyncStorage.setItem('userEmail', email);

//       // Navigate to the profile screen
//       navigation.navigate('Profile');
//     } catch (error) {
//       Alert.alert('Error', error.message);
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
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
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
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   signupText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State variable for activity indicator

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true); // Show activity indicator
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      
      // Check if the email is verified
      if (!user.emailVerified) {
        Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
        setIsLoading(false); // Hide activity indicator
        return;
      }

      // Save user token to AsyncStorage
      await AsyncStorage.setItem('userToken', user.uid);
      await AsyncStorage.setItem('userEmail', email);

      // Navigate to the profile screen
      navigation.navigate('Profile');
    } catch (error) {
      Alert.alert('Error', 'Incorrect email or password. Please try again.');
    } finally {
      setIsLoading(false); // Hide activity indicator in case of success or failure
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

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
//         <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//       {isLoading && <ActivityIndicator style={styles.activityIndicator} size="large" color="blue" />}
//     </View>
//   );
// };

return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.loginButtonText}>Login</Text>
      )}
    </TouchableOpacity>
    <TouchableOpacity onPress={handleForgotPassword}>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
      <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  signupText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  activityIndicator: {
    marginTop: 10,
  },
});

export default Login;
