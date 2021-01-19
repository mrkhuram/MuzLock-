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
          source={require('./assets/logo.png')}
          style={{width: '20%', height: '10%', marginTop: 10}}
        />
        <LinearTextGradient
          style={{fontWeight: 'normal', fontSize: 32, marginTop: '10%'}}
          locations={[0, 1]}
          colors={['blue', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.title}>What's Your Gender?</Text>
        </LinearTextGradient>

        <Image
          source={require('./assets/sex.png')}
          style={{width: '25%', height: '15%', marginTop: '5%'}}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            width: '90%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 25,
            marginTop: '5%',
          }}>
          <Text style={{fontSize: 22, color: '#F94D5C'}}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            width: '90%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 25,
            marginTop: '5%',
          }}>
          <Text style={{fontSize: 22, color: '#F94D5C'}}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF2535',

            width: '50%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 25,
            marginTop: '35%',
          }}
          onPress={()=> navigation.navigate("DoB")}
          >
          <Text style={{fontSize: 22, color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
