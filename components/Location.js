import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

const MuzLock = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={require('./assets/loc.png')}
          style={{width: '55%', height: '30%', marginTop: '15%'}}
        />
          <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 32, marginTop: '10%'}}
          locations={[0, 1]}
          colors={['blue', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.title}>Enable Location</Text>
          
        </LinearTextGradient>
        <Text
            style={{
              paddingHorizontal: '10%',
              textAlign: 'center',
              color: 'gray',
              fontSize: 18,
              marginTop: '1%'
            }}>
            You'll need  to Enable your location in order to use <Text style={{fontWeight:'700'}}>MuzLock</Text>
          </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF2535',

            width: '50%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 25,
            marginTop: '30%',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF2535',
            width: '50%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 25,
            marginTop: '3%',
          }}
          onPress={()=> navigation.navigate('SelfieVerification')}
          >
          <Text style={{fontSize: 20, color: 'white'}}>Set Location</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
