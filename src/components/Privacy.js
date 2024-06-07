import React from 'react';
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';

const Privacy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../components/assets/privacy.jpg')} style={styles.image2} />

      <Text style={styles.heading}>Privacy Policy</Text>

      <View style={styles.section}>
        <Text style={styles.subheading}>Overview</Text>
        <Text style={styles.paragraph}>
        Last updated: June 06, 2024
        {"\n"}{"\n"}

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
        </Text>
      </View>
      <Text style={styles.heading}>Interpretation and Definitions</Text>

<View style={styles.section}>
  <Text style={styles.subheading}>Interpretation</Text>
  <Text style={styles.paragraph}>
 
  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
  </Text>
<Image source={require('../components/assets/privacy.jpg')} style={styles.image2} />

  <Text style={styles.subheading}>Definitions</Text>
  <Text style={styles.paragraph}>
 
  For the purposes of this Privacy Policy:{"\n"}{"\n"}

Account means a unique account created for You to access our Service or parts of our Service.
{"\n"}{"\n"}Application refers to BooknGo, the software program provided by the Company.

{"\n"}{"\n"}Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to BooknGo.

{"\n"}{"\n"}Country refers to: New Zealand

{"\n"}{"\n"}Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

{"\n"}{"\n"}Personal Data is any information that relates to an identified or identifiable individual.

{"\n"}{"\n"}Service refers to the Application.

{"\n"}{"\n"}Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.

{"\n"}{"\n"}Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

{"\n"}{"\n"}You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
  </Text>
</View>
<Image source={require('../components/assets/privacy.jpg')} style={styles.image2} />

      <View style={styles.section}>
        <Text style={styles.subheading}>Personal Information</Text>
        <Text style={styles.subheading}>Types of Data Collected</Text>
      <Text style={styles.paragraph}>
        Personally identifiable information may include, but is not limited to:
      </Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bulletPointText}>- Email address</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bulletPointText}>- First name and last name</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bulletPointText}>- Phone number</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bulletPointText}>- Address, State, Province, ZIP/Postal code, City</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bulletPointText}>- Usage Data</Text>
      </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Use of Personal Information</Text>
        <Text style={styles.paragraph}>
          Your personal information may be used for various purposes, including but not limited to: providing and maintaining our services, improving user experience, sending promotional and marketing materials, and responding to inquiries and support requests.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Can Delete Their Information</Text>
        <Text style={styles.paragraph}>
          You have the right to request the deletion of your personal information from our records. Please contact us if you wish to delete your information, and we will promptly respond to your request.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Disclosure</Text>
        <Text style={styles.paragraph}>
          We may disclose your personal information to third parties for various purposes, including but not limited to: service providers, business partners, legal requirements, and safety and security reasons. We ensure that any third party with whom we share your information follows strict privacy practices.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Security</Text>
        <Text style={styles.paragraph}>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Access to Information</Text>
        <Text style={styles.paragraph}>
          You may request access to your personal information that we hold. If you believe that any information we hold about you is inaccurate, incomplete, or outdated, please contact us, and we will update or correct it promptly.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Problems or Questions</Text>
        <Text style={styles.paragraph}>
          If you have any questions, concerns, or complaints about our Privacy Policy or practices, please contact us. We will respond to all inquiries and complaints promptly and strive to resolve any issues in a timely and satisfactory manner.
        </Text>
      </View>

    </ScrollView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    paddingBottom: 40,
  },
  heading: {
    paddingHorizontal: 20,

    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,

  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bulletPointText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#000',
  },
  image2: {
    width: '120%',
    height: 180,
    marginBottom: 20,
  },

});
