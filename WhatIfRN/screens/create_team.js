import ActionCable from 'react-native-actioncable';
import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const cable = ActionCable.createConsumer('ws://192.168.1.126:3000/cable');


let channel;

export default class CreateTeam extends Component {
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

  componentDidMount() {
    console.log(this.props);
    this.subscribe(this.props.all.team.code);
  }

  subscribe(code) {
    const that = this;
    channel = cable.subscriptions.create({channel: 'TeamRoomChannel', teamRoom: code}, {
      received(data) {
        that.setState(data);
        console.log(data);
      },
      connected() {
        console.log(that)
        that.setState({connected: true});
      }
  }
  );
  }

  unsubscribe() {
    channel.unsubscribe();
    this.setState({connected: false});
  }

  render() {
    const { team, members } = this.props.all;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your Code:
        </Text>
        <Text>
          {team.code}
        </Text>
        <Text style={styles.instructions}>
          Players Joined
        </Text>
        <Text>
          {members}
        </Text>
        <Text>
          {this.state.message}
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