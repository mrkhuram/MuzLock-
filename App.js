/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MuzLock from './components/muzlock'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <MuzLock />
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
