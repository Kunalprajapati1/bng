import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const emailSubject = 'Contact Inquiry';
    const emailBody = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
    Linking.openURL(`mailto:skparjapati125@gmail.com?subject=${emailSubject}&body=${emailBody}`);
  };

  const handleOpenWhatsApp = () => {
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
    Linking.openURL(`whatsapp://send?text=${whatsappMessage}&phone=9818908237`);
  };

  const handleCall = () => {
    Linking.openURL('tel:9818908237');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={handleSendEmail}>
          <Text style={styles.optionText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleOpenWhatsApp}>
          <Text style={styles.optionText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleCall}>
          <Text style={styles.optionText}>Call</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Type your message here"
        value={message}
        onChangeText={setMessage}
        multiline
      />
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
  options: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
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
});

export default Contact;
