import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../screens/styles';
import {StackActions} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('HomeScreen'));
    }, 2000);
  }
  render() {
    return (
      <View style={{backgroundColor:'#242A32', alignItems:'center', paddingVertical:190}}>
        <MaterialIcons name="movie" size={100} color="#4FCCA3" />
      </View>
    );
  }
}

export default SplashScreen;
