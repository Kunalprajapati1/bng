

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker';
// import { useColorScheme } from 'react-native';
// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [gender, setGender] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();
//   const colorScheme = useColorScheme();
//   const textColor = colorScheme === 'dark' ? 'white' : 'black';

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = async () => {
//     try {
//       setLoading(true);

//       // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       const passwordRegex = /^(?=.*\d).{8,}$/;

//       if (!passwordRegex.test(password)) {
//         Alert.alert(
//           'Invalid Password',
//           'Password must contain at least 8 characters including at least one letter and one number.'
//         );
//         return;
//       }
  
//       const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
//       const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
//       if (!isValidEmail) {
//         Alert.alert('Invalid Email', 'Please enter a valid email address.');
//         return;
//       }
  
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         email,
//         mobileNumber,
//         gender,
//       });
  
//       await AsyncStorage.setItem('userEmail', email);
  
//       await user.sendEmailVerification();
  
//       Alert.alert(
//         'Sign Up Successful',
//         'User account created successfully. Please verify your email.',
//         [
//           { text: 'OK', onPress: () => navigation.navigate('Login') }
//         ]
//       );
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     } finally {
//       setLoading(false);
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
//         secureTextEntry={!showPassword}
//       />
//       <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
//         <Text style={styles.togglePasswordButtonText}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
//       </TouchableOpacity>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>
//       {/* Conditional rendering of sign-up button with activity indicator */}
//       {loading ? (
//         <ActivityIndicator style={styles.signUpButton} size="large" color="white" />
//       ) : (
//         <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       )}
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
//   togglePasswordButton: {
//     alignSelf: 'flex-end',
//     marginTop: -25,
//     bottom:20,
//   },
//   togglePasswordButtonText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useColorScheme } from 'react-native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  // const textColor = colorScheme === 'dark' ? 'white' : 'black';
  // const textColor = colorScheme === 'dark' ? '#000000' : '#ffffff';
  const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);

      // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const passwordRegex = /^(?=.*\d).{8,}$/;

      if (!passwordRegex.test(password)) {
        Alert.alert(
          'Invalid Password',
          'Password must contain at least 8 characters including at least one letter and one number.'
        );
        return;
      }
  
      const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com'];
      const isValidEmail = validDomains.some(domain => email.endsWith(domain));
  
      if (!isValidEmail) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
        return;
      }
  
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      await firebase.firestore().collection('users').doc(user.uid).set({
        name,
        email,
        mobileNumber,
        gender,
      });
  
      await AsyncStorage.setItem('userEmail', email);
  
      await user.sendEmailVerification();
  
      Alert.alert(
        'Sign Up Successful',
        'User account created successfully. Please verify your email.',
        [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]
      );
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input]}
        placeholder="Name"
  placeholderTextColor="black"

        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Email"
  placeholderTextColor="black"

        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Password"
  placeholderTextColor="black"

        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
        <Text style={[styles.togglePasswordButtonText, { color: textColor }]}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
      </TouchableOpacity>
      <TextInput
        style={[styles.input, ]}
        placeholder="Mobile Number"
  placeholderTextColor="black"

        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={gender}
        style={[styles.input, { color: textColor }]}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      {/* Conditional rendering of sign-up button with activity indicator */}
      {loading ? (
        <ActivityIndicator style={styles.signUpButton} size="large" color={textColor} />
      ) : (
        <TouchableOpacity style={[styles.signUpButton, { backgroundColor: textColor === 'dark' ? 'blue' : 'gray' }]} onPress={handleSignUp}>
          <Text style={[styles.signUpButtonText, { color: textColor }]}>Sign Up</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.loginText, { color: textColor }]}>Login</Text>
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
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  togglePasswordButton: {
    alignSelf: 'flex-end',
    marginTop: -25,
    bottom:20,
  },
  togglePasswordButtonText: {
    textDecorationLine: 'underline',
  },
});

export default SignUp;

