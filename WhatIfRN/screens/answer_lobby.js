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

export default class AnswerLobby extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      connected: false,
      channel: false
    };
  }

  resetTo(routeName) {
    return NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    });
  }

  componentWillMount() {
    if (Object.keys(this.props.answers).length === Object.keys(this.props.questions).length) {
      this.props.navigation.dispatch(this.resetTo("TurnLobby"));
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props);
    console.log('nextProps', nextProps);
    if (this.props.screen !== nextProps.screen) {
      this.props.navigation.dispatch(this.resetTo(nextProps.screen));
    }
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    console.log(this.props);
    const { team, members } = this.props.team;
    const { questions, answers } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Answers:
        </Text>
        <Text style={styles.answers}>
          {Object.keys(answers).length}/{Object.keys(questions).length}
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
  label: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    marginBottom: 5,
  },
  answers: {
    fontSize: 40
  }
});