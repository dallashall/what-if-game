import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class StartScreen extends Component {
  constructor(){
    super();
    this.state = {
      disabled: false
    };
  }

  static navigationOptions = {
    header: null,
  }

  resetTo(routeName) {
    return NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    });
  }

  createTeam = () => {
    this.setState({disabled: true});
    this.props.createTeam()
      .then(
        () => this.props.navigation.dispatch(this.resetTo('CreateTeam')),
        error => console.log(error)
      );
  }

  goToJoinGame = () => {
    this.setState({disabled: true});
    this.props.navigation.dispatch(this.resetTo('JoinTeam'));
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
        <View style={{width: 150}}>
          <Button disabled={this.state.disabled} style={styles.btn} onPress={this.createTeam} title="Create Game" />
        </View>
        <Text style={styles.or}>
          OR
        </Text>
        <View style={{width: 150}}>
          <Button disabled={this.state.disabled} style={styles.btn} onPress={this.goToJoinGame} title="Join Game" />
        </View>
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
    padding: 10
  },
  welcome: {
    fontSize: 52,
    textAlign: 'center',
    margin: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 40,
  },
  or: {
    textAlign: 'center',
    margin: 10
  },
  btn: {
    fontSize: 30,
    width: 200
  }
});