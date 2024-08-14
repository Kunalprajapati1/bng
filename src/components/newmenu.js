// import React from 'react';
// import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native';

// // Menu data
// const menuList = [
//   { id: 1, name: 'Find Trip', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 2, name: 'Post Trip', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 3, name: 'My Trips', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 4, name: 'Profile', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 5, name: 'Contact Us', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 6, name: 'Payment', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 7, name: 'Safety', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 8, name: 'Privacy Policy', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 9, name: 'Terms Of Use', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 10, name: 'How to ?', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 11, name: 'Logout', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
// ];

// const NewMenu = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.menuItemBox}
//       onPress={() => {
//         switch (item.name) {
//           case 'Contact Us':
//             navigation.navigate('Contact');
//             break;
//           case 'Find Trip':
//             navigation.navigate('FindTrip');
//             break;
//           case 'Post Trip':
//             navigation.navigate('PostTrip');
//             break;
//           case 'My Trips':
//             navigation.navigate('Trips');
//             break;
//           case 'Profile':
//             navigation.navigate('Profile');
//             break;
//           case 'Payment':
//             navigation.navigate('Payment');
//             break;
//           case 'Safety':
//             navigation.navigate('Safety');
//             break;
//           case 'Privacy Policy':
//             navigation.navigate('Privacy');
//             break;
//           case 'Terms Of Use':
//             navigation.navigate('Terms');
//             break;
//           case 'How to ?':
//             navigation.navigate('Howto');
//             break;
//           case 'Logout':
//              handleLogout={() => {
//             AsyncStorage.removeItem('userToken');
//             navigation.navigate('Login');
//           }}
//             break;
//           default:
//             break;
//         }
//       }}
//     >
//       <View style={styles.overlayContainer}>
//         <Image
//           source={{ uri: item.image }} // Use remote image URL
//           style={styles.overlayImage}
//         />
//         <Text style={styles.menuItemText}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <View style={styles.closeButtonContainer}>
//         <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
//           <Image style={styles.cross} source={require('../components/assets/close.png')} />
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={menuList}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.menuContainer}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   closeButtonContainer: {
//     alignItems: 'flex-start',
//     padding: 25,
//     paddingTop: 40,
//   },
//   cross: {
//     width: 30,
//     height: 30,
//   },
//   menuContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   menuItemBox: {
//     flex: 1,
//     width: '48%', // Adjust to fit 2 items per row with some margin
//     height: 150,
//     borderRadius: 15,
//     backgroundColor: '#6bc7a7',
//     margin: '1%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   overlayContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlayImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 15,
//     position: 'absolute',
//     resizeMode: 'cover',
//     opacity: 0.5, // Adjust opacity as needed
//   },
//   menuItemText: {
//     fontSize: 21,
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     zIndex: 1,
//   },
// });

// export default NewMenu;
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

// Menu data
const menuList = [
  { id: 3, name: 'My Trips', image: 'https://i.pinimg.com/564x/fa/41/d1/fa41d199e9be453fe1f0dc103e4c615f.jpg' },
  { id: 4, name: 'Profile', image: 'https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg' },
  { id: 5, name: 'Contact Us', image: 'https://i.pinimg.com/564x/dd/78/da/dd78da42ac00ebe3bed3ad153a1e7be4.jpg' },
  { id: 6, name: 'Payment', image: 'https://i.pinimg.com/564x/f6/09/41/f6094121ae8689a84eebb990d664440a.jpg' },
  { id: 7, name: 'Safety', image: 'https://i.pinimg.com/564x/57/6a/89/576a8979a2712b85750c7caf4da17d94.jpg' },
  { id: 8, name: 'Privacy Policy', image: 'https://i.pinimg.com/564x/42/b7/a5/42b7a5f4e5ce64aaba021bfe66cb2f8c.jpg' },
  { id: 9, name: 'Terms Of Use', image: 'https://i.pinimg.com/564x/12/af/3e/12af3e657464a4a98331974b9259add1.jpg' },
  { id: 10, name: 'How to ?', image: 'https://i.pinimg.com/564x/67/a1/3e/67a13e6745ab80e753908f7bad391f79.jpg' },
  { id: 11, name: 'Logout', image: 'https://images.unsplash.com/photo-1616878443139-8c68afd6b5c0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const NewMenu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error removing user token:', error);
    }
  };

  const handleFindTrip = () => {
    setModalVisible(true);
  };

  const handlePostTrip = () => {
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItemBox}
      onPress={() => {
        switch (item.name) {
          case 'Contact Us':
            navigation.navigate('Contact');
            break;
          case 'Find Trip':
            handleFindTrip();
            break;
          case 'Post Trip':
            handlePostTrip();
            break;
          case 'My Trips':
            navigation.navigate('Trips');
            break;
          case 'Profile':
            navigation.navigate('Profile');
            break;
          case 'Payment':
            navigation.navigate('Payment');
            break;
          case 'Safety':
            navigation.navigate('Safety');
            break;
          case 'Privacy Policy':
            navigation.navigate('Privacy');
            break;
          case 'Terms Of Use':
            navigation.navigate('Terms');
            break;
          case 'How to ?':
            navigation.navigate('Howto');
            break;
          case 'Logout':
            handleLogout();
            break;
          default:
            break;
        }
      }}
    >
      <Image
        source={{ uri: item.image }} // Use remote image URL
        style={styles.overlayImage}
      />
      <LinearGradient
        colors={['#6bc7a797', '#0000004f']} // Adjust the gradient colors as needed
        style={styles.gradientOverlay}
      />
      <Text style={styles.menuItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('TabNavigator'); }}>
          <Image style={styles.cross} source={require('../components/assets/close.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={menuList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.menuContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  closeButtonContainer: {
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#00000000',
  },
  cross: {
    width: 20,
    height: 20,
  },
  menuContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#00000000',
  },
  menuItemBox: {
    flex: 1,
    width: '48%', // Adjust to fit 2 items per row with some margin
    height: 150,
    borderRadius: 15,
    backgroundColor: '#000000',
    margin: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlayImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 0.2, // Adjust opacity as needed
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
  },
  menuItemText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    zIndex: 1,
  },
});

export default NewMenu;
