

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
//   // const textColor = colorScheme === 'dark' ? 'white' : 'black';
//   // const textColor = colorScheme === 'dark' ? '#000000' : '#ffffff';
//   const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


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
//         style={[styles.input]}
//         placeholder="Name"
//   placeholderTextColor="black"

//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={[styles.input]}
//         placeholder="Email"
//   placeholderTextColor="black"

//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={[styles.input]}
//         placeholder="Password"
//   placeholderTextColor="black"

//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={!showPassword}
//       />
//       <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
//         <Text style={[styles.togglePasswordButtonText, { color: textColor }]}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
//       </TouchableOpacity>
//       <TextInput
//         style={[styles.input, ]}
//         placeholder="Mobile Number"
//   placeholderTextColor="black"

//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="numeric"
//       />
//       <Picker
//         selectedValue={gender}
//         style={[styles.input, { color: textColor }]}
//         onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>

//       <View>


//       </View>
//       {/* Conditional rendering of sign-up button with activity indicator */}
//       {loading ? (
//         <ActivityIndicator style={styles.signUpButton} size="large" color={textColor} />
//       ) : (
//         <TouchableOpacity style={[styles.signUpButton, { backgroundColor: textColor === 'dark' ? 'blue' : 'gray' }]} onPress={handleSignUp}>
//           <Text style={[styles.signUpButtonText, { color: textColor }]}>Sign Up</Text>
//         </TouchableOpacity>
//       )}
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={[styles.loginText, { color: textColor }]}>Login</Text>
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
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signUpButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 20,
//     textDecorationLine: 'underline',
//   },
//   togglePasswordButton: {
//     alignSelf: 'flex-end',
//     marginTop: -25,
//     bottom:20,
//   },
//   togglePasswordButtonText: {
//     textDecorationLine: 'underline',
//   },
// });

// export default SignUp;



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
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

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = async () => {
//     try {
//       setLoading(true);

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
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor="black"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="black"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="black"
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
//         placeholderTextColor="black"
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

//       <View></View>
//       {loading ? (
//         <ActivityIndicator style={styles.button} size="large" color="white" />
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//       )}
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.buttonText2}>Login</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({


// container: {
//   flexGrow: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   paddingVertical: 20,
// },
// title: {
//   fontSize: 24,
//   fontWeight: 'bold',
//   marginBottom: 20,
//   color: '#000', // Black color for Sign Up text
// },
// input: {
//   // letterSpacing: 2,
//   height: 50,
//   borderColor: 'gray',
//   borderWidth: 1,
//   width: '80%',
//   paddingHorizontal: 20,
//   marginBottom: 23,
//   borderRadius: 27,
//   fontFamily: 'Poppins-Regular',
//   color: '#000', // Black color for input text
// },
// button: {
//   backgroundColor: '#01b05f',
//   paddingVertical: 15,
//   paddingHorizontal: 30,
//   width: '80%',
//   borderRadius: 30,
//   marginTop: 20,
//   marginBottom: 30,
//   fontFamily: 'Poppins-Bold',
// },
// buttonText: {
//   color: '#ffffff',
//   fontSize: 18,
//   // fontWeight: 'bold',
//   textAlign: 'center',
//   fontFamily: 'Poppins-Regular',
// },
// buttonText2: {
//   color: '#01b05f',
//   fontSize: 18,
//   bottom: 20,
//   // fontWeight: 'bold',
//   textAlign: 'center',
//   fontFamily: 'Poppins-Bold',
// },
// togglePasswordButton: {
//   alignSelf: 'flex-end',
//   marginTop: -25,
//   bottom: 20,
// },
// togglePasswordButtonText: {
//   textDecorationLine: 'underline',
//   fontFamily: 'Poppins-Regular',
//   right: 60,
//   bottom: 7,
//   color: '#000', // Black color for toggle password text
// },
// });

// export default SignUp;
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import Svg, { Path } from 'react-native-svg'; // Import Svg and Path for the wave

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);

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
    <ScrollView contentContainerStyle={styles.container}>
      <Svg
        height="90"
        width="100%"
        viewBox="0 0 1440 320"
        style={styles.topWave}
      >
        <Path
          fill="#01b05f"
          d="M0,32L80,58.7C160,85,320,139,480,176C640,213,800,235,960,213.3C1120,192,1280,128,1360,96L1440,64V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        />
      </Svg>

      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.togglePasswordButton}>
        <Text style={styles.togglePasswordButtonText}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="black"
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
        <Picker.Item label="Prefer Not to Say" value="prefer_not_to_say" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <View></View>
      {loading ? (
        <ActivityIndicator style={styles.button} size="large" color="white" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText2}>Login</Text>
      </TouchableOpacity>

      <Svg
        height="90"
        width="100%"
        viewBox="0 0 1440 320"
        style={styles.bottomWave}
      >
        <Path
          fill="#01b05f"
          d="M0,288L80,245.3C160,203,320,117,480,101.3C640,85,800,139,960,154.7C1120,171,1280,149,1360,138.7L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
        />
      </Svg>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0, // Remove any vertical padding
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 20,
    marginBottom: 23,
    borderRadius: 27,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  button: {
    backgroundColor: '#01b05f',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 30,
    fontFamily: 'Poppins-Bold',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  buttonText2: {
    color: '#01b05f',
    fontSize: 18,
    bottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  togglePasswordButton: {
    alignSelf: 'flex-end',
    marginTop: -25,
    bottom: 20,
  },
  togglePasswordButtonText: {
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    right: 60,
    bottom: 7,
    color: '#000',
  },
  topWave: {
    position: 'absolute',
    top: -3,
    left: 0,
    width: '100%',
  },
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
});

export default SignUp;
