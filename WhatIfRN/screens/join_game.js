import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

export default class JoinGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      code:""
    };
  }

  static navigationOptions = {
    header: null,
  }

  joinGame = () => {
    this.props.joinGame(this.state.code)
      .then(() => {
        this.subscribe(this.state.code);
      });
  }

  subscribe = (code) => {
    const {cable, receiveTeam, user} = this.props;
    const that = this;
    channel = cable.subscriptions.create({channel: 'TeamRoomChannel', teamRoom: code, user}, {
      received(data) {
        receiveTeam(data);
        console.log(data);
      },
      connected() {
        that.setState({connected: true});
      }
    });
  }

  render() {
    return (
      <View>
        <Text>
          Enter Game Code
        </Text>
        <TextInput onChangeText={code => this.setState({ code })} value={this.state.code} />
        <Button title="Join" onPress={this.joinGame} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
