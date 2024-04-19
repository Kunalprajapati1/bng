

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useColorScheme } from 'react-native';
// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State variable for activity indicator
//   const colorScheme = useColorScheme();
//   const textColor = colorScheme === 'dark' ? 'white' : 'black';
//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       setIsLoading(true); // Show activity indicator
//       const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      
//       // Check if the email is verified
//       if (!user.emailVerified) {
//         Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
//         setIsLoading(false); // Hide activity indicator
//         return;
//       }

//       // Save user token to AsyncStorage
//       await AsyncStorage.setItem('userToken', user.uid);
//       await AsyncStorage.setItem('userEmail', email);

//       // Navigate to the profile screen
//       navigation.navigate('Profile');
//     } catch (error) {
//       Alert.alert('Error', 'Incorrect email or password. Please try again.');
//     } finally {
//       setIsLoading(false); // Hide activity indicator in case of success or failure
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



// return (
//   <View style={styles.container}>
//     <TextInput
//       style={styles.input}
//       placeholder="Email"
//       value={email}
//       onChangeText={setEmail}
//     />
//     <TextInput
//       style={styles.input}
//       placeholder="Password"
//       value={password}
//       onChangeText={setPassword}
//       secureTextEntry
//     />
//     <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
//       {isLoading ? (
//         <ActivityIndicator size="small" color="white" />
//       ) : (
//         <Text style={styles.loginButtonText}>Login</Text>
//       )}
//     </TouchableOpacity>
//     <TouchableOpacity onPress={handleForgotPassword}>
//       <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
//       <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//     </TouchableOpacity>
//   </View>
// );
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
//   activityIndicator: {
//     marginTop: 10,
//   },
// });

// export default Login;


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const colorScheme = useColorScheme();
  // const textColor = colorScheme === 'dark' ? 'white' : 'black';
  const textColor = colorScheme === 'dark' ? '#000000' : '#000000';

  const handleLogin = async () => {
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

      navigation.navigate('Profile');
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

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={[styles.input, { color: 'black'}]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      /> */}


<TextInput
  style={[styles.input, { color: 'black' }]}
  placeholder="Email"
  placeholderTextColor="black"
  value={email}
  onChangeText={setEmail}
/>
      <TextInput
        style={[styles.input, { color: 'black'}]}
        placeholder="Password"
  placeholderTextColor="black"

        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={[styles.loginButton, { backgroundColor: textColor === 'dark' ? 'blue' : 'gray' }]} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size="small" color={textColor} />
        ) : (
          <Text style={[styles.loginButtonText, { color: textColor }]}>Login</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={[styles.forgotPasswordText]}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
        <Text style={[styles.signupText]}>Don't have an account? Sign Up</Text>
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
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 10,
    color:'black',

    textDecorationLine: 'underline',
  },
  signupText: {
    marginTop: 20,
    
    color:'black',
    textDecorationLine: 'underline',
  },
});

export default Login;
