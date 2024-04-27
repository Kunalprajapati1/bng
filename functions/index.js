// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });


// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const stripe = require('stripe')(functions.config().stripe.secret_key);

// admin.initializeApp();

// exports.processPayment = functions.https.onCall(async (data, context) => {
//   try {
//     // Process payment with Stripe
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: data.amount,
//       currency: 'usd',
//       payment_method: data.payment_method,
//       confirm: true,
//     });

//     // Update Firestore with payment status
//     await admin.firestore().collection('payments').add({
//       userId: context.auth.uid,
//       amount: data.amount,
//       status: paymentIntent.status,
//       // Add more payment details as needed
//     });

//     return { success: true };
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     return { error: error.message };
//   }
// });

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const stripe = require('stripe')(functions.config().stripe.secret_key);

// admin.initializeApp();

// exports.processPayment = functions.https.onCall(async (data, context) => {
//   try {
//     // Process payment with Stripe
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: data.amount,
//       currency: 'usd',
//       payment_method: data.payment_method,
//       confirm: true,
//     });

//     // Update Firestore with payment status
//     await admin.firestore().collection('payments').add({
//       userId: context.auth.uid,
//       amount: data.amount,
//       status: paymentIntent.status,
//       // Add more payment details as needed
//     });

//     return { success: true };
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     return { error: error.message };
//   }
// });

const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret_key);

admin.initializeApp();

// Function to fetch the latest payment from Stripe and store its status in Firestore
async function fetchLatestPaymentAndStoreStatus() {
  try {
    const payments = await stripe.paymentIntents.list({ limit: 1, expand: ['data.charges'] });
    if (payments.data.length === 0) {
      console.log('No payments found.');
      return;
    }
    const latestPayment = payments.data[0];
    
    // Store payment status in Firestore
    await admin.firestore().collection('payments').doc(latestPayment.id).set({
      status: latestPayment.status,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    console.log('Latest payment status stored in Firestore:', latestPayment.status);
  } catch (error) {
    console.error('Error fetching and storing latest payment status:', error);
  }
}

// Example usage
fetchLatestPaymentAndStoreStatus();
