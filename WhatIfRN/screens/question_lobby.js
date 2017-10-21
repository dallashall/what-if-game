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

export default class QuestionLobby extends Component {
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
    if (Object.keys(this.props.questions).length === this.props.team.members) {
      this.props.navigation.dispatch(this.resetTo("AnswerQuestion"));
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props);
    console.log('nextProps', nextProps);
    if (this.props.screen !== nextProps.screen && nextProps.screen !== "QuestionLobby") {
      this.props.navigation.dispatch(this.resetTo(nextProps.screen));
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
        <Text style={styles.label}>
          Questions:
        </Text>
        <Text style={styles.questions}>
          {Object.keys(this.props.questions).length}/{members}
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
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  questions: {
    fontSize: 50
  }
});