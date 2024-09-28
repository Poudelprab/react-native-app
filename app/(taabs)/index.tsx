import { Text, View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { styled } from 'nativewind';
import { Image, Platform, StatusBar, Button } from 'react-native';
import { images } from '@/constants';

const { width, height } = Dimensions.get('window');

const StyledImage = styled(Image);

const index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        {/* Status Bar */}
        <StatusBar barStyle="light-content" />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <StyledImage
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Cards Image */}
          <View style={styles.imageContainer}>
            <Image
              source={images.cards}
              style={styles.cardsImage}
              resizeMode="contain"
            />
          </View>

          {/* Text Section */}
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              Discover Endless Possibilities with{' '}
              <Text style={styles.highlightText}>Aura</Text>
            </Text>

            <Image
              source={images.path}
              style={styles.pathImage}
              resizeMode="contain"
            />
          </View>

          {/* Subtext */}
          <Text style={styles.subText}>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aura
          </Text>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <Button title="Continue With Email" color="#f0c" onPress={() => { /* Button action */ }} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',  // Primary background color
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,  // Space for status bar
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: width * 0.4,   // 40% of screen width
    height: undefined,
    aspectRatio: 130 / 84, // Maintain logo aspect ratio
  },
  imageContainer: {
    width: '100%',
    height: height * 0.35,   // Reduce card images height slightly
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsImage: {
    width: '90%',
    height: '100%',
  },
  textContainer: {
    marginTop: 20,  // Move text slightly higher
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mainText: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  highlightText: {
    color: '#f0c',
  },
  pathImage: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -11,
    right: -8,
  },
  subText: {
    marginTop: 10,  // Slightly reduce space between main text and subtext
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 30,  // Space between subtext and button
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default index;
