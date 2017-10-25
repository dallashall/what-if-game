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

export default class CreateTeam extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      connected: false,
      channel: false,
      disabled: false
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

  componentDidMount() {
    console.log(this.props);
    this.subscribe(this.props.team.team.code);
  }

  componentWillReceiveProps(nextProps) {
    console.log('current props',this.props);
    console.log('next props', nextProps);
    if (this.props.screen !== nextProps.screen) {
      console.log('navigating to: ' + nextProps.screen)
      this.props.navigation.dispatch(this.resetTo(nextProps.screen));
    }
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
        that.setState({connected: true});
      }
    });
  }

  unsubscribe() {
    channel.unsubscribe();
    this.setState({connected: false});
  }

  startGame = () => {
    this.setState({disabled: true});
    this.props.startGame(this.props.team.team.code);
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
          Players Joined:
        </Text>
        <Text style={styles.players}>
          {members}
        </Text>
        <View style={styles.button}>
          <Button disabled={this.state.disabled} title="Start Game" onPress={this.startGame} />
        </View>
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
    marginBottom: 5,
  },
  code: {
    textAlign: 'center',
    fontSize: 80,
    marginBottom: 50
  },
  playersLabel: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  players: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 50,
  },
  button: {
    width: 150
  }
});