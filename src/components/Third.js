import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const Third = ({navigation}) => {
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.child}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
      <Text style={{ color: 'white', justifyContent:'flex-end', marginTop:10, textDecorationLine:'underline', fontFamily:'Montserrat-SemiBold', fontSize:15, paddingLeft:'75%'}}>Skip</Text>

        </TouchableOpacity>
          <View style={styles.child1}>
            <Image
              source={require('../components/assets/app_images/er.png')}
              style={styles.backgroundImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.overlayContainer}>
        <View style={styles.overlayContent}>
          <View style={styles.heading}>
            <Text style={styles.text}>
              <Text style={styles.orangeText}> Choose Your Comfort: </Text>
              <Text style={styles.blackText}>Enjoy a Luxurious Ride</Text>
            </Text>
          </View>
          <Text style={styles.loremText}>
          Enjoy the convenience of hassle-free booking, real-time tracking, and exceptional service.
            {/* Enjoy the convenience of hassle-free booking, real-time tracking, and exceptional service. Your journey begins with us! */}
          </Text>
          {/* <View style={styles.button}></View> */}
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.loremText2}>
            Already have an account ? <Text style={styles.orangeText2}>Log In</Text>
          </Text> */}
          <View style={styles.main}>
          <View style={styles.sd}>
              <View style={styles.button1}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Second')}} style={styles.buttonText1}>
                  <Text style={styles.buttonText1}>￩</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}></View>
            <View style={styles.sd}>
              <View style={styles.container}>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot1}>•</Text>
                <Text style={styles.dot}>•</Text>
              </View>
            </View>

            <View style={styles.sd}>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Fourth')}} style={styles.buttonText}>
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

export default Third;

const styles = StyleSheet.create({
    text:{
        paddingHorizontal: 17, // Add horizontal padding
        paddingVertical: 10,
    },
  main: {
    // backgroundColor:'red',
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
    alignItems: 'center', // Align items in the center vertically
    justifyContent: 'space-between', // Add space between the container and the button
    paddingHorizontal: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  dot1: {
    color: '#01b05f',
    fontSize: 70,
    marginHorizontal: 5,
  },
  dot: {
    color: '#4ca77c',
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
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 18, // Add horizontal padding
    paddingVertical: 0,
  },

  blackText: {
    color: 'black',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  loremText2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
  },
  button1: {
   
    justifyContent: 'center',
    bottom:14,

    width: '38%',
    height: '38%',
    borderRadius: 100,
    marginLeft: '30%',
    
    fontFamily: 'Poppins-Bold',
  },
  button: {
    // backgroundColor: '#01b05f',
   
    width: '30%',
    height: '39%',
    borderRadius: 100,
    marginLeft: '30%',
   bottom:10,
    fontFamily: 'Poppins-Bold',
  },

  buttonText1: {
    color: '#01b05f',
    fontSize: 50,
  
    position:'relative',
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#01b05f',

    fontSize: 50,
    marginTop: -3,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  orangeText: {
    alignItems: 'center',
    color: '#01b05f',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10,
  },
  orangeText2: {
    color: '#01b05f',
    fontFamily: 'Poppins-Bold',
    //  paddingHorizontal: 0, // Add horizontal padding
    // paddingVertical: 10,
  },
  parent: {
    height: '60%',
    position:'relative',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 100,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '100%',
    marginLeft: '5%',
    marginTop: '100%',
    height: '100%',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#01b05f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child1: {
    flex: 1,
    // transform : [ { scaleX : 0.9 } ],
    // width:'50%',
    backgroundColor: '#01b05f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
