import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView contentContainerStyle={[styles.container, { minHeight: windowHeight }]}>
      <View style={styles.bannerContainer}>
        <Image source={require('../Images/FondoWelcome.png')} style={styles.bannerImage} />
        <Text style={styles.welcomeText}>WELCOME __________</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
        <TouchableOpacity style={[styles.gridItem, styles.reptiles]}>
            <Text style={styles.gridText}>REPTILES</Text>
            <Image source={require('../Images/REPTILIS.png')} style={styles.gridImage} />
           </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, styles.aquatic]}>
            <Text style={styles.gridText}>AQUATIC</Text>
            <Image source={require('../Images/AQUATIC.png')} style={styles.gridImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity style={[styles.gridItem, styles.birds]}>
            <Text style={styles.gridText}>BIRDS</Text>
            <Image source={require('../Images/BIRDS.png')} style={styles.gridImage} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, styles.land]}>
            <Text style={styles.gridText}>LAND</Text>
            <Image source={require('../Images/LAND.png')} style={styles.gridImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity style={[styles.gridItem, styles.createEmployee]}>
            <Text style={styles.gridText}>+CREATE EMPLOYEE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingBottom: 20,
  },
  bannerContainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 300,
  },
  welcomeText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -90 }, { translateY: -20 }],
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  profileButton: {
    backgroundColor: '#00BFFF',
    padding: 10,
    borderRadius: 5,
  },
  profileText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  gridContainer: {
    width: '100%',
    flex: 1,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridItem: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  gridText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: 10,
  },
  gridImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
  },
  reptiles: {
    backgroundColor: '#84AE1B',
    height: 200,
  },
  aquatic: {
    backgroundColor: '#19B8BF',
    height: 300,
  },
  land: {
    backgroundColor: '#FF9800',
    height: 320,
   
  },
  birds: {
    backgroundColor: '#ff4c4c',
    height: 300,
    marginTop:-100
  },
  createEmployee: {
    backgroundColor: '#9C27B0',
    height: 120,
    width: '50%',
    alignSelf: 'flex-start',
    alignContent:'center',
    marginTop:-120
  },
});

export default WelcomeScreen;