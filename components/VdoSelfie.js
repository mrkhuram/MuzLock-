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
import {useNavigation} from '@react-navigation/native';
import {LinearTextGradient} from 'react-native-text-gradient';

const MuzLock = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="lightgray" />

      <View
        style={{
          height: '100%',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '100%',
            height: '40%',
            backgroundColor: 'lightgray',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/video-selfie-icon.png')}
            style={{width: '80%', height: '100%', backgroundColor: 'lightgray'}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <LinearTextGradient
            style={{fontWeight: 'bold', fontSize: 30, marginTop: '3%'}}
            locations={[0, 1]}
            colors={['blue', 'red']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.title}>Take a Video Selfie</Text>
          </LinearTextGradient>
          <Text
            style={{
              paddingHorizontal: '13.5%',
              textAlign: 'center',
              color: 'black',
              fontSize: 16,
            }}>
            We need a short video of you for verification that you are a real.
            This is for only us. We didn't public this. This video is automatic
            by 1 minute.
          </Text>
        </View>
        <TouchableOpacity
          style={{height: '26%', width: '90%', marginTop: '4%'}}>
          <Image
            source={require('./assets/vdo.png')}
            style={{height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF2535',
            padding: 10,
            alignItems: 'center',
            borderRadius: 25,
            paddingHorizontal: 70,
            marginTop: '4%',
          }}
          onPress={() => navigation.navigate('BottomNav')}>
          <Text style={{color: 'white', fontSize: 16}}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
