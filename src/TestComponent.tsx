import React from 'react';
import Svg, {Circle, Path, Polyline} from 'react-native-svg';
import {
  Alert,
  View,
} from 'react-native';



const TestComponent = () => {
  return (
    <View>
      <Svg width="900" height="900">
        <Path
          d="M250 100 L800 650 L700 250 L160 770 L110 300"
          strokeWidth="2"
          stroke="red"
        />
        <Circle onPress={() => Alert.alert('test')} cx="250" cy="100" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="800" cy="650" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="700" cy="250" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="160" cy="770" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="110" cy="300" r="10" />
      </Svg>
      <Svg width="900" height="900">
        <Polyline
          points="250,100 800,650 700,250 160,770 110,300"
          strokeWidth="2"
          stroke="red"
        />
        <Circle onPress={() => Alert.alert('test')} cx="250" cy="100" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="800" cy="650" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="700" cy="250" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="160" cy="770" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="110" cy="300" r="10" />
      </Svg>
    </View>
  );
};

export {TestComponent}
