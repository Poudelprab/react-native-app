import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> profile </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,               // flex-1: fill available space
    alignItems: 'center',   // items-center: center horizontally
    justifyContent: 'center', // justify-center: center vertically
  },
  text: {
    fontSize: 30,           // text-3xl: approximately 30px font size
  },
});
