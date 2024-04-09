// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
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
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
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
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     try {
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//       });

//       // Save user email to AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);

//       Alert.alert('Sign Up Successful', 'User account created successfully.');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
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
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Login</Text>
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
//   signUpButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState(''); // New state variable for gender
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

      await firebase.firestore().collection('users').doc(user.uid).set({
        name,
        email,
        mobileNumber,
        gender, // Save gender to the database
      });

      // Save user email to AsyncStorage
      await AsyncStorage.setItem('userEmail', email);

      Alert.alert('Sign Up Successful', 'User account created successfully.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
      </Picker>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
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
  signUpButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
