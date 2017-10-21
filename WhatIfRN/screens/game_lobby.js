import ActionCable from 'react-native-actioncable';
import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class GameLobby extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      connected: false,
      channel: false
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

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props);
    console.log('nextProps', nextProps);
    if (this.props.screen !== nextProps.screen) {
      this.props.navigation.dispatch(this.resetTo(nextProps.screen));
    }
  }

  render() {
    console.log(this.props);
    const { team, members } = this.props.team;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Game Code:
        </Text>
        <Text style={styles.code}>
          {team.code}
        </Text>
        <Text style={styles.playersLabel}>
          Players Joined
        </Text>
        <Text style={styles.players}>
          {members}
        </Text>
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
  label: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  code: {
    textAlign: 'center',
    fontSize: 50,
    margin: 20
  },
  playersLabel: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  players: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
  },
});