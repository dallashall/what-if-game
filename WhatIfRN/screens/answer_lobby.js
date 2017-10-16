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

export default class AnswerLobby extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      connected: false,
      channel: false
    };
  }

  componentWillMount() {
    if (Object.keys(this.props.answers).length === Object.keys(this.props.questions).length) {
      this.props.navigation.navigate("TurnLobby");
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props);
    console.log('nextProps', nextProps);
    if (this.props.screen !== nextProps.screen) {
      this.props.navigation.navigate(nextProps.screen);
    }
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    console.log(this.props);
    const { team, members } = this.props.team;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Answers:
        </Text>
        <Text>
          {Object.keys(this.props.answers).length}/{Object.keys(this.props.questions).length}
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