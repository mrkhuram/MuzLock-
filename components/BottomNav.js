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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from './BottomScreens/SettingScreen';
import ProfileScreen from './BottomScreens/ProfileScreen';
import ProfileView from './BottomScreens/ProfileView';

const Tab = createBottomTabNavigator();

const MuzLock = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Tab.Navigator tabBarOptions={{activeTintColor: 'black'}} initialRouteName="SettingScreen">
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
              source={
                focused
                  ? require('./assets/Untitled-02.png')
                  : require('./assets/Untitled-2.png')
              }
                style={styles.bottomNav}
              />
            ),

            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Muzz"
          component={ProfileView}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/navigation-m-logo.png')}
                style={styles.bottomNav}
              />
            ),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Chat"
          component={SettingScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/navigation-message-logo.png')}
                style={styles.bottomNav}
              />
            ),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('./assets/Untitled-01.png')
                    : require('./assets/navigation-setting-icon.png')
                }
                style={styles.bottomNav}
              />
            ),
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    marginTop: '20%',
    height: 30,
    width: 30
  },
});
export default MuzLock;
