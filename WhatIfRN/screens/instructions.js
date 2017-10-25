import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

const instructions = [
  "First, gather your friends together.\n(This game works best if everyone is in the same room.)",
  "Make sure everyone has installed 'What If?! Party Game'",
  "One person will create a new game.",
  "Everyone else can join the game by typing in the 4-digit code.\n(Don't worry about capitilization)",
  "Once everyone has joined, the leader can start the game.",
  "Everyone will write 'What if' question.\n(It can be silly, personal, philosophical, or anything.)",
  "When everyone has finished writing, the questions will be shuffled.",
  "Everyone will answer the 'What if' question they were given.",
  "When all of the questions have been answered, the game shuffles the questions again.",
  "Everyone will have a turn to read a question.\nBut there is a catch!",
  "The answers are read out of order!",
  "Without trying, many answers will make just enough sense to be believed...",
  "And others will be unbelievably absurd.",
  "After an answer is read, the question it was intended for will be read.\n(That way everyone can know where such a rediculous answer came from)"
];

const images = [
  require('./img/0.png'),
  require('./img/1.png'),
  require('./img/2.png'),
  require('./img/3.png'),
  require('./img/4.png'),
  require('./img/5.png'),
  require('./img/6.png'),
  require('./img/7.png'),
  require('./img/8.png'),
  require('./img/9.png'),
  require('./img/9.png'),
  require('./img/11.png'),
  require('./img/12.png'),
  require('./img/13.png')
];

export default class Instructions extends Component {
  constructor(){
    super();
    this.state = {
      disabled: false,
      nextDisabled: false,
      backDisabled: true,
      instructions: 0,
      image: "./img/0.png"
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

  goToScreen = (screen) => () => {
    this.props.navigation.dispatch(this.resetTo(screen));
  }
  
  instructionsForward = () => {
    const backDisabled = false;
    const nextDisabled = this.state.instructions === instructions.length - 2;
    this.setState({ instructions: this.state.instructions + 1, nextDisabled, backDisabled });
  }
  
  instructionsBack = () => {
    const backDisabled = this.state.instructions === 1;
    const nextDisabled = false;
    this.setState({ instructions: this.state.instructions - 1, backDisabled, nextDisabled });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          How To Play:
        </Text>
        <View style={styles.instructionsContainer} >
          <Text style={styles.instructions}>
            {instructions[this.state.instructions]}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images[this.state.instructions]} />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.navBtn}>
            <Button disabled={this.state.backDisabled} style={styles.btn} onPress={this.instructionsBack} title="Back" />
          </View>
          <View style={styles.navBtn}>
            <Button disabled={this.state.nextDisabled} style={styles.btn} onPress={this.instructionsForward} title="Next!" />
          </View>
        </View>
        <View style={{width: 150, marginTop: 20}}>
          <Button disabled={this.state.disabled} style={styles.btn} onPress={this.goToScreen('Home')} title="Start Playing" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingBottom: 20
  },
  welcome: {
    fontSize: 52,
    textAlign: 'center',
    margin: 5
  },
  instructionsContainer: {
    height: 80
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {
    textAlign: 'center',
    margin: 10
  },
  btnContainer: {
    flexDirection: 'row'
  },
  btn: {
    fontSize: 30,
    width: 200
  },
  navBtn: {
    width: 150,
    margin: 5
  },
  image: {
    width: 300,
    height: 300,
  },
  imageContainer: {
    elevation: 2,
  }
});
