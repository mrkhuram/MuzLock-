import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Verified = () => {
  let navigation = useNavigation()
  return (
    <>
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000021',
          position: 'absolute',
          zIndex: 12,
          elevation: 12,
        }} onTouchStart={()=>{navigation.navigate("gender")}}>
        <View
          style={{
            width: '40%',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 10,
            borderRadius: 15,
          }}>
          <Image source={require('./assets/tick.png')} />
          <Text style={{textAlign: 'center'}}>Verified Successfully</Text>
        </View>
      </View>
    </>
  );
};

const MuzLock = () => {
  const arr = ['1', '2', '3', '4', '5', '6'];
  const [isVerified, setVerified] = useState(false);
  const [text, setTxt] = useState('4');

  useEffect(()=>{
    if(text !== "4"){
      setVerified(true)
    }
  },[text])

  return (
    <>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={require('./assets/otp-image.png')}
          style={{width: '80%', height: '50%', marginTop: 10}}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              paddingHorizontal: 50,
              textAlign: 'center',
              color: 'lightgray',
              marginTop: 10,
            }}>
            Enter the code sent to{' '}
            <Text style={{fontStyle: 'italic', color: '#FF2535'}}>
              +912233933
            </Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          {arr.map((item, key) => (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                borderBottomWidth: 2,
                borderBottomColor: '#FF2535',
                padding: 0,
                alignItems: 'center',
                marginLeft: 15,
                width: '10%',
              }}>
              <TextInput
                placeholder="1"
                value={text}
                onChangeText={(text) => {
                  setTxt(text.toString());
                }}
                style={{fontSize: 18, textAlign: 'center'}}
                keyboardType="numeric"
              />
            </View>
          ))}
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              paddingHorizontal: 50,
              textAlign: 'center',
              color: 'lightgray',
              marginTop: 30,
            }}>
            Didn't recieve the code?{' '}
            <Text style={{fontStyle: 'italic', color: '#93C9BA'}}>RESEND</Text>
          </Text>
        </View>
      </View>
      {isVerified ? <Verified /> : null}
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
