// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
// import React, { useState } from 'react';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSendEmail = () => {
//     const emailSubject = 'Contact Inquiry';
//     const emailBody = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
//     Linking.openURL(`mailto:skparjapati125@gmail.com?subject=${emailSubject}&body=${emailBody}`);
//   };

//   const handleOpenWhatsApp = () => {
//     const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
//     Linking.openURL(`whatsapp://send?text=${whatsappMessage}&phone=9818908237`);
//   };

//   const handleCall = () => {
//     Linking.openURL('tel:9818908237');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contact Us</Text>
//       <View style={styles.options}>
//         <TouchableOpacity style={styles.optionButton} onPress={handleSendEmail}>
//           <Text style={styles.optionText}>Email</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleOpenWhatsApp}>
//           <Text style={styles.optionText}>WhatsApp</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleCall}>
//           <Text style={styles.optionText}>Call</Text>
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type your message here"
//         value={message}
//         onChangeText={setMessage}
//         multiline
//       />
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
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   options: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   optionButton: {
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
// });

// export default Contact;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import firestore from '@react-native-firebase/firestore'; // Import Firestore from Firebase

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
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
//         // You can add further actions here if needed
//       })
//       .catch(error => {
//         console.error('Error submitting contact form: ', error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contact Us</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Your Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type your message here"
//         value={message}
//         onChangeText={setMessage}
//         multiline
//       />
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
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
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 20,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default Contact;

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore from Firebase
import { Linking } from 'react-native';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Validate if all fields are filled
    if (!name || !email || !phoneNumber || !message) {
      Alert.alert('All fields are required');
      return;
    }

    // Save the details to Firestore
    firestore()
      .collection('contactForms') // Specify the collection in Firestore
      .add({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      })
      .then(() => {
        console.log('Contact form submitted successfully!');
        // Open default email client with pre-filled details
        Linking.openURL(`mailto:skparjapati125@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone Number: ${phoneNumber}%0D%0AMessage: ${message}`);
      })
      .catch(error => {
        console.error('Error submitting contact form: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name *"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email *"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Phone Number *"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={[styles.input, {height: 100}]}
        placeholder="Type your message here *"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Contact;
