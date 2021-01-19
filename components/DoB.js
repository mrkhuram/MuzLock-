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
import DatePicker from 'react-native-date-picker';
const MuzLock = () => {
  
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
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
          style={{fontWeight: 'normal', fontSize: 30, marginTop: '10%'}}
          locations={[0, 1]}
          colors={['blue', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.title}>When Your Date Of Birth?</Text>
        </LinearTextGradient>
        <Text
          style={{
            paddingHorizontal: 12,
            color: 'gray',
            fontSize: 20,
          }}>
          To match your perfect partner you must be above 18 years old...
        </Text>
        <Image
          source={require('./assets/birthday.png')}
          style={{width: '15%', height: '10%', marginTop: '5%'}}
        />
        <DatePicker date={date} onDateChange={setDate} mode="date" style={{height: 130, marginTop: "5%"}} />

        <TouchableOpacity
          style={{
            backgroundColor: '#FF2535',

            width: '50%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 25,
            marginTop: '30%',
          }}
          onPress={()=> navigation.navigate('Location')}
          >
          <Text style={{fontSize: 22, color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default MuzLock;
