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
import editImage from '../assets/Untitled-5.png';

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
          source={require('../assets/dating.jpg')}
          style={{
            width: '45%',
            height: '28%',
            marginTop: '5%',
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            height: '7%',
            width: '12%',
            alignItems: 'center',
            elevation: 2,
            borderRadius: 50,
            justifyContent: 'center',
            position: 'relative',
            top: -25,
            backgroundColor: 'white',
          }}>
          <Image source={editImage} style={{height: '60%', width: 30}} />
        </TouchableOpacity>
        <View style={{position: 'relative', top: -20, alignItems:'center'}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Suman Khan, 22</Text>
          <Text>Tap to edit profile</Text>
        </View>
        <View
          style={{
            height: '25%',
            width: '100%',
          }}>
          <View
            style={{
              height: '50%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: '65%',
                  width: '100%',
                  alignItems: 'center',
                  elevation: 2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundColor: 'white',
                }}>
                <Image
                  source={require('../assets/navigation-setting-icon.png')}
                  style={{height: '55%', width: '70%'}}
                />
              </TouchableOpacity>
              <Text>Setting</Text>
            </View>
            <View style={{alignItems: 'center', position: 'relative', top: 15}}>
              <TouchableOpacity
                style={{
                  height: '65%',
                  width: '70%',
                  alignItems: 'center',
                  elevation: 2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}>
                <Image
                  source={require('../assets/logo.png')}
                  style={{height: '50%', width: '70%'}}
                />
              </TouchableOpacity>
              <Text>Muz Sheild</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: '65%',
                  width: '100%',
                  alignItems: 'center',
                  elevation: 2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundColor: 'white',
                }}>
                <Image
                  source={require('../assets/filter-icon.png')}
                  style={{height: '55%', width: '70%'}}
                />
              </TouchableOpacity>
              <Text>Filters</Text>
            </View>
          </View>
          <View
            style={{
              height: '50%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: '65%',
                  width: '45%',
                  alignItems: 'center',
                  elevation: 2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundColor: 'white',
                }}>
                <Image
                  source={require('../assets/Report.png')}
                  style={{height: '55%', width: '58%'}}
                />
              </TouchableOpacity>
              <Text>Report Problems</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: '65%',
                  width: '60%',
                  alignItems: 'center',
                  elevation: 2,
                  borderRadius: 50,
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundColor: 'white',
                }}>
                <Image
                  source={require('../assets/Help.png')}
                  style={{height: '55%', width: '60%'}}
                />
              </TouchableOpacity>
              <Text>Help Center</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textTransform:'uppercase'}}>MuzLock</Text>
          <Text style={{fontSize:18, fontWeight: 'bold', color:'#CFA002', textTransform:'uppercase'}}>Premium</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF2535',
            width: '55%',
            alignItems: 'center',
            padding: 8,
            borderRadius: 25,
            marginTop: '2%',
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>Get 1 Month / &#163; 99</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#FF2535',
            borderWidth:1,
            width: '55%',
            alignItems: 'center',
            padding: 7,
            borderRadius: 25,
            marginTop: '2%',
          }}
          onPress={() => navigation.navigate('SelfieVerification')}>
          <Text style={{fontSize: 18, color: '#FF2535'}}>Get 3 to 12 Months...</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
