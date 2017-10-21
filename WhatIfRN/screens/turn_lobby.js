import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class TurnLobby extends Component {
  constructor(props){
    super(props);
    this.state = {
      disables: false
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

  nextPlayer = () => {
    this.setState({disabled: true});
    setTimeout(() => this.setState({disabled: false}), 3000);
    this.props.setOrdinal({
      ordinal: this.props.arrangement.ordinal + 1,
      code: this.props.team.team.code
    });
  };

  readOrWait = () => {
    const { arrangement, ordinal } = this.props.arrangement;
    const { user } = this.props;
    if (!arrangement[ordinal]) return <Text>No Question Found...</Text>;
    return arrangement[ordinal][user.id] ? (
      <View style={styles.internalContainer}>
          {arrangement[ordinal][user.id].question_id ? (
            <Text style={styles.ifThen} >
              Then...
            </Text>
          ) : (
            <Text style={styles.ifThen} >
              What if...
            </Text>
          )}
        <Text style={styles.questionAnswer}>
          {arrangement[ordinal][user.id].body}
        </Text>
        <View style={styles.button}>
          <Button disabled={this.state.disabled} title="Done Reading" onPress={this.nextPlayer} />
        </View>
      </View>
    ) : (
      <View style={styles.internalContainer}>
        <Text style={styles.waiting}>
          Waiting for turn.
        </Text>
      </View>
    );
  };

  render() {
    console.log('turnLobby', this.props);
    return (
      <View style={styles.container} >
        {this.readOrWait()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  internalContainer: {
    width: '100%',
    alignItems: 'center'
  },
  ifThen: {
    fontSize: 50,
    marginBottom: 20,
    marginTop: 30
  },
  questionAnswer: {
    fontSize: 20,
    marginBottom: 40,
    alignSelf: 'flex-start'
  },
  waiting: {
    fontSize: 40,
    margin: 20
  },
  button: {
    width: 150
  }
});