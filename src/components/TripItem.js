// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, Linking } from 'react-native';
// import PropTypes from 'prop-types';

// // Utility function to truncate long text
// const truncateText = (text, maxLength) => {
//   if (text.length <= maxLength) return text;
//   return text.slice(0, maxLength) + '...';
// };

// const TripItem = ({ item }) => {
//   const maxLength = 20; // Maximum length for source and destination text
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleEmailPress = () => {
//     if (item.email) {
//       const subject = `Interested in Trip`;
//       const body = `Hi,\n\nI am interested in the following trip:\n\nSource: ${item.source}\nDestination: ${item.destination}\nDate: ${item.selectedDate}\nOption: ${item.option}\nDistance: ${item.distance || 'NA'}\nPrice: ${item.price}\n\nPlease let me know the details.\n\nThanks!`;

//       Linking.openURL(`mailto:${item.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
//     }
//   };

//   const handlePhonePress = () => {
//     if (item.mobileNumber) {
//       Linking.openURL(`tel:${item.mobileNumber}`);
//     }
//   };

//   return (
//     <View style={styles.tripItem}>
//       <Text style={styles.tripText}>
//         {truncateText(item.source, maxLength)} {' >>> '} {truncateText(item.destination, maxLength)}
//       </Text>
//       <Text style={styles.tripText}>Date: {item.selectedDate}</Text>
//       <Text style={styles.tripText}>Option: {item.option}</Text>
//       <Text style={styles.tripText}>Distance: {item.distance}</Text>
//       <Text style={styles.tripText}>Price: {item.price}</Text>
//       <TouchableOpacity style={styles.connectButton} onPress={() => setModalVisible(true)}>
//         <Text style={styles.connectButtonText}>Connect</Text>
//       </TouchableOpacity>

//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View style={styles.modalView}>
//           <View style={styles.modalContent}>
//             <Text style={styles.labelText} onPress={handleEmailPress}>Email:</Text>
//             <Text style={[styles.modalText, item.email ? styles.blueText : null, styles.underline]} onPress={handleEmailPress}>{item.email || 'NA'}</Text>
//             <Text style={styles.labelText} onPress={handlePhonePress}>Mobile:</Text>
//             <Text style={[styles.modalText, item.mobileNumber ? styles.blueText : null, styles.underline]} onPress={handlePhonePress}>{item.mobileNumber || 'NA'}</Text>
//             <TouchableOpacity style={styles.CloseButton} onPress={() => setModalVisible(false)} >
//               <Text style={styles.Close} >Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// TripItem.propTypes = {
//     item: PropTypes.shape({
//       email: PropTypes.string,
//       source: PropTypes.string.isRequired,
//       destination: PropTypes.string.isRequired,
//       selectedDate: PropTypes.string.isRequired,
//       option: PropTypes.string.isRequired,
//       distance: PropTypes.string, // Make distance prop optional
//       price: PropTypes.string, // Make price prop optional
//       mobileNumber: PropTypes.string,
//     }).isRequired,
//   };

// const styles = StyleSheet.create({
//   tripItem: {
//     backgroundColor: '#ffffffe4',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     elevation: 3,
//     position: 'relative',
//   },
//   tripText: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//   },
//   connectButton: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     backgroundColor: '#2db977',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   connectButtonText: {
//     color: '#FFF',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   modalView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     height: '50%',
//     backgroundColor: '#FFF',
//     width: '100%',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//   },
//   labelText: {
//     color: 'black',
//     fontSize: 18,
//     marginBottom: 5,
//     textDecorationLine: 'underline',
//   },
//   modalText: {
//     height: 45,
//     borderRadius: 30,
//     marginTop: 10,
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#000',
//   },
//   underline: {
//     textDecorationLine: 'underline',
//   },
//   blueText: {
//     color: 'blue',
//   },
//   Close: {
//     color: '#ebebeb',
//     fontSize: 24,
//     alignSelf: 'center',
//     top: 10,
//   },
//   CloseButton: {
//     marginTop: '30%',
//     backgroundColor: '#007BFF',
//     borderRadius: 30,
//     height: 50,
//     alignItems: 'center',
//   },
// });

// export default TripItem;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const TripItem = ({item}) => {
  // const maxLength = 20;
  const [connectModalVisible, setConnectModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  const handleEmailPress = () => {
    if (item.email) {
      const subject = `Interested in Trip`;
      const body = `Hi,\n\nI am interested in the following trip:\n\nSource: ${
        item.source
      }\nDestination: ${item.destination}\nDate: ${
        item.selectedDate
      }\nOption: ${item.option}\nDistance: ${item.distance || 'NA'}\nPrice: ${
        item.price
      }\n\nPlease let me know the details.\n\nThanks!`;

      Linking.openURL(
        `mailto:${item.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`,
      );
    }
  };

  const handlePhonePress = () => {
    if (item.mobileNumber) {
      Linking.openURL(`tel:${item.mobileNumber}`);
    }
  };

  const handleInfoPress = () => {
    setInfoModalVisible(true);
  };

  const handleConnectPress = () => {
    setConnectModalVisible(true);
  };

  return (
    <View style={styles.tripItem}>
      {/* <Text style={styles.tripText}>
        {truncateText(item.source)} {' >>> '}{' '}
        {truncateText(item.destination)}
      </Text> */}
      <Text style={styles.labelText}>Source:</Text>
      <Text style={styles.tripText}>
        {truncateText(item.source)} 
      </Text>
       <Text style={styles.labelText}>Destination: </Text>
        <Text style={styles.tripText}>
        {truncateText(item.destination)}
      </Text>
      <Text style={styles.tripText}>Date: {item.selectedDate}</Text>
      <Text style={styles.tripText}>Option: {item.option}</Text>
      {/* <Text style={styles.tripText}>Distance: {item.distance}</Text>
      <Text style={styles.tripText}>Price: {item.price}</Text> */}
      <TouchableOpacity
        style={styles.connectButton}
        onPress={handleConnectPress}>
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.infoButton} onPress={handleInfoPress}>
        <Text style={styles.infoButtonText}>Info</Text>
      </TouchableOpacity>

      {/* Connect Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={connectModalVisible}
        onRequestClose={() => {
          setConnectModalVisible(false);
        }}>
        <View style={[styles.modalView, styles.bottomModal]}>
          <View style={styles.connectModalContent}>
            <Text style={styles.labelText}>Email:</Text>
            <Text
              style={[
                styles.modalText2,
                item.email ? styles.blueText : null,
                // styles.underline,
              ]}
              onPress={handleEmailPress}>
              {item.email || 'NA'}
            </Text>
            <Text style={styles.labelText}>Mobile:</Text>
            <Text
              style={[
                styles.modalText2,
                item.mobileNumber ? styles.blueText : null,
                // styles.underline,
              ]}
              onPress={handlePhonePress}>
              {item.mobileNumber || 'NA'}
            </Text>
            <TouchableOpacity
              style={styles.closeButton2}
              onPress={() => setConnectModalVisible(false)}>
              <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Info Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={infoModalVisible}
        onRequestClose={() => {
          setInfoModalVisible(false);
        }}>
        <View style={[styles.modalView, styles.bottomModal]}>
          <View style={styles.infoModalContent}>
            <Text style={styles.labelText}>Name:</Text>
            <Text style={styles.modalText3}>{item.name || 'Not Mentioned'}</Text>
            {/* <Text style={styles.labelText}>Trip Details:</Text> */}
            <Text style={styles.labelText}>Source: </Text>
            <Text style={styles.modalText}>{item.source || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Destination: </Text>
            <Text style={styles.modalText}>{item.destination || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Date:</Text>
            <Text style={styles.modalText}>{item.selectedDate }</Text>
            <Text style={styles.labelText}>Option:</Text>
            <Text style={styles.modalText}>{item.option || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Distance:</Text>
            <Text style={styles.modalText}>{item.distance || 'Not Mentioned'}</Text>
            <Text style={styles.labelText}>Price: </Text>
            <Text style={styles.modalText}>{item.price || 'Not Mentioned'}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setInfoModalVisible(false)}>
              <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

TripItem.propTypes = {
  item: PropTypes.shape({
    email: PropTypes.string,
    source: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    selectedDate: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    distance: PropTypes.string,
    price: PropTypes.string,
    mobileNumber: PropTypes.string,
    name: PropTypes.string, // Add name property
  }).isRequired,
};

const styles = StyleSheet.create({
  tripItem: {
    // backgroundColor: '#b1dbd6',
    backgroundColor: '#e6f0eb',
    padding: 25,
    borderRadius: 20,
    // marginVertical: 5,
    top:-10,
    marginBottom: 10,
    elevation: 5,
    position: 'relative',
  },
  tripText: {
    fontSize: 16,
    color: '#525151',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  connectButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#2db977',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  connectButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    
  },
  infoButton: {
    position: 'absolute',
    bottom: 10,
    right: 100,
    backgroundColor: '#2db977',

    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  infoButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end', // align modal to the bottom
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomModal: {
    justifyContent: 'flex-end', // align modal content to the bottom
    margin: 0, // avoid default margin
  },
  connectModalContent: {
    height: '30%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  infoModalContent: {
    height: '80%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  labelText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    // marginTop:10,
    // marginBottom: 5,
    // textDecorationLine: 'underline',
  },

  modalText2: {
    fontFamily: 'Poppins-SemiBold',
    height: 45,
    borderRadius: 30,
    // marginTop: 10,
    fontSize: 18,
    // marginBottom: 10,
    textAlign: 'left',
    color: '#000',
  },
  modalText: {
    height: 45,
    fontSize: 16,
    // marginBottom: 1,
    color: '#01b25f',
    fontFamily: 'Poppins-SemiBold',
  },
  modalText3: {
    // marginTop: 10,
    height: 45,
    fontSize: 16,
    // alignSelf:'center',
    // marginBottom: 1,
    color: '#01b25f',
    // textDecorationLine: 'underline',
    fontFamily: 'Poppins-SemiBold',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  blueText: {
    color: '#2db977',
  },
  close: {
    color: '#ffffff',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  closeButton: {
    // marginTop: 70,
    backgroundColor: '#2db977',
    borderRadius: 10,
    height: 40,
  },

  closeButton2: {
    // marginTop: 20,

    backgroundColor: '#2db977',
    borderRadius: 10,
    height: 40,
  },
});

export default TripItem;
