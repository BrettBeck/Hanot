import React from 'react';
import Svg, {Circle, Polyline} from 'react-native-svg';
import {Point} from "./sample"
import {
  Alert,
  View,
  Text,
} from 'react-native';

const data = "" // JSON
const json = JSON.parse(data)

const getData = () => {
  const points = json.ink.traceGroup.trace.toString().split(",")
  let parsedPoints:Point[] = new Array()
  points.forEach( (point: String) => {
    const e :Point = { x: 0, y: 0, t: 0, isSelected : false};
    e.x = parseFloat(point.split(" ")[0])
    e.y = parseFloat(point.split(" ")[1])
    parsedPoints.push(e) //le premier point va se retrouver à la fin de l'array
  });
  console.log(parsedPoints) 
  return parsedPoints //slice pour retirer des éléments du tableau
}

const dispSVG = (parsedPoints: Point[]) => {
    return(
      <Svg width="900" height="900">
        <Polyline
          points={parsedPoints.map(({x, y}) => `${x+500},${y+200}`).join(' ')}
          strokeWidth="2"
          stroke="red"
        />
        <Circle onPress={() => Alert.alert('test')} cx="250" cy="100" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="800" cy="650" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="700" cy="250" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="160" cy="770" r="10" />
        <Circle onPress={() => Alert.alert('test')} cx="110" cy="300" r="10" />
      </Svg>
    );
};

const TestComponent = () => {
  return (
    <View>
      <Text>{dispSVG(getData())}</Text>
      
    </View>
  );
};

export {TestComponent}
