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
    this.subscribe(this.props.team.team.code);
  }

  subscribe = (code) => {
    const { cable, dispatch } = this.props;
    const that = this;
    channel = cable.subscriptions.create({channel: 'TeamRoomChannel', teamRoom: code}, {
      received(data) {
        dispatch(data);
        console.log(data);
      },
      connected() {
        that.setState({connected: true});
      }
    });
  }

  unsubscribe() {
    channel.unsubscribe();
    this.setState({connected: false});
  }

  render() {
    console.log(this.props);
    const { team, members } = this.props.team;
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
        <Button title="Start Game" onPress={() => console.log('starting game...')} />
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