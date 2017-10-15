import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class StartScreen extends Component {

  static navigationOptions = {
    header: null,
  }

  createTeam = () => {
    this.props.createTeam()
      .then(
        () => this.props.navigation.navigate('CreateTeam'),
        error => console.log(error)
      );
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What if?!
        </Text>
        <Text style={styles.instructions}>
          A game of unlimited imagination
        </Text>
        <Button onPress={this.createTeam} title="Create Team" />
        <Text style={styles.instructions}>
          OR
        </Text>
        <Button onPress={() => this.props.navigation.navigate('JoinTeam')} title="Join Game" />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});