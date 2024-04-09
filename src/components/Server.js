// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// const GOOGLE_MAPS_API_KEY = 'AIzaSyA3a7ovUHUGvCNl6pmQZUTOoM6WtowHHt4'; // Replace with your API key

// app.use(express.json());

// app.get('/geocode', async (req, res) => {
//   const { address } = req.query;
//   try {
//     const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//       params: {
//         address,
//         key: GOOGLE_MAPS_API_KEY,
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Server = () => {
  return (
    <View>
      <Text>Server</Text>
    </View>
  )
}

export default Server

const styles = StyleSheet.create({})