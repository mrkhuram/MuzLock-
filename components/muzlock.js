import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {LinearTextGradient} from 'react-native-text-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OTPVerification from './OTPVerify';
import PhoneVerification from './phoneVerification';
import Gender from './Gender';
import Location from './Location';
import DoB from './DoB';
import SelfieVerification from './SelfieVerification';
import VdoSelfie from './VdoSelfie';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();


const MuzLock = () => {
    
  const [showRealApp, setShowRealApp] = useState(true);
  const [currentInd, setCurrentInd] = useState(0);

  const slides = [
    {
      key: '1',
      logo: require('./assets/logo.png'),
      title: 'MuzLock',
      text: 'Discover',
      desc: 'Discover & meet single Muslims nearby',
      image: require('./assets/01-slide.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: '2',
      logo: require('./assets/logo.png'),
      title: 'MuzLock',
      text: 'Match',
      desc: "If other user also like your request, then it's a Match",

      image: require('./assets/1-slide.png'),
      backgroundColor: '#febe29',
    },
    {
      key: '3',
      logo: require('./assets/logo.png'),
      title: 'MuzLock',
      desc: 'Unlimited Audio/Video Calling without compromising your privacy.',

      text: 'Audio/Video Calls',
      image: require('./assets/3-slide.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: '4',
      logo: require('./assets/logo.png'),
      title: 'MuzLock',
      desc: 'Go Premium for an extra boost',
      text: 'Premium Club',
      image: require('./assets/2-slide.png'),
      backgroundColor: '#22bcb5',
    },
  ];
  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.logo} style={{height: '15%', width: '30%'}} />
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={{height: '50%', width: '70%'}} />
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 72}}
          locations={[0, 1]}
          colors={['blue', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.title}>{item.text}</Text>
        </LinearTextGradient>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };

  const _getStarted = () => {
    return (
      <View style={styles.getStartedBtnOut}>
        <Text style={styles.getStartedBtn}>Get Started</Text>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.NextbuttonCircle}>
        <Text style={styles.nextBtn}>Next</Text>
      </View>
    );
  };
  const _renderPrevButton = () => {
    return (
      <View style={styles.prevBtnOut}>
        <Text style={styles.nextBtn}>Previous</Text>
      </View>
    );
  };
  if (showRealApp) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="phone_verify">
            <Stack.Screen name="phone_verify" component={PhoneVerification} options={{headerShown:false}} />
            <Stack.Screen name="otp_verify" component={OTPVerification} options={{headerShown:false}} />
            <Stack.Screen name="gender" component={Gender} options={{headerShown:false}} />
            <Stack.Screen name="DoB" component={DoB} options={{headerShown:false}} />
            <Stack.Screen name="Location" component={Location} options={{headerShown:false}} />
            <Stack.Screen name="SelfieVerification" component={SelfieVerification} options={{headerShown:false}} />
            <Stack.Screen name="VdoSelfie" component={VdoSelfie} options={{headerShown:false}} />
            <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>
       
      </>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        bottomButton={true}
        onSlideChange={(item) => setCurrentInd(item)}
        renderNextButton={currentInd == 0 ? _getStarted : _renderNextButton}
        renderPrevButton={_renderPrevButton}
        renderDoneButton={_getStarted}
      />
    );
  }
};
const styles = StyleSheet.create({
  slide: {
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  text: {fontSize: 22},
  desc: {
    fontSize: 18,
    width: '80%',
    textAlign: 'center',
  },
  getStartedBtnOut: {
    width: '50%',
    backgroundColor: '#FF2535',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderRadius: 25,
  },
  NextbuttonCircle: {
    width: '40%',
    backgroundColor: '#FF2535',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: '5%',
    padding: 8,
    borderRadius: 25,
  },
  prevBtnOut: {
    width: '35%',
    backgroundColor: '#FF2535',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: '5%',
    padding: 8,
    borderRadius: 25,
  },
  getStartedBtn: {
    color: 'white',
    fontSize: 18,
  },
  nextBtn: {
    color: 'white',
    fontSize: 16,
  },
  renderPrev: {},
});
export default MuzLock;
