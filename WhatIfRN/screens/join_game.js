import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard
} from 'react-native';

export default class JoinGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      code:"",
      disabled: false
    };
  }

  static navigationOptions = {
    header: null,
  }

  joinGame = () => {
    Keyboard.dismiss();
    this.setState({ disabled: true });
    this.props.joinGame(this.state.code)
      .then(() => {
        this.subscribe(this.state.code);
      });
  }

  subscribe = (code) => {
    const { cable, dispatch } = this.props;
    const that = this;
    // if (cable.subscriptions['subscriptions'].length > 0) {
    //   cable.subscriptions.remove(cable.subscriptions['subscriptions'][0]);
    // }
    channel = cable.subscriptions.create({channel: 'TeamRoomChannel', teamRoom: code}, {
      received(data) {
        console.log('from socket', data);
        dispatch(data);
      },
      connected() {
        that.props.navigation.navigate('GameLobby');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Enter Game Code
        </Text>
        <TextInput style={styles.textInput} onChangeText={code => this.setState({ code })} value={this.state.code} />
        <View style={styles.button}>
          <Button disabled={this.state.disabled} title="Join" onPress={this.joinGame} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  textInput: {
    width: "100%",
    marginBottom: 20
  },
  button: {
    width: 150,
    marginBottom: 100
  }
});
