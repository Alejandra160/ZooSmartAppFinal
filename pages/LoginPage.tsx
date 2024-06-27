// screens/HomePage.tsx
import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ModalComponent from './ModalComponent';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <ImageBackground
      source={require('../Images/index.png')} // Ruta a tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.AboutButton} onPress={openModal}>
            <Text style={styles.AboutButtonText}>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={openModal}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>CONTACT</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../Images/logoH.png')} style={styles.logo} /> {/* Ruta a tu logo */}
        </View>

        <Text style={styles.title}>WHERE TECHNOLOGY PROTECTS WILDLIFE</Text>

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </ScrollView>

      <ModalComponent visible={modalVisible} onClose={closeModal} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AboutButton: {},
  AboutButtonText: {},
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
    height: 100,
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ffcf27',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
