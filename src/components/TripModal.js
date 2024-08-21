// TripModal.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, Button,Dimensions, } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Calendar } from 'react-native-calendars';


const { width, height } = Dimensions.get('window');
const currentDate = new Date().toISOString().split('T')[0];
const TripModal = ({
  modalVisible,
  setModalVisible,
  selectedDate,
  setSelectedDate,
  selectedOption,
  setSelectedOption,
  source,
  handleOptionSelect,
  setSource,
  destination,
  setDestination,
  handleCloseModal,
  
}) => {
  return (
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { width }]}>
              <Text style={styles.title2}>Source:</Text>
              <GooglePlacesAutocomplete
                placeholder="Enter source"
                
                 onPress={(data, details = null) => {
                  console.log("Source data:", data);
                  if (data && data.description) {
                    console.log("Source description:", data.description);
                    setSource(data.description);
                  }
                }}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.input,
                  container: { marginBottom: 70 },
                  description: {
                    fontFamily: 'Calibri',
                    color: 'black',
                    fontSize: 12,
                  },
                  listView: {
                    position: 'absolute',
                    marginTop: 44,
                    backgroundColor: 'white',
                    borderBottomEndRadius: 15,
                    elevation: 3,
                    zIndex: 5,
                  },
                }}
              />
              <Text style={styles.title2}>Destination:</Text>
              <GooglePlacesAutocomplete
                placeholder="Enter Destination"
                placeholderTextColor="black"
                

                onPress={(data, details = null) => {
                  console.log("Destination data:", data);
                  if (data && data.description) {
                    console.log("Destination description:", data.description);
                    setDestination(data.description);
                  }
                }}
                query={{
                  key: 'AIzaSyC0vxMvW9CnRrTDp4rUFpA78V3nAOpEEhY',
                  language: 'en',
                }}
                fetchDetails={true}
                styles={{
                  textInput: styles.input,
                  container: { marginBottom: 70 },
                  description: {
                    fontFamily: 'Calibri',
                    color: 'black',
                    fontSize: 12,
                  },
                  listView: {
                    position: 'absolute',
                    marginTop: 44,
                    backgroundColor: '#000000',
                    borderBottomEndRadius: 15,
                    elevation: 3,
                    zIndex: 5,
                  },
                }}
              />
              <View style={styles.calendarContainer}>
                <Calendar
                  current={selectedDate ? selectedDate : currentDate}
                  minDate={currentDate}
                  onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                  }}
                  markedDates={{
                    [selectedDate]: { selected: true, marked: true, selectedColor: '#2db977' },
                  }}
                />
              </View>
              <View style={styles.optionContainer}>
                <TouchableOpacity
                  style={[styles.optionButton, selectedOption === "driving" && styles.selectedOption]}
                  onPress={() => handleOptionSelect("driving")}
                >
                  <Text style={styles.optionText}>I am driving</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.optionButton, selectedOption === "riding" && styles.selectedOption]}
                  onPress={() => handleOptionSelect("riding")}
                >
                  <Text style={styles.optionText}>I am riding</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.touchableButton} onPress={handleCloseModal}>
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> 

  );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        marginTop:50,
        width: '90%',
        height:'100%',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
      },
      input: {
        height: 40,
        borderColor: '#2db977',
        color:'black',
        borderWidth: 1,
        marginBottom: 0,
        borderRadius: 5,
        paddingHorizontal: 10,
      },
      calendarContainer: {
        marginTop: 60,
        alignItems: 'center',
        bottom:70,
      },
      optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
      },
      optionButton: {
        bottom:70,
        flex: 1,
        padding: 10,
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectedOption: {
        backgroundColor: '#2db977',
      },
      optionText: {
        color: '#333',
        fontFamily: 'Poppins-SemiBold',
        
      },
      touchableButton: {
        bottom:70,
        backgroundColor: '#2db977',
        padding: 10,
        borderRadius: 45,
        marginTop: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#FFFFFF',
        // fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
    
      },
      title: {
        fontSize: 14,
        color:'black',
      }, 
      
      title2: {
        fontSize: 16,
        marginBottom:5,
        color:'#000000',
        fontFamily: 'Poppins-SemiBold',
    
      },
});

export default TripModal;

