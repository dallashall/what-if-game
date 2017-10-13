import ActionCable from 'react-native-actioncable';

import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const cable = ActionCable.createConsumer('ws://192.168.1.126:3000/cable');


let channel;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      connected: false,
      channel: false
    };
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

  button() {
    return this.state.connected ? (
      <Button onPress={this.unsubscribe.bind(this)} title="disconnect">
        Disconnect
      </Button>
    ) : (
      <Button onPress={this.subscribe.bind(this, "new code")} title="connect">
        Connect
      </Button>
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
        {this.button()}
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
