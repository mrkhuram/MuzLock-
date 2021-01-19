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
import AppIntroSlider from 'react-native-app-intro-slider';
import CountryPicker from 'react-native-country-picker-modal';
import {useNavigation} from '@react-navigation/native';

const MuzLock = () => {
  const navigation = useNavigation();

  const [countryCode, setCountryCode] = useState('PK');
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withFilter, setWithFilter] = useState(true)
  const [country, setCountry] = useState(true);
  const onSelect = (country) => {
    console.log(country);
    setWithCallingCode(country.callingCode);
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <>
      <View style={{height: '100%', alignItems: 'center',backgroundColor:'white'}}>
        <Image
          source={require('./assets/verify-num-image.png')}
          style={{width: '80%', height: '45%'}}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            Verify Your Number
          </Text>
          <Text
            style={{
              paddingHorizontal: 50,
              textAlign: 'center',
              color: 'lightgray',
            }}>
            {' '}
            Please enter Your mobile Number to recieve a verification code.
            Message and data rates may apply.
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#FF2535',
              padding: 5,
              alignItems: 'center',
            }}>
            <CountryPicker
              {...{
                countryCode,
                withFlag,
                withEmoji,
                onSelect,
                withCallingCode,
                withFilter
              }}
            />
            <Text style={{fontSize: 16}}>+{withCallingCode}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#FF2535',
              padding: 0,
              alignItems: 'center',
              marginLeft: 15,
              width: '50%',
            }}>
            <TextInput
              placeholder="Enter your number"
              style={{fontSize: 18}}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{width: '40%', marginTop: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF2535',
              padding: 10,
              alignItems: 'center',
              borderRadius:25
            }}
            onPress={()=>navigation.navigate("otp_verify")}
            >
            <Text style={{color: 'white',fontSize:18}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
