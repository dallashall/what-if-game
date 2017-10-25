import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class StartScreen extends Component {
  constructor(){
    super();
    this.state = {
      disabled: false
    };
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const { cable } = this.props;
    if (cable.subscriptions['subscriptions'].length > 1) {
      cable.subscriptions.remove(cable.subscriptions['subscriptions'][1]);
    }
  }
  

  resetTo(routeName) {
    return NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    });
  }

  createTeam = () => {
    this.setState({disabled: true});
    this.props.createTeam()
      .then(
        () => this.props.navigation.dispatch(this.resetTo('CreateTeam')),
        error => console.log(error)
      );
  }

  goToScreen = (screen) => () => {
    this.setState({disabled: true});
    this.props.navigation.dispatch(this.resetTo(screen));
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
        <View style={{width: 150}}>
          <Button disabled={this.state.disabled} style={styles.btn} onPress={this.createTeam} title="Create Game" />
        </View>
        <Text style={styles.or}>
          OR
        </Text>
        <View style={{width: 150}}>
          <Button disabled={this.state.disabled} style={styles.btn} onPress={this.goToScreen('JoinGame')} title="Join Game" />
        </View>
        <TouchableOpacity onPress={this.goToScreen('Instructions')} style={styles.howToTouch}>
          <View style={styles.howToBtn}>
            <View style={styles.circle}>
              <Text style={styles.qMark}>
                ?
              </Text>
            </View>
            <Text style={styles.howToText}>
              Learn to play!
            </Text>
          </View>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 52,
    textAlign: 'center',
    margin: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 40,
  },
  or: {
    textAlign: 'center',
    margin: 10
  },
  btn: {
    fontSize: 30,
    width: 200
  },
  howToBtn: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    borderRadius: 2
  },
  howToTouch: {
    width: 160, 
    height: 100, 
    justifyContent: 'center', 
    alignItems: "center", 
    backgroundColor: '#F5FCFF'
  },
  howToText: {
    color: 'rgb(30, 30, 30)'
  },
  circle: {
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30
  }
});