/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

export default class App extends React.Component{
  squareAnimation = new Animated.Value(0);
  textAnimation = new Animated.Value(0);

  doAnimation = () => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(this.squareAnimation, { toValue: 1, useNativeDriver: true, duration: 3000 }),
        Animated.timing(this.textAnimation, { toValue: 1, useNativeDriver: true, duration: 3000 }),
      ])
    ]).start();

    // This also fails:
    // setTimeout(() => {
    //   Animated.parallel([
    //     Animated.timing(this.squareAnimation, { toValue: 1, useNativeDriver: true, duration: 3000 }),
    //     Animated.timing(this.textAnimation, { toValue: 1, useNativeDriver: true, duration: 3000 }),
    //   ]).start();
    // }, 1000);
  }

  componentDidMount() {
    setTimeout(this.doAnimation, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.textContainer, {
          opacity: this.textAnimation
        }]}>
          Welcome to React Native!
        </Animated.Text>
        <Animated.View style={[styles.squareContainer, {
          opacity: this.squareAnimation
        }]}>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  squareContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'orange'
  },
});
