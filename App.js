import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
            size={120}
            width={15}
            tintColor="#00e0ff"
            fill={10}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875">
              {
              (fill) => (
                <Text>
                  Data
                </Text>
              )
            }
          </AnimatedCircularProgress>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
