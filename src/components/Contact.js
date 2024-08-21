

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,Image, ImageBackground } from 'react-native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore from Firebase
// import { Linking } from 'react-native';
// import { useColorScheme } from 'react-native';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const colorScheme = useColorScheme();
//   // const textColor = colorScheme === 'dark' ? '#000000' : '#ffffff';
//   const textColor = colorScheme === 'dark' ? '#000000' : '#000000';


//   const handleSubmit = () => {
//     // Validate if all fields are filled
//     if (!name || !email || !phoneNumber || !message) {
//       Alert.alert('All fields are required');
//       return;
//     }

//     // Save the details to Firestore
//     firestore()
//       .collection('contactForms') // Specify the collection in Firestore
//       .add({
//         name: name,
//         email: email,
//         phoneNumber: phoneNumber,
//         message: message,
//       })
//       .then(() => {
//         console.log('Contact form submitted successfully!');
//         // Open default email client with pre-filled details
//         Linking.openURL(`mailto:skparjapati125@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone Number: ${phoneNumber}%0D%0AMessage: ${message}`);
//       })
//       .catch(error => {
//         console.error('Error submitting contact form: ', error);
//       });
//   };

//   return (

//     <ImageBackground style={{ flex:1}} source={{uri:'https://i.pinimg.com/736x/e5/f2/e7/e5f2e7382c09b10a125833611b09e056.jpg'}}>
//     <View style={styles.container}>
//         {/* <Image source={require('../components/assets/we.png')} style={styles.image2} /> */}
//         <Text style={styles.title}>Contact Us</Text>
//         <View style={styles.container1}>
//       {/* <Text style={[styles.title]}>Contact Us</Text> */}
//       <TextInput
//         style={[styles.input, { color: textColor }]}
//         placeholder="Your Name *"
//   placeholderTextColor="#e6f0eb"

//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={[styles.input, { color: textColor }]}
//         placeholder="Your Email *"
//   placeholderTextColor="#e6f0eb"

//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={[styles.input, { color: textColor }]}
//         placeholder="Your Phone Number *"
//   placeholderTextColor="#e6f0eb"

//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <TextInput
//         style={[styles.input, { height: 100, color: textColor }]}
//         placeholder="Type your message here *"
//         value={message}
//   placeholderTextColor="#e6f0eb"

//         onChangeText={setMessage}
//         multiline
//       />
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={[styles.submitButtonText, { color: textColor }]}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container1: {
     
//     justifyContent: 'center',
//     // alignItems: 'center',
 
//     // bottom:60,
//     padding: 20,
//     backgroundColor:'#03140bc3',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
// // padding:20,
//     // bottom:60,
//     // padding: 20,
//     // backgroundColor:'#e6f0ebb1',
//   },
//   title: {
//     fontSize: 24,
//     // fontWeight: 'bold',
//     color: '#e6f0eb',
//     marginBottom: 16,
//     textAlign: 'center',
//     fontFamily: 'Poppins-SemiBold',
//   },
//   image2: {
//     width: '100%',
//     height: 150,
    
    
//   },
//   input: {
//     width: '100%',
//     fontFamily: 'Poppins-SemiBold',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//     color: '#e6f0eb', 
//   },
//   submitButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 90,
//     borderRadius: 10,
//     marginTop: 10,
//     backgroundColor:'#2db977',
//   },
//   submitButtonText: {
//     fontSize: 18,
//     fontFamily: 'Poppins-SemiBold',
//     color: '#e6f0eb',
//   },
// });

// export default Contact;
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Linking } from 'react-native';
import { useColorScheme } from 'react-native';

const Contact = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const colorScheme = useColorScheme();
  const textColor = '#FFFFFF';  // Text color ko white kar diya gaya hai

  const handleSubmit = () => {
    if (!name || !email || !phoneNumber || !message) {
      Alert.alert('All fields are required');
      return;
    }

    firestore()
      .collection('contactForms')
      .add({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      })
      .then(() => {
        console.log('Contact form submitted successfully!');
        Linking.openURL(`mailto:skparjapati125@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone Number: ${phoneNumber}%0D%0AMessage: ${message}`);
      })
      .catch(error => {
        console.error('Error submitting contact form: ', error);
      });
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={{ uri: 'https://i.pinimg.com/736x/e5/f2/e7/e5f2e7382c09b10a125833611b09e056.jpg' }}>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('TabNavigator'); }}>
          <Image style={styles.cross} tintColor='#e6f0eb' source={require('../components/assets/close.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={[styles.input, { color: textColor }]}
            placeholder="Your Name *"
            placeholderTextColor="#e6f0eb"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[styles.input, { color: textColor }]}
            placeholder="Your Email *"
            placeholderTextColor="#e6f0eb"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, { color: textColor }]}
            placeholder="Your Phone Number *"
            placeholderTextColor="#e6f0eb"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextInput
            style={[styles.input, { height: 100, color: textColor }]}
            placeholder="Type your message here *"
            placeholderTextColor="#e6f0eb"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={[styles.submitButtonText, { color: textColor }]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  closeButtonContainer: {
    alignItems: 'flex-start',
    padding: 20,
    // backgroundColor: '#00000000',
  },
  cross: {
    width: 20,
    height: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#e6f0eb',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#03140bc3',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#FFFFFF', 
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#2db977',
  },
  submitButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
});

export default Contact;
