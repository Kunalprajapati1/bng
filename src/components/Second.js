// import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {Icon} from 'react-native-elements';

// const Second = ({navigation}) => {
//   return (
//     <>
//       <View style={styles.parent}>
//         <View style={styles.child}>
//         <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
//       <Text style={{ color: 'white', justifyContent:'flex-end', marginTop:10, textDecorationLine:'underline', fontFamily:'Poppins-Bold', fontSize:15, paddingLeft:'75%'}}>Skip</Text>

//         </TouchableOpacity>
//           <View style={styles.child1}>
//             <Image
//               source={require('../components/assets/we.png')}
//               style={styles.backgroundImage}
//             />
//           </View>
//         </View>
//       </View>

//       <View style={styles.overlayContainer}>
//         <View style={styles.overlayContent}>
//           <View style={styles.heading}>
//             <Text style={styles.text}>
//               <Text style={styles.blackText}>Book Your Ride</Text>
//               <Text style={styles.orangeText}> Anywhere, Anytime!</Text>
//             </Text>
//           </View>
//           <Text style={styles.loremText}>
//             Safe, efficient transportation for work, socializing, and city
//             exploration.

//           </Text>
         
//           <View style={styles.main}>
//             <View style={styles.container}></View>
//             <View style={styles.sd}>
//               <View style={styles.container}>
//                 <Text style={styles.dot1}>•</Text>
//                 <Text style={styles.dot}>•</Text>
//                 <Text style={styles.dot}>•</Text>
//               </View>
//             </View>

//             <View style={styles.sd}>
//               <View style={styles.button}>
//                 <TouchableOpacity onPress={() =>{navigation.navigate('Third')}} style={styles.buttonText}>
//                   <Text style={styles.buttonText}>￫</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// export default Second;

// const styles = StyleSheet.create({
//   main: {
  
//     flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
//     alignItems: 'center', // Align items in the center vertically
//     justifyContent: 'space-between', // Add space between the container and the button
//     paddingHorizontal: 4,
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 70,
//   },
//   dot1: {
//     color: '#01b05f',
//     fontSize: 70,
//     marginHorizontal: 5,
//   },
//   dot: {
//     color: '#01b05f',
//     fontSize: 40,
//     marginHorizontal: 5,
//   },

//   heading: {
//     // fontSize:16,
//     alignItems: 'center',
//     marginLeft: '3%',
//     marginTop: 20,
//   },
//   loremText: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#333',
//     marginTop: 5,
//     fontFamily: 'Poppins-Bold',
//     paddingHorizontal: 10, // Add horizontal padding
//     paddingVertical: 10,
//   },

//   blackText: {
//     color: 'black',
//     alignItems: 'center',
//     fontSize: 24,
//     textAlign: 'center',
//     fontFamily: 'Poppins-Bold',
//     paddingHorizontal: 10, // Add horizontal padding
//     paddingVertical: 10,
//   },

//   loremText2: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#000000',
//     marginTop: 30,
//     fontFamily: 'Poppins-Bold',
//   },
//   button: {
   
//     marginLeft:100,
//     fontFamily: 'Poppins-Bold',
//   },

//   buttonText: {
//     color: '#01b05f',
//     borderRadius:90,
//     // backgroundColor: '#01b05f',
//     right:30,
//     fontSize:55,
//     bottom:3,
//     textAlign: 'center',
//     position:'relative',
//   },

//   orangeText: {
//     alignItems: 'center',
//     color: '#01b05f',
//     fontSize: 24,
//     textAlign: 'center',
//     fontFamily: 'Poppins-Bold',
//     paddingHorizontal: 20, // Add horizontal padding
//     paddingVertical: 10,
//   },
//   orangeText2: {
//     color: '#01b05f',
//     fontFamily: 'Poppins-Bold',
   
//   },
//   parent: {
//     height: '60%',
//     width: '100%',
//     transform: [{scaleX: 2}],
//     borderBottomStartRadius: 100,
//     borderBottomEndRadius: 300,
//     overflow: 'hidden',
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // or 'stretch' or 'contain'
//     position: 'absolute',
//     width: '90%',
//     marginLeft: '5%',
//     marginTop: '100%',
//     height: '60%',
//   },
//   child: {
//     flex: 1,
//     transform: [{scaleX: 0.5}],

//     backgroundColor: '#01b05f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   child1: {
//     flex: 1,
 
//     backgroundColor: '#01b05f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import {StyleSheet, Image, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const Second = ({navigation}) => {
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.child}>
          <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.child1}>
            <Image
              source={require('../components/assets/we.png')}
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
                <TouchableOpacity onPress={() =>{navigation.navigate('Third')}}>
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
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: width * 0.01,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.2,
  },
  dot1: {
    color: '#01b05f',
    fontSize: height * 0.08,
    marginHorizontal: width * 0.01,
  },
  dot: {
    color: '#01b05f',
    fontSize: height * 0.045,
    marginHorizontal: width * 0.01,
  },
  heading: {
    alignItems: 'center',
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
  },
  loremText: {
    fontSize: height * 0.02,
    textAlign: 'center',
    color: '#333',
    marginTop: height * 0.01,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
  },
  blackText: {
    color: 'black',
    alignItems: 'center',
    fontSize: height * 0.03,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
  },
  button: {
    marginLeft: width * 0.2,
    fontFamily: 'Poppins-Bold',
  },
  buttonText: {
    color: '#01b05f',
    borderRadius: height * 0.45,
    fontSize: height * 0.07,
    textAlign: 'center',
    position: 'relative',
  },
  orangeText: {
    alignItems: 'center',
    color: '#01b05f',
    fontSize: height * 0.03,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
  },
  parent: {
    height: height * 0.6,
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: height * 0.12,
    borderBottomEndRadius: height * 0.4,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    // padding:'10%',
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    marginLeft: '5%',
    marginTop: height * 0.6,
    height: '60%',
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
    padding:'10%',
    width: '110%',
    backgroundColor: '#01b05f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    color: 'white',
    justifyContent: 'flex-end',
    marginTop: height * 0.01,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
    fontSize: height * 0.018,
    paddingLeft: width * 0.75,
  },
});
