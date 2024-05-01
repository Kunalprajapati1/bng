import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const Second = ({navigation}) => {
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.child}>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Text style={{ color: 'white', justifyContent:'flex-end', marginTop:10, textDecorationLine:'underline', fontFamily:'Montserrat-SemiBold', fontSize:15, paddingLeft:'75%'}}>Skip</Text>

        </TouchableOpacity>
          <View style={styles.child1}>
            <Image
              source={require('../components/assets/app_images/s.png')}
              style={styles.backgroundImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.overlayContainer}>
        <View style={styles.overlayContent}>
          <View style={styles.heading}>
            <Text style={styles.text}>
              <Text style={styles.blackText}>Book Your Ride</Text>
              <Text style={styles.orangeText}> Anywhere, Anytime!</Text>
            </Text>
          </View>
          <Text style={styles.loremText}>
            Safe, efficient transportation for work, socializing, and city
            exploration.

          </Text>
         
          <View style={styles.main}>
            <View style={styles.container}></View>
            <View style={styles.sd}>
              <View style={styles.container}>
                <Text style={styles.dot1}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
              </View>
            </View>

            <View style={styles.sd}>
              <View style={styles.button}>
                <TouchableOpacity onPress={() =>{navigation.navigate('Third')}} style={styles.buttonText}>
                  <Text style={styles.buttonText}>￫</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Second;

const styles = StyleSheet.create({
  main: {
  
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
    alignItems: 'center', // Align items in the center vertically
    justifyContent: 'space-between', // Add space between the container and the button
    paddingHorizontal: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
  },
  dot1: {
    color: '#fea90a',
    fontSize: 70,
    marginHorizontal: 5,
  },
  dot: {
    color: '#f5d8a2',
    fontSize: 40,
    marginHorizontal: 5,
  },

  heading: {
    // fontSize:16,
    alignItems: 'center',
    marginLeft: '3%',
    marginTop: 20,
  },
  loremText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  blackText: {
    color: 'black',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  loremText2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 30,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
   
    marginLeft:100,
    fontFamily: 'Montserrat-Regular',
  },

  buttonText: {
    color: '#fea90a',
    borderRadius:90,
    // backgroundColor: '#fea90a',
    right:30,
    fontSize:55,
    bottom:3,
    textAlign: 'center',
    position:'relative',
  },

  orangeText: {
    alignItems: 'center',
    color: '#fea90a',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10,
  },
  orangeText2: {
    color: '#fea90a',
    fontFamily: 'Montserrat-BOld',
   
  },
  parent: {
    height: '60%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '90%',
    marginLeft: '5%',
    marginTop: '100%',
    height: '60%',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#fea90a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child1: {
    flex: 1,
 
    backgroundColor: '#fea90a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
